FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
ENV NPM_CONFIG_FETCH_TIMEOUT=60000
ENV NPM_CONFIG_NETWORK_TIMEOUT=60000
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--port", "3000"]
