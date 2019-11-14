#!/bin/bash

export DB_USER=app
export DB_HOST='localhost'
export DB_PASSWORD=app
export DB='node'

docker-compose -f ./etc/docker/docker-compose.yaml up --build -d
nodemon backend/index.js