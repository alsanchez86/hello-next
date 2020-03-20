FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json .
COPY package-lock.json .
RUN npm i

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD ["npm", "run", "start"]