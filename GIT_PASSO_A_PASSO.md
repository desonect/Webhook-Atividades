# 📚 Git e GitHub - Guia Completo para Iniciantes

## 🎯 O que vamos fazer

1. Instalar Git
2. Configurar Git
3. Criar repositório no GitHub
4. Enviar código para o GitHub
5. Conectar com Render

---

## 📥 Passo 1: Instalar Git

### Baixar:
- Site: https://git-scm.com/download/win
- Baixe a versão para Windows

### Instalar:
1. Execute o instalador
2. Deixe todas as opções padrão
3. Clique em "Next" até finalizar
4. Marque "Launch Git Bash" no final

---

## ⚙️ Passo 2: Configurar Git (PRIMEIRA VEZ)

Abra o **PowerShell** ou **Git Bash** e execute:

```bash
# Configurar seu nome
git config --global user.name "Seu Nome"

# Configurar seu email (use o mesmo do GitHub)
git config --global user.email "seu@email.com"

# Verificar se funcionou
git config --list
```

---

## 🌐 Passo 3: Criar Conta no GitHub

1. Acesse: https://github.com
2. Clique em **"Sign up"**
3. Crie sua conta
4. Confirme o email

---

## 📦 Passo 4: Criar Repositório no GitHub

### No site do GitHub:

1. Clique no **"+"** no canto superior direito
2. Selecione **"New repository"**
3. Preencha:
   - **Repository name**: `atividades-webhook` (ou outro nome)
   - **Description**: "Servidor de webhook para Atividades do Céu"
   - **Visibility**: Pode ser **Public** ou **Private**
   - ❌ **NÃO** marque "Add a README file"
   - ❌ **NÃO** adicione .gitignore
   - ❌ **NÃO** escolha license
4. Clique em **"Create repository"**

### Copie a URL do repositório
Vai aparecer algo como:
```
https://github.com/seu-usuario/atividades-webhook.git
```

**COPIE ESSA URL!** Vamos usar daqui a pouco.

---

## 💻 Passo 5: Preparar Projeto Local

### Abra o PowerShell na pasta do projeto:

1. Abra o **Windows Explorer**
2. Navegue até: `C:\Users\lllXlll\Documents\site\producao`
3. Na barra de endereço, digite: `powershell` e pressione Enter
4. O PowerShell vai abrir já na pasta certa

### Ou use o terminal do VS Code:
1. Abra o projeto no VS Code
2. Pressione **Ctrl + `** (abre o terminal)
3. Certifique-se que está na pasta: `c:\Users\lllXlll\Documents\site\producao`

---

## 🚀 Passo 6: Inicializar Git no Projeto

No terminal (PowerShell ou Git Bash), execute:

```bash
# 1. Inicializar repositório Git
git init

# 2. Verificar status (ver quais arquivos serão enviados)
git status
```

Você verá uma lista de arquivos em vermelho. Isso é normal!

---

## 📝 Passo 7: Adicionar Arquivos

```bash
# Adicionar TODOS os arquivos (o .gitignore já protege os sensíveis)
git add .

# Verificar novamente (agora devem estar em verde)
git status
```

### ⚠️ IMPORTANTE: Verificar se .env NÃO está na lista

Se você ver `.env` na lista verde, PARE e me avise!

Se NÃO ver `.env`, está tudo certo! ✅

---

## 💾 Passo 8: Fazer Commit

```bash
# Criar commit (salvar snapshot do código)
git commit -m "Primeiro commit: servidor de webhook"
```

Você verá uma mensagem de sucesso com quantos arquivos foram adicionados.

---

## 🔗 Passo 9: Conectar com GitHub

```bash
# Adicionar repositório remoto
# Substitua pela URL que você copiou do GitHub!
git remote add origin https://github.com/SEU-USUARIO/atividades-webhook.git

# Verificar se foi adicionado
git remote -v
```

---

## 📤 Passo 10: Enviar para GitHub

```bash
# Renomear branch para 'main' (se necessário)
git branch -M main

# Enviar código para o GitHub
git push -u origin main
```

### Se pedir login:
- **Username**: seu usuário do GitHub
- **Password**: use um **Personal Access Token** (não a senha normal)

#### Como criar Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Classic
3. Marque: `repo` (todas as opções)
4. Copie o token e use como senha

---

## ✅ Passo 11: Verificar no GitHub

1. Acesse seu repositório no GitHub
2. Atualize a página (F5)
3. Você deve ver todos os arquivos lá!

---

## 🎉 Pronto! Agora pode conectar com Render

Depois que o código estiver no GitHub:

1. Volte no Render
2. Clique em "New Web Service"
3. Conecte seu repositório
4. Configure e faça deploy!

---

## 🆘 Problemas Comuns

### "git: command not found"
- Feche e abra o terminal novamente
- Ou reinicie o VS Code
- Verifique se o Git foi instalado corretamente

### "Permission denied"
- Use Personal Access Token em vez de senha
- Ou configure SSH (mais avançado)

### ".env aparece na lista"
- Verifique se o `.gitignore` existe
- Verifique se tem `.env*` dentro do `.gitignore`
- Execute: `git rm --cached .env` para remover

### "Failed to push"
- Verifique se a URL do repositório está correta
- Verifique sua conexão com internet
- Tente: `git push -u origin main --force` (cuidado!)

---

## 📋 Comandos Resumidos (para copiar depois)

```bash
# Configuração inicial (só uma vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Para cada projeto novo
git init
git add .
git commit -m "Mensagem do commit"
git remote add origin URL_DO_GITHUB
git branch -M main
git push -u origin main

# Para atualizações futuras
git add .
git commit -m "Descrição da mudança"
git push
```

---

## 🎓 Conceitos Básicos

- **Repository (Repo)**: Pasta do projeto com histórico de versões
- **Commit**: Snapshot (foto) do código em um momento
- **Push**: Enviar commits para o GitHub
- **Pull**: Baixar atualizações do GitHub
- **Branch**: Linha do tempo paralela do código
- **Remote**: Repositório online (GitHub)

---

## 📞 Próximos Passos

1. ✅ Instalar Git
2. ⏳ Configurar Git
3. ⏳ Criar conta no GitHub
4. ⏳ Criar repositório
5. ⏳ Fazer push do código
6. ⏳ Conectar com Render
7. ⏳ Deploy!

---

**Me avise quando o Git terminar de instalar que eu te ajudo com os próximos passos!** 😊
