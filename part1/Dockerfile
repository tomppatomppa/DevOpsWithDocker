FROM ubuntu:20.04

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get -y install curl

COPY script.sh .
RUN echo 'while true; do echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website; done' > script.sh
RUN chmod +x script.sh

CMD ./script.sh