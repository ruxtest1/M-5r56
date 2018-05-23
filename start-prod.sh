#!/bin/bash

NAME=marukyo-api
export NODE_ENV=production
IP=$(hostname -I | cut -d" " -f 1)
export NODE_IP=$IP

git pull

#pm2 start server/server.js --name $NAME
#pm2 start ecosystem.config.json --env=production
npm start


#gulp set config
#node index.js

#pm2 start --name lusy2_app npm -- start

#pm2 start process.json --env development

#ping facebook.com
