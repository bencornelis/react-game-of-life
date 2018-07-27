FROM node:8.9.1

COPY package.json /app/
COPY src /app/src
COPY public /app/public

COPY scripts/deploy.sh /app/scripts/deploy.sh
RUN chmod u+x /app/scripts/deploy.sh

WORKDIR /app/

RUN npm install --silent
