# Exercício de fixação Redux React!
Let's go team Redux! 🔥
  
## Como vai funcionar? 🚀
Este exercício será realizado em 3 momentos. Um momento assíncrono, antes da aula, um momento síncrono durante a aula ao vivo e o último momento durante a mentoria. 

---  
## Habilidades
Neste exercício, você será capaz de:
  * Criar uma store Redux
  * Criar reducers no Redux
  * Criar actions no Redux
  * Criar dispatchers no Redux em aplicações React
  * Conectar Redux aos componentes React
​
---

## Antes de começar
Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.
Rode o comando `npm install`.

---  

## Como desenvolver

Instale todas as bibliotecas redux, react-redux e react-router-dom com o comando

````
npm install redux react-redux react-router-dom
````

Nesta aplicação você deverá utilizar o seguinte formato no estado global:

````
{
  user: {
    email: '',
    githubUser: '',
  },
  theme: 'light',
  repoList: [],
}
````

Além disso crie os componentes ```<DarkModeButton />```, `<Login />` e `<GithubList />`, eles serão desenvolvidos com o decorrer dos requisitos, então você pode deixa-los vazios, apenas renderizando uma div.

---  

# Requisitos

## 1️⃣  MOMENTO ASSÍNCRONO
### 1. Faça a configuração inicial do Redux criando a `store` e o `provider`;
  * Crie o arquivo da `store`;
  * Adicione o `provider` à aplicação, recebendo a store por parâmetro;
​
### 2. Crie a configuração do `reducer` com o INITIAL_STATE, definindo as informações que deverão ser salvas no estado global.
  Devem ser salvos:
  * O tema da aplicação, na key `theme` como `dark` ou `light`;
  * A informação de login do usuário, `email` e `githubUser`;
  * A lista de repositórios do github na key `repoList`.
````
{
  user: {
    email: '',
    githubUser: '',
  },
  theme: 'light',
  repoList: [],
}
````
​
### 3. Desenvolva as `actions`:
  * Será necessária uma action para salvar o e-mail e githubUser do usuário.
  * Outra action para alterar o tema de dark para light e vice e versa.
​
### 4. Adicione rotas à sua aplicação
  * Utilizando os componentes `<Switch />` e `<Route />`, crie as rotas `/login` e `/home`.
    * Essas rotas devem dar acesso aos componentes `<Login />` e `<GithubList />` respectivamente.

---  
## 2️⃣  MOMENTO SÍNCRONO

### 5. Crie um componente `<Login />`:
  * O componente deve possuir um formulário.
    * O formulário deve possuir dois campos de input, `email` e `githubUser`;
    * O formulário deve possuir um botão de `login` para a submissão do formulário;
  * Configure o mapDispatchToProps, para que o componente consiga alterar o estado da store com os dados de login da pessoa usuária.
  * Salve os dados de login no redux, no momento em que a pessoa clicar no botão.
### 6. Crie o componente `<GithubList />`:
  * O componente deve fazer uma chamada à api do github através da url: https://api.github.com/users/USERNAME/repos substituindo o USERNAME pelo `githubUser` da pessoa logada
    * Salve a lista de repositórios do github recebido, no estado do Redux na key `repoList`
      * Para isso configure o mapDispatchToProps; 
    * Renderize a lista de `repositórios do github` da pessoa usuária logada
      * Para isso configure o mapStateToProps, acessando o estado do redux `repoList`;
  > Obs: Realize a requisição no navegador para entender bem como é estruturado o retorno da API.
​  
### 7. Configure o componente `DarkModeButton`
  * Configure o mapStateToProps, para receber o estado `theme`, através do Redux.
  * Configure o mapDispatchToProps, para que o componente consiga alterar o estado da store com o tema da aplicação.
​ 
---    
## 3️⃣  DURANTE A MENTORIA

### 8. Configure o redirecionamento da aplicação para após o login, enviar a pessoa logada para a rota `/home`.
  * Após o login a pessoa deve ser redirecionada para a página `/home` da aplicação, onde o componente `<GithubList />` deve ser renderizado.
  * Se o usuário não estiver logado, e tentar acessar a rota `/home`, digitando a rota na url, a pessoa usuária deve receber uma mensagem de que o login não foi realizado, e deve ser redirecionada para a página de login.

### 11. Crie um botão de Logout
  * Ao clicar nesse botão, os dados salvos no redux deverão voltar ao valor inicial e a pessoa deve ser redirecionada para a página de login.

### 10. Configure o local storage
  * Faça com que os dados da pessoal logada sejam salvos no local storage, e recupere esses dados quando a página for recarregada, possibilitando o usuário permanecer logado.
  * Salve as preferências de tema da pessoa

### 11. CSS 💅🏽
  * Faça o Dark/Light theme funcionar.
  * Capriche no CSS!
 ---
