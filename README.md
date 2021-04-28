# WeatherAPI
<hr></hr>
<h4>Um sistema nodejs que tem como funcionalidade fazer buscas na api proporcionada pelo <a href="https://openweathermap.org/">openweathermap</a></h4>
<hr></hr>

![](weatherApiGif.gif)

## Conteúdo
* [Informações](#Informações)
* [Tecnologias](#Tecnologias)
* [Como Rodar](#Rodando)
* [Próximos Passos](#PróximosPassos)
* [Próximos Passos Já Feitos](#PróximosPassosCompletados)
* [TASKS](#TASKS)


## Informações
:green_book:
Esse projeto foi feito sem frameworks pois eram opcionais no teste, com o banco de dados postgreSQL,
e seu backend configurado em nodejs. 

## Tecnologias
:computer: 
Projeto foi criado utilizando:
* Node Version: 14.15.4
* Axios version: 0.21.1
* SweetAlert version: 10.0.2
* Google Fonts
* Postgres version: 13
* Handlebars: 4.7.7
* Socket-io: 4.0.1


## Rodando
:ferris_wheel:<br>
0- Caso não esteja instalado, instale o <a href="https://nodejs.org/en/">Node</a> e o <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads">Postgres</a>. Pegue sua chave da API em <a href="https://openweathermap.org/">openweathermap</a> ao criar uma conta o site disponibiliza uma
chave api. 

1- Para rodar o projeto, baixe a pasta do git.

2- Rode npm update.

3- Use Restore para "restaurar" o arquivo backup.sql no banco de dados Postgre

4- Renomeie o arquivo empty.env para .env apenas, e troque as credenciais pelas suas 
credenciais(Chave API openweathermap e configurações do postgres) dentro do arquivo.

5- Rode o programa utilizando nodemon app.js ou npm start(node app.js) 

## PróximosPassos 
:bug:<br>
1- Usar o docker e o heroku para fazer um deploy.

2- Adicionar uma introdução ao app.

## PróximosPassosCompletados

1- Ajeitar o css do top-five. Pois este está descentralizado OK

## TASKS

1- Uma página com dois paineis(esq direita): OK

2- Painel a esquerda(Busca e informações): OK

3- Painel a direita: informaçoes referentes ao histórico
em tempo real. Top 5 e ultimas pesquisas: OK

4- Operações de busca com AXIOS: OK

5- Nodejs e postgresql: OK




 
