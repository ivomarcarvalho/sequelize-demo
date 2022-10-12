README.md

md=> Markdown - Linguagem de marcação                                                                                                                                                  

https://www.youtube.com/watch?v=g5ij7NIPR2s

npm init -y
npm i nodemon -D
npm i express
npm i sequelize mysql2
npm i dotenv

// migrations para o sequelize
npx sequelize-cli init

dica:
1-criar na raiz do projeto um arquivo .env (configuraçoes)
2-renomear o config.json para config.js
3-fazer as devidas alteracoes no config.js associando ao .env
4-criar na rais do projeto um arquivo sequelirc
5-exportar o config.js
6-npx sequelize-cli db:create
7-npx sequelize-cli migration:generate --name create-cliente
8-npx sequelize-cli db:migrate
desfaz:
9-npx sequelize-cli db:migrate:undo

winget install --id Git.Git -e --source winget

git init
git -v
git status
git add .
git commit -m "msg"

# renomear de master para main
git branch -M main

git push -u origin main
git remote add origin https://github.com/ivomarcarvalho/sequelize-demo
git push 
git clone https://github.com/ivomarcarvalho/sequelize-demo.git


