# Build the custom Ghost theme assets
FROM node:22-alpine AS theme_builder
WORKDIR /build/theme

COPY theme/package*.json ./
RUN npm ci

COPY theme/ ./
RUN npm run build

# Run Ghost with the prebuilt custom theme
FROM ghost:6-alpine

USER root

# Keep your custom routes in production
COPY routes.yaml /var/lib/ghost/content/settings/routes.yaml

# Install the built theme into Ghost
COPY --from=theme_builder /build/theme /var/lib/ghost/content/themes/random-theme

RUN chown -R node:node /var/lib/ghost/content/themes/random-theme /var/lib/ghost/content/settings/routes.yaml

USER node

EXPOSE 2368
