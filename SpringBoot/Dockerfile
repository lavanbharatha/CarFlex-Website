# Use Eclipse Temurin image for Java 21
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built jar file
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
