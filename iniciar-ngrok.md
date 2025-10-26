# 🚀 Como Reiniciar o ngrok

## Passo 1: Parar o ngrok atual
No terminal onde o ngrok está rodando, pressione: **Ctrl + C**

## Passo 2: Iniciar com a nova configuração

### Opção A: Usando o arquivo de configuração
```bash
ngrok start webhook --config ngrok.yml
```

### Opção B: Comando direto (mais simples)
```bash
ngrok http 3001 --authtoken=34a8PSJdRAW5TJ0GeVxRvwniV8Q_4TzkpvZ8ZEZc2WfCCYjv9
```

## ✅ Verificar se funcionou

Após reiniciar, você verá a URL novamente. Teste abrindo no navegador:
```
https://sua-nova-url.ngrok-free.dev
```

Se aparecer uma página de aviso do ngrok, clique em "Visit Site" e você verá:
```json
{
  "status": "ok",
  "message": "Servidor de webhook ativo",
  "timestamp": "..."
}
```

## 🔗 Nova URL de Webhook

Depois de reiniciar, copie a nova URL e atualize no ggcheckout:
```
https://[NOVA-URL].ngrok-free.dev/webhook/checkout
```

---

## 💡 Dica

Se o erro persistir ao acessar pelo navegador, não se preocupe! O importante é que o **ggcheckout consiga enviar os webhooks**. 

O ngrok às vezes mostra uma página de aviso no navegador, mas os webhooks funcionam normalmente.
