FROM node:14-alpine

# create a app directory

WORKDIR /app

# install docker dependencies

COPY package*.json ./

# run npm install

RUN npm install

# bundle app source

COPY . .

EXPOSE 5000

CMD ["npm", "start"]