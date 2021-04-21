FROM node:14

WORKDIR /usr/src/app

COPY . .

ENV TZ=America/Sao_Paulo

RUN npm install --only=prod

RUN  ls -ls

EXPOSE 3000

CMD [ "npm", "start" ]
