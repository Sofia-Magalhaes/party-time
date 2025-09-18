# Party Time

Este repositório contém o código-fonte para o projeto 'Party Time', uma aplicação desenvolvida para a criação e gerenciamento de festas. O projeto é dividido em duas partes principais: um backend em Node.js e um frontend em React.js.

## Tecnologias Utilizadas

### Backend

*   **Node.js**: Ambiente de execução JavaScript.
*   **Express.js**: Framework web para Node.js.
*   **MongoDB**: Banco de dados NoSQL.
*   **Mongoose**: Modelagem de objetos MongoDB para Node.js.
*   **CORS**: Middleware para habilitar o Cross-Origin Resource Sharing.
*   **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

### Frontend

*   **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite**: Ferramenta de build para projetos frontend.
*   **Axios**: Cliente HTTP baseado em Promises para o navegador e Node.js.
*   **React Router DOM**: Biblioteca para roteamento declarativo no React.
*   **React Toastify**: Biblioteca para notificações toast no React.

## Estrutura do Projeto

O projeto é organizado em dois diretórios principais:

*   `backend/`: Contém o código-fonte do servidor Node.js.
    *   `app.js`: Ponto de entrada da aplicação backend.
    *   `controllers/`: Lógica de negócio para as rotas.
    *   `db/`: Configuração da conexão com o banco de dados.
    *   `models/`: Definição dos schemas do MongoDB com Mongoose.
    *   `routes/`: Definição das rotas da API.
    *   `package.json`: Dependências e scripts do backend.

*   `frontend/`: Contém o código-fonte da aplicação React.js.
    *   `src/`: Código-fonte principal da aplicação React.
    *   `public/`: Arquivos estáticos.
    *   `index.html`: Arquivo HTML principal.
    *   `package.json`: Dependências e scripts do frontend.
    *   `vite.config.js`: Configuração do Vite.

## Funcionalidades

Este projeto permite:

*   Criar e gerenciar festas.
*   Visualizar detalhes das festas.
  
## Funcionalidades Futuras
*   Autenticação de usuário
*   Reformulação do design
*   CRUD de serviços
