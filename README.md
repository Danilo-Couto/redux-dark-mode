# Implementando o Redux

Este projeto contem a descrição do exercício prático de Redux para a Turma 13! 

## Como vai funcionar?

Este exercício será realizado em dois momentos. O 1o momento será antes da aula ao vivo `individual` e o 2o momento será durante a aula ao vivo.


### Antes de começar

Você deverá clonar este repositório, e criar um PR com com a sua solução.

## Instruções do Exercício

1a parte - antes da aula;

## Requisitos

#### MOMENTO ASSÍNCRONO

1. Configure a Store;
2. Crie o Provider;
3. Crie os Reducers
A aplicação deve guardar no Redux o estado para o `dark` e `light` mode.
Também devem ser armazenados o e-mail e a senha de login do usuário.
4. Crie as Actions
Deve ser criada uma action que muda os estados de `dark` para `light` mode e vice e versa.
Deve ser criada uma action que salva os dados de login do usuário (email e senha).

#### MOMENTO SÍNCRONO
5. Configure o mapStateToProps, para acessar o estado do ‘dark’ e ‘light’ mode, através do Redux.
6. Configure o mapDispatchToProps para alterar o estado do ‘dark’ e ‘light’ mode através do botão de switch.
7. Crie um componente <Login />
O componente deve ter um formulário de login, com os campos de e-mail, senha e um botão para logar.
As informações do login devem ser salvas no Redux.
8. Bônus
Caprichem no CSS.