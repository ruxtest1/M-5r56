#!/bin/bash

NAME=marukyo-api
export NODE_ENV=product
IP=$(hostname -I | cut -d" " -f 1)
export NODE_IP=$IP

git pull

pm2 restart $NAME

pm2 log $NAME