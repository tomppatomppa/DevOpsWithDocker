FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build && \
    rm -rf /usr/src/app/node_modules && \
    rm -rf /usr/src/app/package*.json && \
    rm -rf /usr/src/app/src && \
    rm -rf /usr/src/app/public

RUN npm install -g serve

RUN useradd -m nonroot

USER nonroot


CMD ["serve", "-s", "-l", "5000", "build"]