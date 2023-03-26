# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**


## *Aluna(o): Nahan Filipe Duarte Rezende*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

Este projeto consiste no desenvolvimento de uma aplicação para a criação de pesquisas rápidas com múltiplas respostas pre definidas.

### 1. Funcionalidades implementadas
Conforme o escopo definido no inicio do projeto, as funcionalidades implementadas foram:

- Criação de pesquisa com várias respostas
- Listagem de todas as pesquisas ativas no site
- Resposta de pesquisas selecionadas
- Exclusão de uma pesquisa
  
### 2. Funcionalidades previstas e não implementadas
Dado o escopo inicial do projeto, todas as funcionalidades foram implementadas, porém ficou como parte de uma evolução do projeto a implementação das seguintes funcionalidades:
- Edição de uma uma pesquisa e de suas respostas.
- Criação de um sistema robusto contendo usuários e login para a melhor utilização do sistema.

### 3. Principais desafios e dificuldades
<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->
O desafio principal foi realizar um projeto tentando utilizar o minimo de css ou html possível, a ideia era ter um repositório onde somente javascript e typescript fossem as linguagens utilizadas.
### 4. Instruções para instalação e execução
<!-- Descrever o que deve ser feito para instalar (ou baixar) a aplicação, o que precisa ser configurando (parâmetros, banco de dados e afins) e como executá-la. -->
## 1- Pré-Requisitos 
Tenha instalado na sua máquina: 
- Node.js (versão recomendada: 14 ou superior);
- npm ou yarn (gerenciador de pacotes);

## 2- Instalando as depências do projeto
- Com o projeto criado em sua máquina, navegue até a pasta server do projeto e instale as dependências do projeto utilizando o comando:  ```npm i ou yarn```
- Crie em sua maquina um container docker com postgres.
```docker run --name postgres -e POSTGRES_PASSWORD=suasenha -p 5432:5432 -d postgres```
- Após criação e inicialização do container docker, crie os aquivos .env de arcodo com os aquivos .env.example presentes na pasta api.
- Posteriormente rode as migrations para a criação das tabelas do banco de dados.
```yarn typeorm migration:run```
- Para rodar o projeto do servidor digite  ```yarn dev```
- O servidor backend do projeto está configurado para rodar na porta 4003. 
Para acessá-lo, basta digitar http://localhost:4003 em seu navegador ou insomnia."

- Já para visualizar o frontend do projeto, navegue até a pasta web do projeto e instale as dependências do projeto utilizando o comando:  ```npm i ou yarn```
- Após instalação das dependências crie os aquivos .env de arcodo com os aquivos .env.example presentes na pasta frontend.
- Para rodar o projeto do frontend digite: 
```yarn start```
- O servidor frontend do projeto está configurado para rodar na porta 3000. 
Para acessá-lo, basta digitar http://localhost:3000 em seu navegador."