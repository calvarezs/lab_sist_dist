# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:latest AS builder
# Set working directory 
WORKDIR /app

# Copy package
COPY package.json ./

# Add global elements
RUN yarn global add npm

# install node modules and build assets
RUN yarn install
RUN yarn upgrade

# Copy all files from current directory to working dir in image
COPY . .
