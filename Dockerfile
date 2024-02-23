FROM node

WORKDIR /home/devan/visits

COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
