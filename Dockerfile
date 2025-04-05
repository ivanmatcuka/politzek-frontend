# Use the official Node.js image as the base image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm i

# Copy the rest of the project files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]