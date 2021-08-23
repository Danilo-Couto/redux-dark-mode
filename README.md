# Boas vindas ao repositório Redux Dark Mode React!
Este repositório contém a descrição do exercício prático de Redux para o dia 16.3!
Você deverá criar uma tela de login, e implementar o dark mode em um botão já existente na aplicação, utilizando o Redux !!!


## Como vai funcionar?
Este exercício será realizado em dois momentos. O 1o momento será antes da aula ao vivo `individual` e o 2o momento será durante a aula ao vivo.

## Habilidades
Neste exercício, verificamos se voce é capaz de:
  * Criar um store Redux em aplicações React
  * Criar reducers no Redux em aplicações React
  * Criar actions no Redux em aplicações React
  * Criar dispatchers no Redux em aplicações React
  * Conectar Redux aos componentes React
​
---

### Antes de começar
1. Clone o repositório
2. Instale as dependências e inicialize o projeto
3. Crie uma branch a partir da branch `master`
​
​
## Instruções do Exercício
1a parte - antes da aula;
  - Criar a estrutura do Redux e conectar ao dark mode;
​
2a parte - durante a aula;
  - Criar a tela de login e conectar ao dark mode;

## Requisitos

### MOMENTO ASSÍNCRONO
#### 1. Faça a configuração inicial do Redux criando a `store` e o `provider`;
  * Crie o arquivo da `store`;
  * Adicione o Provider à aplicação, recebendo a store por parâmetro;
​
#### 2. Crie a configuração do `reducer` com o INITIAL_STATE, definindo as informações que deverão ser salvas no estado global.
  Devem ser salvos:
  * O tema da aplicação, se escuro ou claro, `theme` como `dark` ou `light`;
  * A informação de login do usuário, `email` e `password`;
​
#### 3. Desenvolva as `actions`:
  * Será necessária uma action para salvar o e-mail e githubUser do usuário.
  * Outra action para alterar o tema de dark para light e vice e versa.
​
#### 4. Crie um componente <Login />:
  * O componente deve possuir um formulário.
  * O formulário deve possuir dois campos de input, email e githubUser;
  * O formulário deve possuir um botão de 'login' para a submissão do formulário ;
​
​
### MOMENTO SÍNCRONO
#### 5. Configure o acesso do componente `Login` a action que salva os dados de login
  * Configure o mapDispatchToProps para que o componente acesse a action e consiga alterar o estado da store com os dados de login da pessoa usuária.
​
#### 6. Configure o acesso do componente `DarkModeButton` ao estado da store e à action que altera os dados do tema da aplicação
  * Configure o mapStateToProps, para acessar o estado do redux, ‘dark’ e ‘light’ mode, através do Redux.
  * Configure o mapDispatchToProps para que o componente acesse a action e consiga alterar o estado da store com o tema da aplicação.
​
#### 7. Adicione rotas à aplicação de forma que a pessoa usuária consiga acessar `/login` e ao fazer login ser redirecionada para `/home`.
  * A página de login deve ser redirecionada para a `/home` da aplicação.
  * Se o usário não estiver logado e tentar acessar a rota `/home` redirecione a pessoa usuária para a tela de login, e mostre uma mensagem de que o login não foi realizado.

#### 8. Renderize a lista de repositórios do github da pessoa usuária logada.
 * Faça uma chamada à api do github através da url: https://api.github.com/users/USERNAME/repos substituindo o USERNAME pelo githubUser da pessoa usuária logada.
 * Liste os repositórios do github da pessoa usuária logada.
 
#### 9. Bônus
  * Caprichem no CSS.
 ---
