FROM node:23.11-alpine3.20 AS frontend-builder
WORKDIR /app
COPY ./package.json ./pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
COPY ./ ./
RUN pnpm build

FROM nginx:1.28-alpine
WORKDIR /usr/share/nginx/html
COPY --from=frontend-builder /app/dist .
COPY nginx/default.conf /etc/nginx/nginx.conf
COPY nginx/config.template.js .
ENTRYPOINT ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/config.template.js > /usr/share/nginx/html/config.js && nginx -g 'daemon off;'"]
