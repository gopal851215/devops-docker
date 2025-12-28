# Use Node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose port your app runs on
EXPOSE 3002

# Start the app
CMD ["npm", "start"]
