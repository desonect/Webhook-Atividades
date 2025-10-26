# 🔄 Atualizar Código no Render

## Comandos para atualizar:

```bash
cd C:\Users\lllXlll\Documents\site\producao

git add .
git commit -m "Ajusta webhook para estrutura do ggcheckout"
git push
```

O Render vai fazer deploy automático! ✅

---

## ✅ O que foi ajustado:

1. **Status do pagamento** agora é detectado corretamente
2. **Eventos suportados:**
   - `pix.paid` ✅
   - `card.paid` ✅
   - `payment.approved` ✅
3. **Extração de dados** melhorada para produtos e valores
4. **Transaction ID** agora pega de `payment.id`

---

## 🔧 Corrigir erro 404 do n8n:

### Opção 1: Verificar URL no Render

1. Acesse: https://dashboard.render.com
2. Clique no seu serviço
3. Vá em **Environment**
4. Verifique se `N8N_WEBHOOK_URL` está correta:
   ```
   https://unnymphlike-love-nonindustrious.ngrok-free.dev/webhook-test/b9f6481c-49d4-4324-8231-fb746aed35d2
   ```

### Opção 2: Testar URL do n8n

Abra no navegador:
```
https://unnymphlike-love-nonindustrious.ngrok-free.dev/webhook-test/b9f6481c-49d4-4324-8231-fb746aed35d2
```

Se der erro 404, o webhook do n8n não está ativo!

### Opção 3: Reativar webhook no n8n

1. Abra o workflow no n8n
2. Clique no nó Webhook
3. Clique em **"Listen for Test Event"**
4. Deixe esperando

---

## 📋 Checklist:

- [ ] Código atualizado no GitHub
- [ ] Render fez deploy automático
- [ ] URL do n8n verificada
- [ ] Webhook do n8n ativo
- [ ] Teste realizado com sucesso
