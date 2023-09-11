FROM node:12
WORKDIR /app

ENV NOD_ENV production

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "index.js"]