# 📦 Como fazer Push para o GitHub

## Passo 1: Verificar o que vai ser enviado

```bash
git status
```

## Passo 2: Adicionar arquivos

```bash
# Adicionar apenas os arquivos necessários
git add server.js
git add package.json
git add package-lock.json
git add .gitignore

# OU adicionar tudo (o .gitignore já protege os arquivos sensíveis)
git add .
```

## Passo 3: Fazer commit

```bash
git commit -m "Adiciona servidor de webhook para ggcheckout"
```

## Passo 4: Push para o GitHub

```bash
git push origin main
```

---

## ⚠️ IMPORTANTE: Verificar .gitignore

Certifique-se que o `.gitignore` tem:

```
# Dependencies
node_modules/

# Env files
.env*

# Ngrok
ngrok.yml

# Logs
*.log
```

---

## 🔒 Segurança

✅ O arquivo `.env` NÃO será enviado (está no .gitignore)
✅ As variáveis de ambiente serão configuradas direto no Render
✅ Tokens e senhas ficam seguros

---

## 📋 Checklist antes do push

- [ ] `.gitignore` está correto
- [ ] `.env` NÃO está sendo rastreado
- [ ] `server.js` está funcionando localmente
- [ ] `package.json` tem o script "start"
- [ ] Commit feito
- [ ] Push realizado
