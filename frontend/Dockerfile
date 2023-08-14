 # Använd den officiella Nginx-bilden som grund
FROM nginx:latest

# Kopiera innehållet från den lokala mappen till standardplatsen för Nginx-webbserver
COPY ./ /usr/share/nginx/html

# Exponera port 80 för att nå webbgränssnittet utanför containern
EXPOSE 3001

# Starta Nginx-webbservern
CMD ["nginx", "-g", "daemon off;"]