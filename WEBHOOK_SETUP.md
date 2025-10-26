# 🔗 Configuração do Webhook para ggcheckout

## 📋 O que é um Webhook?

Um webhook é uma URL que o sistema de checkout (ggcheckout) vai chamar automaticamente quando um pagamento for processado. Isso permite que você receba notificações em tempo real sobre as compras.

## 🚀 Como Configurar

### 1️⃣ Iniciar o Servidor Local

```bash
npm run server
```

O servidor vai rodar em: `http://localhost:3001`

### 2️⃣ Expor o Servidor para a Internet

Como você está em localhost, precisa usar uma ferramenta para expor seu servidor:

#### Opção A: Usando ngrok (Recomendado)

1. Baixe o ngrok: https://ngrok.com/download
2. Instale e execute:
```bash
ngrok http 3001
```
3. Você receberá uma URL pública tipo: `https://abc123.ngrok.io`

#### Opção B: Usando localtunnel

1. Instale globalmente:
```bash
npm install -g localtunnel
```
2. Execute:
```bash
lt --port 3001
```
3. Você receberá uma URL pública tipo: `https://xyz.loca.lt`

### 3️⃣ Configurar no ggcheckout

1. Acesse o painel do ggcheckout
2. Vá em configurações do seu produto
3. Procure por "Webhook URL" ou "URL de Notificação"
4. Cole a URL completa do webhook:
   - Se usar ngrok: `https://abc123.ngrok.io/webhook/checkout`
   - Se usar localtunnel: `https://xyz.loca.lt/webhook/checkout`

### 4️⃣ Testar o Webhook

Faça uma compra de teste no seu checkout. Você verá no console do servidor:

```
📩 Webhook recebido: {...}
🔔 Evento: payment.approved
💰 Status: approved
👤 Cliente: {...}
✅ Pagamento aprovado! Processando...
```

## 📊 Estrutura dos Dados Recebidos

O webhook recebe dados como:

```json
{
  "event": "payment.approved",
  "status": "approved",
  "transaction_id": "abc123",
  "customer": {
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "11999999999"
  },
  "product": {
    "name": "Atividades do Céu"
  },
  "payment": {
    "amount": 10.99
  }
}
```

## 🗄️ Salvar Dados no Supabase (Opcional)

Se você quiser salvar os dados dos compradores automaticamente:

### 1. Criar tabela no Supabase

Execute este SQL no Supabase:

```sql
CREATE TABLE compradores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT,
  email TEXT,
  telefone TEXT,
  transaction_id TEXT,
  valor DECIMAL,
  status TEXT,
  produto TEXT,
  data_compra TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  webhook_completo JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índice para buscar por email
CREATE INDEX idx_compradores_email ON compradores(email);

-- Índice para buscar por transaction_id
CREATE INDEX idx_compradores_transaction ON compradores(transaction_id);
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3001
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_KEY=sua_chave_anon_key
```

## 📧 Enviar Email Automaticamente (Próximo Passo)

Você pode adicionar código para enviar o produto por email automaticamente quando receber o webhook. Vou criar isso se você quiser!

## ⚠️ Importante para Produção

- **Segurança**: Adicione validação de assinatura do webhook
- **HTTPS**: Use sempre HTTPS em produção
- **Logs**: Monitore os logs para debugar problemas
- **Retry**: Implemente retry logic para falhas temporárias

## 🔍 Testando Localmente

Para testar sem fazer uma compra real:

```bash
# Teste simples
curl -X POST http://localhost:3001/webhook/test -H "Content-Type: application/json" -d '{"teste": "ok"}'

# Simular webhook de pagamento
curl -X POST http://localhost:3001/webhook/checkout \
  -H "Content-Type: application/json" \
  -d '{
    "event": "payment.approved",
    "status": "approved",
    "transaction_id": "test123",
    "customer": {
      "name": "Teste Silva",
      "email": "teste@email.com",
      "phone": "11999999999"
    },
    "payment": {
      "amount": 10.99
    }
  }'
```

## 🆘 Problemas Comuns

### Webhook não está sendo chamado
- Verifique se o servidor está rodando
- Confirme se a URL está correta no ggcheckout
- Verifique se o ngrok/localtunnel está ativo

### Dados não estão sendo salvos
- Verifique as credenciais do Supabase no `.env`
- Confirme se a tabela foi criada corretamente
- Veja os logs do console para erros

### Erro de CORS
- O servidor já está configurado com CORS habilitado
- Se persistir, adicione a origem específica no `server.js`

## 📞 Próximos Passos

1. ✅ Servidor de webhook criado
2. ⏳ Expor servidor com ngrok/localtunnel
3. ⏳ Configurar URL no ggcheckout
4. ⏳ Testar com compra real
5. ⏳ Implementar envio automático de email (se necessário)
6. ⏳ Deploy em produção (Heroku, Railway, Render, etc.)
