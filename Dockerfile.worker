FROM node:16

LABEL AUTHOR="Cal Supik"

# Create app directory
WORKDIR /usr/app

# Copy app source
COPY . .

# Install dependencies
RUN npm install

# Start app default commnand
CMD npm start