# Desafio Monks React 2025

## 🐳 Docker Setup

1. Execute `docker compose up --build`
2. Acesse:
   - Frontend React: http://localhost:5173
   - Backend WordPress: http://localhost:8000

🗂️ Estrutura montada:
- `./wordpress`: arquivos do WordPress
- `.htaccess`: regras de rewrite e CORS
- `000-default.conf`: configurações do Apache

🔐 Admin:
- user: admin
- pass: admin

## 🧩 Estilização Responsiva

Este projeto utiliza uma abordagem de responsividade **de desktop para mobile**, aproveitando o layout inicialmente criado para telas grandes.

Foi criado um mixin chamado `responsive-to()` disponível no arquivo `breakpoints.scss`, com os seguintes aliases de breakpoint:

| Nome  | Largura máxima | Descrição         |
|-------|----------------|-------------------|
| sm    | 768px          | Smartphones       |
| md    | 1024px         | Tablets           |
| lg    | 1280px         | Laptops           |
| xl    | 1440px         | Desktops padrão   |
| xxl   | 1920px         | Telas muito amplas|

### Como usar:

```scss
@include responsive-to(md) {
  .componente {
    flex-direction: column;
  }
}
