FROM nginx:1.17.1-alpine
COPY /dist/sharp-notes-ui /usr/share/nginx/html
LABEL imagetag="sharp-notes-ui-v1"