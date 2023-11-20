#!/bin/sh
git clone https://github.com/$1.git

docker build -t $2 ./express_app
docker push $2


