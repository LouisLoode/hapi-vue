# Use Node v7 as the base image.
FROM node:7
MAINTAINER Louis Debraine <louisdebraine@gmail.com>

RUN npm install nodemon -g

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /webapp

WORKDIR /webapp

# Install dependencies
RUN yarn install

# Expose our server port.
EXPOSE 8080 35729
