# Stage 1: Build the Vite React app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files except for the ones in .dockerignore
COPY . .

# Build the Vite React app
RUN npm run build-prod

# Stage 2: Create a production-ready image
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx port (80)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
