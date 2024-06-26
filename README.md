# Sistema de Restaurante

## Instalações Básicas

### Front-end

1. Navegue até a pasta `Front-end`:
   ```bash
   cd Front-end
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Após a instalação, inicie a aplicação:
   ```bash
   npm start
   ```

### Back-end

1. Abra a pasta `Back-end` em outra janela da sua IDE.
2. Instale as dependências:
   ```bash
   npm install
   ```

## Estrutura de Pastas

### Front-end

- `src` - Contém todos os arquivos do projeto.
- `assets` - Imagens utilizadas no projeto.
- `components` - Componentes que foram utilizados para compor a aplicação.
- `types` - Arquivo de tipos para dados no TypeScript.

### Back-end

- `src` - Contém todos os arquivos do projeto.
- `db` - Há dois arquivos nesta pasta:
  - `index.ts` - Utilizado para fazer toda conexão e interação com o banco de dados.
  - `tables.sql` - Contém os comandos para criação das tabelas e colunas do banco de dados para testes.
- `index.ts` - Arquivo que configura as rotas da aplicação.

## Objetivo do Projeto

Esse projeto consiste em um sistema de restaurante. A aplicação deve ser um cardápio digital sendo capaz de coletar informações para que possa ser gerado um pedido. A ideia do aplicativo é mapear todas as mesas do restaurante, evitando o gasto com cadastro de muitos usuários. Em cada mesa deve haver um dispositivo rodando a aplicação.

O cliente poderá inserir seu nome e escolher até 5 pratos e 5 bebidas por pedido. Após a seleção, será gerado um pedido, e a página será redirecionada para outra tela, onde é possível ver as informações sobre os pratos e as bebidas juntamente com o nome do cliente. Esta mesma página será compartilhada com a Cozinha e a Copa, assim processando o pedido.
#
#
