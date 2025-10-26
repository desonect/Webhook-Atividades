# 🤖 Guia Completo: Integração com n8n + WhatsApp

## 📋 O que você vai fazer

```
Compra → ggcheckout → Seu servidor → n8n → WhatsApp
```

---

## 🎯 Passo 1: Configurar Webhook no n8n

### 1.1 Acessar o n8n
Acesse seu n8n no Docker: `http://localhost:5678`

### 1.2 Criar novo Workflow
1. Clique em **"New Workflow"**
2. Dê um nome: **"Enviar Atividades WhatsApp"**

### 1.3 Adicionar nó Webhook
1. Clique no **"+"** para adicionar um nó
2. Procure por **"Webhook"**
3. Configure:
   - **HTTP Method**: `POST`
   - **Path**: `checkout-pagamento` (ou qualquer nome que quiser)
   - **Response Mode**: `Immediately`
   - **Response Code**: `200`

4. **Copie a URL do webhook** que aparece (algo como):
   ```
   http://localhost:5678/webhook/checkout-pagamento
   ```

### 1.4 Testar o Webhook
Clique em **"Listen for Test Event"** e deixe esperando.

---

## 🎯 Passo 2: Configurar .env no seu projeto

Crie o arquivo `.env` na raiz do projeto:

```env
PORT=3001
N8N_WEBHOOK_URL=http://localhost:5678/webhook/checkout-pagamento
```

**⚠️ Substitua pela URL real do seu n8n!**

---

## 🎯 Passo 3: Testar a Integração

### 3.1 Certifique-se que está tudo rodando:
- ✅ Servidor: `npm run server`
- ✅ ngrok: `ngrok http 3001`
- ✅ n8n: Docker rodando
- ✅ Webhook do n8n em "Listen for Test Event"

### 3.2 Simular uma compra:
Execute no PowerShell:

```powershell
Invoke-WebRequest -Uri "http://localhost:3001/webhook/checkout" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"event":"payment.approved","status":"approved","transaction_id":"TEST123","customer":{"name":"João Silva","email":"joao@email.com","phone":"5511999999999"},"product":{"name":"Atividades do Céu"},"payment":{"amount":10.99}}'
```

### 3.3 Verificar:
- ✅ No terminal do servidor você verá: `✅ Dados enviados para o n8n com sucesso!`
- ✅ No n8n você verá os dados chegando no webhook

---

## 🎯 Passo 4: Configurar WhatsApp no n8n

### 4.1 Adicionar nó HTTP Request (para WhatsApp API)
1. Adicione um novo nó após o Webhook
2. Procure por **"HTTP Request"**
3. Configure conforme sua API de WhatsApp

### Opções de API WhatsApp:

#### Opção A: Evolution API (Recomendado para iniciantes)
- GitHub: https://github.com/EvolutionAPI/evolution-api
- Fácil de usar com Docker
- Gratuito e open source

#### Opção B: WhatsApp Business API (Oficial)
- Mais complexo
- Requer aprovação do Meta

#### Opção C: Baileys (Node.js)
- Open source
- Usa WhatsApp Web

### 4.2 Exemplo de configuração com Evolution API:

```javascript
// No nó HTTP Request do n8n:
URL: http://seu-evolution-api:8080/message/sendText/sua-instancia
Method: POST
Headers:
  - apikey: sua_api_key
Body:
{
  "number": "{{ $json.telefone }}",
  "text": "Olá {{ $json.nome }}! 🎉\n\nSua compra foi confirmada!\n\nProduto: {{ $json.produto }}\nValor: R$ {{ $json.valor }}\n\nVocê receberá os arquivos em breve!\n\nTransação: {{ $json.transaction_id }}"
}
```

---

## 🎯 Passo 5: Estrutura do Workflow n8n Completo

```
1. Webhook (recebe dados)
   ↓
2. Set (formatar dados se necessário)
   ↓
3. HTTP Request (enviar mensagem WhatsApp)
   ↓
4. HTTP Request (enviar arquivo PDF - opcional)
```

---

## 📊 Dados que chegam no n8n

O webhook do n8n receberá estes dados:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "5511999999999",
  "transaction_id": "ABC123",
  "valor": 10.99,
  "status": "approved",
  "produto": "Atividades do Céu",
  "data_compra": "2025-10-25T22:00:00.000Z"
}
```

---

## 💡 Exemplo de Mensagem WhatsApp

```
🎉 Olá {{ nome }}!

Sua compra foi confirmada com sucesso!

📦 Produto: {{ produto }}
💰 Valor: R$ {{ valor }}
🆔 Transação: {{ transaction_id }}

📥 BAIXE SEUS ARQUIVOS:
👉 [Link para download]

Qualquer dúvida, estamos à disposição!

Atividades do Céu ✨
```

---

## 🔧 Troubleshooting

### Webhook não recebe dados
- ✅ Verifique se o servidor está rodando
- ✅ Confirme a URL no arquivo `.env`
- ✅ Veja os logs do servidor: deve aparecer "Enviando dados para o n8n"

### n8n não está acessível
- ✅ Verifique se o Docker está rodando
- ✅ Confirme a porta (padrão: 5678)
- ✅ Tente: `docker ps` para ver containers ativos

### WhatsApp não envia
- ✅ Verifique se a API do WhatsApp está configurada
- ✅ Confirme o formato do número (com DDI: 5511999999999)
- ✅ Teste a API separadamente antes

---

## 🚀 Próximos Passos

1. ✅ Configurar webhook no n8n
2. ✅ Testar recebimento de dados
3. ⏳ Configurar API do WhatsApp
4. ⏳ Criar mensagem personalizada
5. ⏳ Adicionar envio de arquivos
6. ⏳ Testar fluxo completo

---

## 📞 Estrutura de Arquivos do Projeto

```
producao/
├── server.js              # Servidor que recebe do ggcheckout
├── .env                   # Configurações (URL do n8n)
├── package.json
├── ngrok.yml             # Configuração do ngrok
└── GUIA_N8N.md           # Este guia
```

---

## 🎯 Fluxo Completo Funcionando

```
1. Cliente compra no site
   ↓
2. ggcheckout processa pagamento
   ↓
3. ggcheckout envia webhook para seu servidor (via ngrok)
   ↓
4. Seu servidor recebe e envia para n8n
   ↓
5. n8n processa e envia WhatsApp
   ↓
6. Cliente recebe mensagem com os arquivos
```

---

## ✅ Checklist Final

- [ ] n8n rodando no Docker
- [ ] Webhook criado no n8n
- [ ] URL do webhook copiada
- [ ] Arquivo .env criado com N8N_WEBHOOK_URL
- [ ] Servidor reiniciado
- [ ] Teste realizado com sucesso
- [ ] API WhatsApp configurada
- [ ] Mensagem personalizada criada
- [ ] Fluxo completo testado

---

## 🆘 Precisa de Ajuda?

Me avise se tiver dúvida em qualquer etapa! Posso te ajudar com:
- Configuração do Evolution API
- Criação do workflow no n8n
- Envio de arquivos pelo WhatsApp
- Deploy em produção
