FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy app source
COPY . .

# Install dependencies
RUN npm install

# Start app default commnand
CMD npm start