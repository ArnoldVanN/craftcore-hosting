FROM node:lts as runner

ENV APP_ROOT=/app
ENV NODE_ENV=production
WORKDIR ${APP_ROOT}

ARG COMMIT_ID
ENV COMMIT_ID=${COMMIT_ID}

COPY . .

RUN pnpm install
EXPOSE 3000
CMD ["node", "."]