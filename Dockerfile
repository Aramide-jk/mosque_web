FROM public.ecr.aws/nginx/nginx:latest

LABEL maintainer="Mosqueweb"

# Copy all HTML pages
COPY *.html /usr/share/nginx/html/

# Copy CSS folder
COPY css/ /usr/share/nginx/html/css/

# Copy JS folder
COPY js/ /usr/share/nginx/html/js/

# Copy Images folder
COPY images/ /usr/share/nginx/html/images/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
