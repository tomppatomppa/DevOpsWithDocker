FROM docker

RUN apk update
RUN apk add git
RUN apk add bash

WORKDIR /usr/src/app

COPY  ./builder.sh .

RUN chmod +x /usr/src/app/builder.sh

ENTRYPOINT [ "/usr/src/app/builder.sh" ]

