# Använd den officiella OpenJDK-bilden som grund
FROM openjdk:11

# Ange arbetskatalogen inuti containern
WORKDIR /usr/src/app

# Kopiera inbyggda JAR-filen från lokal mapp till arbetskatalogen
# Kopiera inbyggda JAR-filen från lokal mapp till arbetskatalogen
COPY ./backend/user_service/target/user_service-0.0.1-SNAPSHOT.jar .

# Exponera port 8080 för att nå applikationen utanför containern
EXPOSE 8080

# Starta Spring Boot-applikationen
CMD ["java", "-jar", "user_service.jar"]
