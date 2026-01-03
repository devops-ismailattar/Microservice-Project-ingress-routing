#Build-Stage---------------------

FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .


#--------------RUNTIME-STAGE-------------------------------

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3003

CMD ["node", "src/app.js"]


