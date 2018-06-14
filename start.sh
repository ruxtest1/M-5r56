#!/bin/bash

NAME=marukyo-api
export NODE_ENV=product
IP=$(hostname -I | cut -d" " -f 1)
export NODE_IP=$IP

pm2 delete $NAME

git pull

#pm2 start server/server.js --name $NAME
pm2 start ecosystem.config.json --env=product

ping facebook.com
