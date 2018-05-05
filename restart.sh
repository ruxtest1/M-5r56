#!/bin/bash

NAME=marukyo-api
export NODE_ENV=producttion
IP=$(hostname -I | cut -d" " -f 1)
export NODE_IP=$IP

git pull

pm2 start ecosystem.config.json --env=producttion --name

pm2 log $NAME