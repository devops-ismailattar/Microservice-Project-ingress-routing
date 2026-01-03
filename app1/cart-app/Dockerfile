#----------------BUILD-STAGE-------------------------

FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 


#---------------RUNTIME STAGE--------------------

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3002
CMD ["npm", "start"]

