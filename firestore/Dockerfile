FROM alpine:latest
RUN apk update
RUN apk add apache2
EXPOSE 80
CMD  [ "/usr/sbin/httpd", "-D", "FOREGROUND"]