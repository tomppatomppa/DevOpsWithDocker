#!/bin/sh
docker login -u $DOCKER_USER -p $DOCKER_PWD

git clone https://github.com/$1.git

docker build -t $2 ./express_app
docker push $2


