# 🚀 Deploy em Produção - atividadesdoceu.shop

## 🎯 Arquitetura em Produção

```
atividadesdoceu.shop (Site principal - Netlify/Vercel)
    ↓
ggcheckout (Pagamento)
    ↓
webhook.atividadesdoceu.shop (Servidor Node.js - Render/Railway)
    ↓
n8n (Docker local ou cloud)
    ↓
WhatsApp
```

---

## 📋 Opção 1: Deploy no Render (Gratuito)

### Passo 1: Preparar o Projeto

Já está pronto! Só precisa fazer push para o GitHub.

### Passo 2: Criar conta no Render
1. Acesse: https://render.com
2. Faça login com GitHub

### Passo 3: Criar Web Service
1. Clique em **"New +"** → **"Web Service"**
2. Conecte seu repositório GitHub
3. Configure:
   - **Name**: `atividades-webhook`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm run server`
   - **Plan**: `Free`

### Passo 4: Adicionar Variáveis de Ambiente
No Render, vá em **Environment** e adicione:

```
PORT=3001
N8N_WEBHOOK_URL=http://seu-n8n:5678/webhook/checkout-pagamento
```

### Passo 5: Deploy
Clique em **"Create Web Service"**

Você receberá uma URL tipo: `https://atividades-webhook.onrender.com`

### Passo 6: Configurar Domínio Personalizado
1. No Render, vá em **Settings** → **Custom Domain**
2. Adicione: `webhook.atividadesdoceu.shop`
3. Configure DNS no seu provedor:
   ```
   CNAME webhook atividades-webhook.onrender.com
   ```

### Passo 7: Configurar no ggcheckout
URL final: `https://webhook.atividadesdoceu.shop/webhook/checkout`

---

## 📋 Opção 2: Deploy no Railway (Gratuito)

### Passo 1: Criar conta
1. Acesse: https://railway.app
2. Login com GitHub

### Passo 2: New Project
1. Clique em **"New Project"**
2. Selecione **"Deploy from GitHub repo"**
3. Escolha seu repositório

### Passo 3: Configurar
Railway detecta automaticamente Node.js

Adicione variáveis de ambiente:
```
PORT=3001
N8N_WEBHOOK_URL=http://seu-n8n:5678/webhook/checkout-pagamento
```

### Passo 4: Domínio Personalizado
1. Clique em **Settings** → **Domains**
2. Adicione domínio customizado: `webhook.atividadesdoceu.shop`
3. Configure DNS:
   ```
   CNAME webhook [seu-projeto].up.railway.app
   ```

---

## 📋 Opção 3: n8n Direto (Mais Simples)

Se seu n8n estiver acessível publicamente, pode configurar o ggcheckout para enviar direto.

### Vantagens:
- ✅ Menos componentes
- ✅ Mais direto

### Desvantagens:
- ❌ Precisa expor n8n publicamente
- ❌ Menos controle sobre os dados

### Como fazer:
1. Exponha seu n8n com ngrok ou domínio próprio
2. Configure no ggcheckout: `https://n8n.atividadesdoceu.shop/webhook/checkout-pagamento`

---

## 🗂️ Arquivos Necessários para Deploy

### 1. package.json (já existe)
Certifique-se que tem:
```json
{
  "scripts": {
    "server": "node server.js",
    "start": "node server.js"
  }
}
```

### 2. .gitignore (já existe)
Certifique-se que tem:
```
node_modules/
.env
```

### 3. README.md (opcional)
```markdown
# Webhook Server - Atividades do Céu

Servidor Node.js para processar webhooks do ggcheckout e enviar para n8n.

## Deploy

Este projeto está configurado para deploy automático no Render/Railway.

## Variáveis de Ambiente

- `PORT`: Porta do servidor (padrão: 3001)
- `N8N_WEBHOOK_URL`: URL do webhook do n8n
```

---

## 🔒 Segurança em Produção

### 1. Validar Webhook do ggcheckout
Adicione validação de assinatura (se o ggcheckout fornecer)

### 2. Rate Limiting
Adicione proteção contra spam:
```bash
npm install express-rate-limit
```

### 3. HTTPS
Render e Railway já fornecem HTTPS automático

### 4. Logs
Configure logs para monitorar:
```bash
npm install winston
```

---

## 🧪 Testar em Produção

### 1. Verificar se está online
```bash
curl https://webhook.atividadesdoceu.shop
```

Deve retornar:
```json
{
  "status": "ok",
  "message": "Servidor de webhook ativo",
  "timestamp": "..."
}
```

### 2. Testar webhook
```bash
curl -X POST https://webhook.atividadesdoceu.shop/webhook/checkout \
  -H "Content-Type: application/json" \
  -d '{"event":"payment.approved","status":"approved","customer":{"name":"Teste"}}'
```

### 3. Compra de teste
Faça uma compra teste no ggcheckout e monitore os logs

---

## 📊 Monitoramento

### Render
- Logs em tempo real no dashboard
- Métricas de uso
- Alertas automáticos

### Railway
- Logs integrados
- Métricas de performance
- Deploy automático no push

---

## 🔄 Fluxo de Deploy

```
1. Código local → GitHub
2. GitHub → Render/Railway (deploy automático)
3. Render/Railway → URL pública
4. Configurar DNS → webhook.atividadesdoceu.shop
5. Configurar ggcheckout → webhook.atividadesdoceu.shop/webhook/checkout
```

---

## 💰 Custos

### Gratuito:
- ✅ Render: 750 horas/mês (suficiente)
- ✅ Railway: $5 crédito mensal
- ✅ Netlify/Vercel: Site estático ilimitado

### Se precisar escalar:
- Render Pro: $7/mês
- Railway Pro: $5/mês

---

## 🆘 Troubleshooting Produção

### Webhook não funciona
- ✅ Verifique logs no Render/Railway
- ✅ Confirme variáveis de ambiente
- ✅ Teste URL diretamente

### n8n não recebe dados
- ✅ Verifique se n8n está acessível
- ✅ Confirme URL no .env
- ✅ Teste conexão entre servidores

### DNS não resolve
- ✅ Aguarde propagação (até 48h)
- ✅ Use `nslookup webhook.atividadesdoceu.shop`
- ✅ Verifique configuração no provedor

---

## ✅ Checklist de Deploy

- [ ] Código no GitHub
- [ ] Conta criada no Render/Railway
- [ ] Web Service criado
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] URL funcionando
- [ ] DNS configurado (opcional)
- [ ] Webhook testado
- [ ] ggcheckout configurado
- [ ] Compra de teste realizada
- [ ] n8n recebendo dados
- [ ] WhatsApp enviando mensagens

---

## 🚀 Próximos Passos

1. ⏳ Fazer push do código para GitHub
2. ⏳ Criar conta no Render ou Railway
3. ⏳ Fazer deploy
4. ⏳ Configurar domínio (opcional)
5. ⏳ Atualizar URL no ggcheckout
6. ⏳ Testar fluxo completo
