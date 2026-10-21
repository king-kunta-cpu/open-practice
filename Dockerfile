FROM node:22-alpine
ENV NODE_ENV=production PORT=3001
WORKDIR /app
COPY --chown=node:node package.json ./
COPY --chown=node:node adapters/node ./adapters/node
COPY --chown=node:node packages ./packages
COPY --chown=node:node apps/web/public ./apps/web/public
USER node
EXPOSE 3001
CMD ["node","adapters/node/server.mjs"]
