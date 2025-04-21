# Desafio Monks React 2025


## 🚀 Rodando o projeto

1. Clone o projeto:


git clone https://github.com/ju-c-lopes/desafio-monks-react.git

cd desafio-monks-react

## 🐳 Docker Setup

> 💡 Este projeto pode ser executado via **Docker** de forma automatizada:

> 👉 Com o docker instalado na máquina, e após feito o clone do repositório, rodar o comando

```bash
   docker compose up -d --build
```

Após o comando finalizar, acessar:

[http://localhost:8000/wp-admin](http://localhost:8000/wp-admin)

Aparecerá a tela de login do wordpress, e o login pode ser feito com as seguintes credenciais:

```
🔐 Credenciais:

- **Usuário:**   wpuser
- **Senha:**     desafiomonks2025
```

## Instalar os seguintes plugins e ativá-los

1. [Advanced Custom Field (ACF&reg;)](http://localhost:8000/wp-admin/plugin-install.php?s=advanced-custom-type&tab=search&type=term)
2. [{ ACF to REST-API }](http://localhost:8000/wp-admin/plugin-install.php?s=acf-for-rest-api&tab=search&type=term)
---

## 🌐 Acessar a aplicação

1. Acesse:
   - **Frontend React**: http://localhost:5173
   - **Backend WordPress**: http://localhost:8000
   - **Painel Admin**: http://localhost:8000/wp-admin

📁 Estrutura montada:
- `./monks`: aplicação React (Vite + SCSS)
- `./wordpress`: tema WordPress customizado
- `.htaccess`: regras de rewrite e CORS liberado para React
- `000-default.conf`: configurações de Apache customizadas
- `docker-compose.yml`: orquestração da aplicação em container

---

## ✨ Funcionalidades

- [x] Página 100% responsiva
- [x] Layout seguindo o mockup do Figma
- [x] Navegação com menu hamburger (mobile)
- [x] Estilização modular em SCSS
- [x] Consumo dinâmico de dados via REST API do WordPress
- [x] Blocos separados no Figma convertidos em componentes React
- [x] Formulário com verificação de segurança (soma aleatória)
- [x] Validação de campos obrigatórios
- [x] Dados salvos em um custom post type no WordPress (`formularios`)
- [x] Breakpoints reutilizáveis com mixins personalizados

---

## 🧩 Estilização Responsiva

Este projeto utiliza uma abordagem de responsividade **de desktop para mobile**.

Foi criado um mixin chamado `responsive-to()` disponível no arquivo `breakpoints.scss`, com os seguintes aliases de breakpoint:

| Nome  | Largura máxima | Descrição         |
|-------|----------------|-------------------|
| sm    | 768px          | Smartphones       |
| md    | 1024px         | Tablets           |
| lg    | 1280px         | Laptops           |
| xl    | 1440px         | Desktops padrão   |
| xxl   | 1920px         | Telas muito amplas|

<hr />

## 💻 Para rodar a aplicação localmente

> 👉 Com o repositório do GitHub clonado, acessar o diretório:

```
cd desafio-monks-react
```

###  ![Vite](./monks/public/vite.svg) Instalar o Vite

> ⚙️ Com o node instalado, e estando no diretório raíz, rode o seguinte comando:

```
npm install -D vite
```

### ![React](./monks/public/react.svg) Instalar o React

> Para instalar o React, rode os seguintes comandos:

```
# Alterar para o diretório 'monks'
cd monks

# Rodar o comando
npm install
```

---

# Desafio feito por:
### 👤 *Juliano Lopes* 
🗓️ *Abril 2025*