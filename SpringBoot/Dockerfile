# === Stage 1: Build the application ===
FROM eclipse-temurin:21-jdk-alpine AS build

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Ensure mvnw is executable
RUN chmod +x mvnw

# Build the application
RUN ./mvnw clean package -DskipTests

# === Stage 2: Run the application ===
FROM eclipse-temurin:21-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
