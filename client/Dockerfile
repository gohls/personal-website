# Step 1 - build env
FROM node:10.16.0 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g react-scripts@3.3.0
RUN npm run build


# Step 2 - prod env
FROM nginx:1.13.3-alpine
RUN rm -rf /usr/share/nginx/html/*
#######
COPY nginx-config/nginx.conf /etc/nginx/conf.default
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

# TUTORIAL  
# https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose

##########################
##### SSL TESTING 1/3 ####

# FROM node:10-alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# COPY package*.json ./

# USER node

# RUN npm install

# COPY --chown=node:node . .

# EXPOSE 8080

# CMD [ "node", "app.js" ]