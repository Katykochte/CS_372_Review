# Use official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (caching optimization)
COPY package*.json ./
RUN npm install

# Copy all application files
COPY . .

# Create directory structure for uploads and assets
RUN mkdir -p public/uploads && \
    mkdir -p public/assets

# Expose the port your app runs on
EXPOSE 6543

# Command to run the application
CMD ["node", "streamNetflixServer2.js"]