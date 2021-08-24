# Exercício de fixação Redux React!
Let's go team Redux! 🔥
  
## Como vai funcionar? 🚀
Este exercício será realizado em 3 momentos. Um momento assíncrono, antes da aula, um momento síncrono durante a aula ao vivo e o último momento durante a mentoria. 

---  
## Habilidades
Neste exercício, verificamos se voce é capaz de:
  * Criar um store Redux em aplicações React
  * Criar reducers no Redux em aplicações React
  * Criar actions no Redux em aplicações React
  * Criar dispatchers no Redux em aplicações React
  * Conectar Redux aos componentes React
​
---

## Antes de começar
Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.
Rode o npm install.

---  

## Como desenvolver
Nesta aplicação você deverá utilizar o seguinte formato no estado global:
````
{
  user: {
    email: '',
    githubUser: '',
  },
  theme: '',
  repoList: [],
}
````

Além disso sua aplicação deve conter os componentes ```<DarkModeButton />```, `<Login />` e `<GithubList />`.

---  

# Requisitos

## 1️⃣  MOMENTO ASSÍNCRONO
#### 1. Faça a configuração inicial do Redux criando a `store` e o `provider`;
  * Crie o arquivo da `store`;
  * Adicione o `provider` à aplicação, recebendo a store por parâmetro;
​
#### 2. Crie a configuração do `reducer` com o INITIAL_STATE, definindo as informações que deverão ser salvas no estado global.
  Devem ser salvos:
  * O tema da aplicação, na key `theme` como `dark` ou `light`;
  * A informação de login do usuário, `email` e `githubUser`;
​
#### 3. Desenvolva as `actions`:
  * Será necessária uma action para salvar o e-mail e githubUser do usuário.
  * Outra action para alterar o tema de dark para light e vice e versa.
​
#### 4. Adicione rotas à sua aplicação
  * Instale a biblioteca React Router
````
npm install react-router-dom
````
  * Adicione os componentes `<Switch />` e `<Route />` e crie as rotas `/login` e `/home`.
  * Essas rotas devem dar acesso aos componentes `<Login />` e `<GithubList />` respectivamente.

---  
## 2️⃣  MOMENTO SÍNCRONO

#### 5. Crie um componente `<Login />`:
  * O componente deve possuir um formulário.
  * O formulário deve possuir dois campos de input, `email` e `githubUser`;
  * O formulário deve possuir um botão de `login` para a submissão do formulário ;
​  
#### 6. Crie o componente `<GithubList />`:
  * O componente deve fazer uma chamada à api do github através da url: https://api.github.com/users/USERNAME/repos substituindo o USERNAME pelo `githubUser` da pessoa logada;
  * Salve a lista de reposistórios do github recebida no estado do Redux na key `repoList`; 
  * Renderize a lista de `repositórios do github` da pessoa usuária logada, pegando essa informação do redux;
  
#### 7. Configure o acesso do componente `Login` a action que salva os dados de login
  * Configure o mapDispatchToProps para que o componente acesse a action e consiga alterar o estado da store com os dados de login da pessoa usuária.
​  
#### 8. Configure o acesso do componente `DarkModeButton` ao estado da store e à action que altera os dados do tema da aplicação
  * Configure o mapStateToProps, para acessar o estado do redux, `dark` e `light` mode, através do Redux.
  * Configure o mapDispatchToProps para que o componente acesse a action e consiga alterar o estado da store com o tema da aplicação.
​  
#### 9. Configure o acesso do componente `GithubLIst` ao estado da store e à action que altera os dados do tema da aplicação
  * Configure o mapDispatchToProps para que o componente acesse a action e consiga enviar a lista recebida da api para o estado da store.
  * Configure o mapStateToProps, para acessar o estado do redux `repoList`.
​  

---    
## 3️⃣  DURANTE A MENTORIA

#### 10. Configure o redirecionamento da aplicação para após o login, enviar a pessoa logada para a rota `/home`.
  * A pessoa usuária deve acessar a rota `/login`, os dados do login devem ser salvos no redux.
  * Após o login a pessoa deve ser redirecionada para a página `/home` da aplicação, onde o componente `<GithubList />` deve ser renderizado.
  * Se o usário não estiver logado e tentar acessar a rota `/home` digitando a rota na url, a pessoa usuária deve receber uma mensagem de que o login não foi realizado, e deve ser redirecionada para a página de login.

#### 11. CSS 💅🏽
  * Caprichem no CSS.
 ---
