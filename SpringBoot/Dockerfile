# Use Eclipse Temurin image for Java 21
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built jar file (replace with your actual jar name)
COPY . .

# Expose the port your app runs on (default is 8080)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
