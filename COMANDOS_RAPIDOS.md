# ⚡ Comandos Rápidos para GitHub

## 1️⃣ Configurar Git (só uma vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

## 2️⃣ Inicializar e enviar para GitHub

```bash
# Navegar até a pasta do projeto
cd C:\Users\lllXlll\Documents\site\producao

# Inicializar Git
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Adiciona servidor de webhook"

# Conectar com GitHub (SUBSTITUA pela sua URL!)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Renomear branch
git branch -M main

# Enviar para GitHub
git push -u origin main
```

---

## ⚠️ ANTES DE EXECUTAR:

1. **Crie o repositório no GitHub:**
   - Acesse: https://github.com/new
   - Nome: `atividades-webhook`
   - Deixe TUDO desmarcado
   - Clique em "Create repository"
   - **COPIE A URL** que aparecer

2. **Substitua no comando acima:**
   - Troque `https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git`
   - Pela URL que você copiou

---

## 🚀 Depois do Push

1. Acesse: https://render.com
2. Faça login com GitHub
3. Clique em "New Web Service"
4. Selecione o repositório `atividades-webhook`
5. Configure e faça deploy!
