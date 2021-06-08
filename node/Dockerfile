FROM node:7.7.2-alpine

WORKDIR "/app"

COPY ./package.json ./
RUN npm install -g nodemon \
 && npm install
COPY . .

EXPOSE 3000
CMD ["npm","start"]
