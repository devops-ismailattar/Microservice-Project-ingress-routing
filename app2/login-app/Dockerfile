#-----------BUILD STAGE---------------------------
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

run npm install

COPY . .

#RUNTIME-STAGE--------------------------
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/src ./src
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3001

CMD ["node", "src/app.js"]
