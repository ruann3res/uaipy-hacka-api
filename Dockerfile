FROM node:20.11.0-slim

RUN apt update && \
    apt install openssl procps -y && \
    npm install -g pnpm@10.3.0

USER node

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN pnpm install

CMD ["tail", "-f", "/dev/null"]