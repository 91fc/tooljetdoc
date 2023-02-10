# npm run build
# rm -rf  build/en
#docker build -f zh.Dockerfile -t wanddy/tooljetdocs:latest .
## Deploy ######################################################################
# Use a stable nginx image
FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
# Copy what we've installed/built from production
COPY build /usr/share/nginx/html/
