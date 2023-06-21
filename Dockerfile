FROM node:18-alpine
WORKDIR /app

COPY package.json /app/

CMD ["node","app.js"]