FROM public.ecr.aws/nginx/nginx:latest

LABEL maintainer="Mosqueweb"

COPY *.html /usr/share/nginx/html/

COPY style.css/ /usr/share/nginx/html/html/

COPY src/ /usr/share/nginx/html/src/

COPY img-src/ /usr/share/nginx/html/img-src/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
