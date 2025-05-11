# Force clean build
# Cache invalidation comment: v1
# Use a Node.js base image
FROM node:lts

# Set the working directory in the container initially
WORKDIR /app

# Copy package.json and package-lock.json separately
# to ensure both files are copied correctly for dependency installation and script execution
COPY package.json ./keystone-backend/
COPY package-lock.json ./keystone-backend/

# List files after copying package.json and package-lock.json
RUN ls -al ./keystone-backend/

# Print package.json content for debugging
RUN cat ./keystone-backend/package.json

# Install NestJS CLI globally (as a workaround for potential installation issues)
RUN npm install -g @nestjs/cli

# Copy the rest of the application code
COPY . ./keystone-backend/

# Set the working directory to the backend directory
WORKDIR /app/keystone-backend

# Clear the npm cache to ensure a clean install
RUN npm cache clean --force

# List files after copying all files
RUN ls -al

# Install dependencies
RUN npm install --production=false
# List files in node_modules/.bin after install for debugging
RUN ls -al ./node_modules/.bin/

# Build the NestJS application (if applicable)

# List files before running the build command
RUN ls -al

# Run the build command
RUN nest build

# Expose the port your application listens on (Cloud Run default is 8080)
EXPOSE 8080

# Command to run the application
CMD ["npm", "run", "start:prod"]