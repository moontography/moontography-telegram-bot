FROM node:16

LABEL AUTHOR="Lance Whatley"

# Create app directory
WORKDIR /usr/app

# Install dependencies
COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Start app default commnand
CMD node dist/server