# ./Dockerfile
FROM docker/compose:1.29.2
WORKDIR /app
COPY docker-compose.yml .
COPY SpringBoot ./SpringBoot
COPY Angular ./Angular
CMD ["docker-compose", "up", "--build"]