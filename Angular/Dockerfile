# Stage 1: Build Angular app using Node 22.11.0
FROM node:22.11.0 AS builder

WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies
RUN npm install

# Build the Angular app in production mode
RUN npm run build --prod

# Stage 2: Serve using NGINX
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from previous stage
COPY --from=builder /app/dist/Flex /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
