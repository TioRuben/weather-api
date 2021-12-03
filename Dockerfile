FROM node:17-alpine
LABEL org.label-schema.name="weather-api" \
        org.label-schema.vendor="TioRuben" \
        org.label-schema.description="Weather api for rubenhernandez.es" \
        org.label-schema.vcs-url="https://github.com/TioRuben/" \
        org.label-schema.license="MIT"
WORKDIR /app
COPY dist .
COPY package.json .
COPY yarn.lock .
RUN yarn install --production=true --frozen-lockfile
USER node
CMD ["node", "index.js"]
