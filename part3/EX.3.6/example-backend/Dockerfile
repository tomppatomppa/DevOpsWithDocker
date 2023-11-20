FROM golang:1.16

WORKDIR /usr/src/app

COPY . .

RUN go build . && \
    useradd -m appuser && \
    rm -rf /usr/src/app/*.go && \
    rm -rf /usr/src/app/go.* && \
    rm -rf /usr/src/app/cache && \
    rm -rf /usr/src/app/common && \
    rm -rf /usr/src/app/controller && \
    rm -rf /usr/src/app/pgconnection && \
    rm -rf /usr/src/app/router


ENV PORT=8080

USER appuser

CMD [ "./server" ]