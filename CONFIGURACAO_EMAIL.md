# 📧 Configuração do Sistema de Envio de Email - Tintto Hotel

## ✅ Funcionalidades Implementadas

### 1. Componente de Formulário (`components/contact-form.tsx`)
- **Campos**: Nome, email, telefone, mensagem e checkbox de newsletter
- **Validação**: Campos obrigatórios e validação de email
- **Estados**: Loading, sucesso e erro
- **Feedback visual**: Mensagens de status para o usuário

### 2. API Route (`app/api/send-email/route.ts`)
- **Endpoint**: `/api/send-email`
- **Método**: POST
- **Destino**: `comercial@tinttohotel.com.br`
- **Formato**: Email estruturado com todos os dados do formulário

### 3. Footer Atualizado (`components/footer.tsx`)
- **Substituído**: Formulário estático pelo componente funcional
- **Mantido**: Layout e estilos originais

## 🔧 Funcionalidades Implementadas

### Validação:
- ✅ Campos obrigatórios (nome, email, telefone, mensagem)
- ✅ Validação de formato de email
- ✅ Feedback visual de erros

### Envio de Email:
- ✅ Dados estruturados para `comercial@tinttohotel.com.br`
- ✅ Assunto personalizado com nome do remetente
- ✅ Corpo do email com todos os dados
- ✅ Informações de data/hora e IP

### UX/UI:
- ✅ Estado de loading durante envio
- ✅ Mensagens de sucesso/erro
- ✅ Limpeza do formulário após envio
- ✅ Botão desabilitado durante envio

## 📧 Estrutura do Email Enviado

**Para:** `comercial@tinttohotel.com.br`  
**Assunto:** `Nova mensagem de contato - [Nome do usuário]`

```
Nome: [Nome]
Email: [Email]
Telefone: [Telefone]
Aceita newsletter: [Sim/Não]

Mensagem:
[Mensagem do usuário]

---
Enviado em: [Data/Hora]
IP: [IP do usuário]
```

## ⚙️ Configuração Necessária

### 1. Criar arquivo `.env.local`

Crie um arquivo `.env.local` na raiz do projeto:

```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

### 2. Configuração do Gmail (Recomendado)

1. Acesse: https://myaccount.google.com/
2. Vá em "Segurança" → "Verificação em duas etapas" (ative se necessário)
3. Vá em "Segurança" → "Senhas de app"
4. Clique em "Selecionar app" → "Outro (nome personalizado)"
5. Digite "Tintto Hotel" e clique em "Gerar"
6. Copie a senha gerada para o arquivo `.env.local`

### 3. Testando o Sistema

1. Inicie o servidor:
   ```bash
   pnpm dev
   ```

2. Acesse o site e vá até o formulário de contato no footer

3. Preencha os campos obrigatórios e clique em "ENVIAR"

4. Verifique se o email foi enviado para `comercial@tinttohotel.com.br`

## 📁 Estrutura dos Arquivos

```
components/
├── contact-form.tsx    # Componente do formulário
└── footer.tsx         # Footer atualizado

app/api/send-email/
└── route.ts           # API route para envio de email
```

## 🎨 Design Mantido

- ✅ Layout original preservado
- ✅ Cores e estilos do Tintto Hotel
- ✅ Responsividade mantida
- ✅ Feedback visual consistente
