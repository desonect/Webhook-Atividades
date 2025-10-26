# 🌐 Como Expor Seu Servidor Local para o ggcheckout

Seu servidor está rodando em `http://localhost:3001`, mas o ggcheckout precisa de uma URL pública para enviar os webhooks.

## 🚀 Método 1: ngrok (Mais Fácil e Recomendado)

### Passo 1: Baixar o ngrok
1. Acesse: https://ngrok.com/download
2. Baixe a versão para Windows
3. Descompacte o arquivo

### Passo 2: Executar o ngrok
1. Abra um NOVO terminal (PowerShell ou CMD)
2. Navegue até a pasta onde descompactou o ngrok
3. Execute:
```bash
ngrok http 3001
```

### Passo 3: Copiar a URL
Você verá algo assim:
```
Forwarding  https://abc123def456.ngrok.io -> http://localhost:3001
```

**Copie a URL**: `https://abc123def456.ngrok.io`

### Passo 4: Configurar no ggcheckout
Cole no campo de webhook: `https://abc123def456.ngrok.io/webhook/checkout`

---

## 🔧 Método 2: localtunnel (Alternativa)

### Passo 1: Instalar (apenas uma vez)
```bash
npm install -g localtunnel
```

### Passo 2: Executar
```bash
lt --port 3001
```

### Passo 3: Copiar a URL
Você receberá: `https://xyz.loca.lt`

### Passo 4: Configurar no ggcheckout
Cole no campo de webhook: `https://xyz.loca.lt/webhook/checkout`

---

## ✅ Testar se Está Funcionando

### Teste 1: Verificar se o servidor está acessível
Abra no navegador: `https://sua-url-publica.ngrok.io`

Você deve ver:
```json
{
  "status": "ok",
  "message": "Servidor de webhook ativo",
  "timestamp": "..."
}
```

### Teste 2: Simular um webhook
Abra um novo terminal e execute:

```bash
curl -X POST https://sua-url-publica.ngrok.io/webhook/checkout -H "Content-Type: application/json" -d "{\"event\":\"payment.approved\",\"status\":\"approved\",\"customer\":{\"name\":\"Teste\",\"email\":\"teste@email.com\"}}"
```

---

## 📋 Checklist Final

- [ ] Servidor rodando (`npm run server`)
- [ ] ngrok ou localtunnel rodando
- [ ] URL pública copiada
- [ ] URL configurada no ggcheckout (adicione `/webhook/checkout` no final)
- [ ] Teste realizado com sucesso

---

## 🎯 URL Final para o ggcheckout

Sua URL de webhook será:

```
https://[SUA-URL-DO-NGROK]/webhook/checkout
```

**Exemplo:**
```
https://abc123.ngrok.io/webhook/checkout
```

---

## ⚠️ IMPORTANTE

- Mantenha AMBOS os terminais abertos:
  1. Terminal com `npm run server`
  2. Terminal com `ngrok http 3001`

- A URL do ngrok muda toda vez que você reinicia (na versão gratuita)
- Se reiniciar o ngrok, precisa atualizar a URL no ggcheckout

---

## 🆘 Problemas?

### ngrok não funciona
- Verifique se baixou a versão correta (Windows)
- Tente executar como administrador
- Verifique se a porta 3001 está livre

### Webhook não recebe dados
- Confirme que a URL no ggcheckout está correta
- Verifique se tem `/webhook/checkout` no final
- Olhe os logs no terminal do servidor

### Erro de CORS
- Já está configurado no servidor
- Se persistir, me avise que ajusto

---

## 🚀 Próximo Passo: Deploy em Produção

Para não depender de ngrok, você pode fazer deploy do servidor em:
- **Render** (gratuito): https://render.com
- **Railway** (gratuito): https://railway.app
- **Heroku** (pago): https://heroku.com

Quer ajuda para fazer o deploy?
