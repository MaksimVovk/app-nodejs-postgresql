#!/bin/bash

export DB_USER=root
export DB_HOST='localhost'
export DB_PASSWORD=root
export DB='node'

export DBHOST=postgres://app:app@172.19.0.2/node
docker-compose -f ./etc/docker/docker-compose.yaml up --build -d
nodemon backend/index.js