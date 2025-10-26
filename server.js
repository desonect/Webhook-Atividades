import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inicializar Supabase (se você tiver configurado)
const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
  : null;

// Rota de teste
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Servidor de webhook ativo',
    timestamp: new Date().toISOString()
  });
});

// Rota de webhook para receber notificações do ggcheckout
app.post('/webhook/checkout', async (req, res) => {
  try {
    console.log('📩 Webhook recebido:', JSON.stringify(req.body, null, 2));
    
    const webhookData = req.body;
    
    // Extrair dados importantes do webhook
    const {
      event,
      data,
      transaction_id,
      customer,
      product,
      payment,
      status
    } = webhookData;

    console.log('🔔 Evento:', event);
    console.log('💰 Status:', status);
    console.log('👤 Cliente:', customer);

    // Processar apenas pagamentos aprovados
    if (status === 'approved' || status === 'paid' || event === 'payment.approved') {
      console.log('✅ Pagamento aprovado! Processando...');

      // Dados do comprador
      const compradorData = {
        nome: customer?.name || data?.customer?.name || 'Não informado',
        email: customer?.email || data?.customer?.email || 'Não informado',
        telefone: customer?.phone || data?.customer?.phone || 'Não informado',
        transaction_id: transaction_id || data?.transaction_id || 'N/A',
        valor: payment?.amount || data?.amount || 0,
        status: status || 'approved',
        produto: product?.name || data?.product?.name || 'Atividades do Céu',
        data_compra: new Date().toISOString(),
        webhook_completo: webhookData
      };

      console.log('📝 Dados do comprador:', compradorData);

      // Enviar para o n8n
      if (process.env.N8N_WEBHOOK_URL) {
        try {
          console.log('🔄 Enviando dados para o n8n...');
          
          const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(compradorData)
          });

          if (n8nResponse.ok) {
            console.log('✅ Dados enviados para o n8n com sucesso!');
          } else {
            console.error('❌ Erro ao enviar para o n8n:', n8nResponse.status);
          }
        } catch (n8nError) {
          console.error('❌ Erro ao conectar com n8n:', n8nError.message);
        }
      } else {
        console.log('⚠️ N8N_WEBHOOK_URL não configurada. Configure no arquivo .env');
      }

      // Salvar no Supabase (se configurado)
      if (supabase) {
        try {
          const { data: savedData, error } = await supabase
            .from('compradores')
            .insert([compradorData]);

          if (error) {
            console.error('❌ Erro ao salvar no Supabase:', error);
          } else {
            console.log('✅ Dados salvos no Supabase com sucesso!');
          }
        } catch (dbError) {
          console.error('❌ Erro de banco de dados:', dbError);
        }
      }

      res.status(200).json({ 
        success: true, 
        message: 'Webhook processado com sucesso',
        transaction_id: compradorData.transaction_id
      });

    } else {
      console.log('⏳ Pagamento pendente ou outro status:', status);
      res.status(200).json({ 
        success: true, 
        message: 'Webhook recebido, aguardando confirmação de pagamento',
        status: status
      });
    }

  } catch (error) {
    console.error('❌ Erro ao processar webhook:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao processar webhook',
      message: error.message 
    });
  }
});

// Rota alternativa para testar o webhook
app.post('/webhook/test', (req, res) => {
  console.log('🧪 Teste de webhook:', req.body);
  res.json({ 
    success: true, 
    message: 'Webhook de teste recebido',
    data: req.body 
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 URL local: http://localhost:${PORT}`);
  console.log(`🔗 Endpoint webhook: http://localhost:${PORT}/webhook/checkout`);
  console.log(`\n⚠️  Para usar em produção, você precisa expor este servidor com ngrok ou similar.`);
});
