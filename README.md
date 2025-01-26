
# **League World - Angular**

## **📖 Sumário**
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Funcionalidades Implementadas](#-funcionalidades-implementadas)
3. [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
4. [Como Executar o Projeto](#️-como-executar-o-projeto)
5. [Detalhes da API](#-detalhes-da-api)
6. [Testes](#-testes)
7. [Melhorias Futuras](#-possíveis-melhorias-futuras)
8. [Demo publicada](#️-demo-publicada)
9. [Contribuição](#-contribuição)
10. [Licença](#-licença)

---

## 🚀 **Sobre o Projeto**
Este projeto foi desenvolvido como parte de um teste técnico para a posição de Analista de Sistemas - Angular para Grupo Nexxes. A aplicação é uma SPA (Single Page Application) desenvolvida em Angular, que permite aos usuários:

- Realizar login e registro.
- Listar campeões e filtrar por nome.
- Adicionar e gerenciar favoritos.
- Visualizar detalhes dos campeões, incluindo história (lore), skins e outras informações legais, como, suas `Classes` e suas `Habilidades`.
- Navegar de forma intuitiva e eficiente, utilizando Angular Material para a interface, tema customizado e animações.
- Navegar em qualquer resolução.
  
A aplicação consome uma API RESTful para fornecer as informações dinâmicas, garantindo a interatividade e funcionalidade esperadas.  

---

  ## 🎯 **Funcionalidades Implementadas**
### 1. **Tela de Login**
- Formulário de autenticação com validação de campos (e-mail e senha).
- Integração com a API para autenticar o usuário.
- Redirecionamento para a tela principal em caso de login bem-sucedido.
- Tratamento de erros amigável para falhas de autenticação.

### 2. **Tela de Registro**
- Formulário de cadastro com campos obrigatórios (e-mail, senha, etc.).
- Integração com a API para criação de novos usuários.
- Redirecionamento automático para a tela de login após o cadastro.

### 3. **Tela de Listagem de Campeões**
- Listagem dos campeões retornados pela API, exibindo informações como:
  - Nome.
  - Título.
  - Ícone e imagem.
  - Hitória comprimida (Blurb)
  - Botões de ações (Favorito/Detalhes)
- Campo de filtro para busca por nome.
- Layout responsivo e intuitivo.

### 4. **Tela de Detalhes do Campeão**
- Exibição detalhada do campeão selecionado, incluindo:
  - Nome.
  - Título.
  - História (lore).
  - Classes (Tag)
  - Habilidades
  - Passiva (Passive)
  - Lista de skins imersiva (Card de skins, simula tela de carregamento do Jogo):
      - Nome da skin.
      - Runas
      - Magias
      - Icone de perfil do jogador (Dinâmico)
      - Nome do jogador - **Grupo_Nexus** (O nome Nexus faz referência ao jogo, mas também pode ser considerado um trocadilho divertido com o nome da empresa - **Grupo Nexxes**)
- Exibição das imagens de skins ampliadas em um **Modal**.
- Integração com a API para obter todas as informações disponíveis.

  
### 5. **Área de Favoritos**
- Permite que o usuário adicione campeões à sua lista de favoritos.
- Exibição de todos os campeões favoritados em uma página dedicada.
- Opção para remover campeões da lista de favoritos.
- Lista de favoritos persistente no localStorage (associada ao usuário logado, obtida via token JWT).

### 6. **Extras Implementados**
- **Decodificação do token JWT:** Para obter informações do usuário autenticado (ex.: `username` e `exp`).
- **Design responsivo:** A aplicação funciona bem em diferentes tamanhos de tela.
- **Melhorias visuais:** Animações suaves e temas customizados utilizando Angular Material.
- **Funcionalidade de favoritos:** É possivel favoritar os campeões que mais combina com você.
- **Area de favoritos:** A aplicação permite o gerenciamento dos favoritos.
- **Loader/Skeleton:** Implementação de loader do tipo skeleton para os cards.
- **Lazy Loading:** Implementação de Lazy loagind para rotas e carregamento das imagens.
- **Teste unitarios:** Implementação de testes unitarios para alguns `Componentes` e `Serviços`.

---

## 🛠️ **Tecnologias Utilizadas**
- **Angular** (versão 17.3.11)
- **Angular Material** para componentes de UI (versão 17.3.10)
- **TypeScript** Para tipagem estática e código escalável (versão 5.4.5)
- **SCSS** Para estilização
- **API RESTful** [Documentação Swagger](https://lol2-4vk5.onrender.com/api-docs)
- **RxJS** Para gerenciamento de estados (versão 7.8.1)
- **JWT decode** Para decodificação do token JWT de autenticação (versão 4.0.0)

---

## ⚙️ **Como Executar o Projeto**
Siga os passos abaixo para rodar o projeto localmente:

### **Pré-requisitos**
- **Node.js** (versão ^18.13.0 || ^20.9.0)
- **Angular CLI** (versão 17+)
- Gerenciador de pacotes npm ou yarn

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/SuetamId/league-world.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd league-world
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
5. Acesse a aplicação no navegador:
   ```
   http://localhost:4200
   ```

---

## 🌐 **Detalhes da API**
A aplicação consome a API disponível em: [https://lol2-4vk5.onrender.com](https://lol2-4vk5.onrender.com)
Confira os principais endpoints utilizados:

- **Autenticação:**
  - `POST /login`: Realiza login do usuário.
  - `POST /register`: Registra um novo usuário.

- **Campeões:**
  - `GET /champions`: Retorna a lista de campeões.
  - `GET /champions/:name`: Retorna os detalhes de um campeão específico.
    
---

## 🧪 **Testes**
Foram implementados alguns testes unitários para componentes e serviços utilizando o framework **Karma** e **Jasmine**.

- Execute os testes com o comando:
  ```bash
  ng test
  ```
---

## 📈 **Melhorias Futuras**
- **Frontend** Implementação de testes de ponta a ponta (E2E) com **Cypress**.
- **Frontend** Criptografia das senhas.
- **Frontend** Lista de desejo para as skins.
- **Frontend** Dark moode.
- **API** Melhorias na performance da aplicação, incluindo paginação.
- **API / Frontend** Persistencia de favoritos no banco de dados e endpoint para retorno.
---

## 🖥️ **Demo publicada**
A aplicação foi publicada e está disponível em:  
[https://league-world.vercel.app/](https://league-world.vercel.app/)

---

## 🤝 **Contribuição**
Fique à vontade para abrir issues ou enviar pull requests caso queira contribuir!

---

## 📝 **Licença**
Este projeto é apenas para fins de avaliação técnica.

---
