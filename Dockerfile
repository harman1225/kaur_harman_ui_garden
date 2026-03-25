FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV DISABLE_ESLINT_PLUGIN=true

RUN npm run build

EXPOSE 8081

CMD ["npx", "serve", "-s", "build", "-l", "8081"]