# protobuf build
FROM --platform=$BUILDPLATFORM node:18.11-buster-slim@sha256:c3a4122a9b60c52a633b92788dec4159909158c828b56e11a3dc0284814a81f2 as proto-builder
WORKDIR /usr/src
COPY messages/yarn.lock messages/package.json ./
RUN yarn install
COPY messages .
RUN yarn run tag-version && yarn proto && yarn ts-proto

# typescript build
FROM --platform=$BUILDPLATFORM node:18.11-buster-slim@sha256:c3a4122a9b60c52a633b92788dec4159909158c828b56e11a3dc0284814a81f2 as builder
WORKDIR /usr/src
COPY libs/tailwind/yarn.lock libs/tailwind/package.json ./../libs/tailwind/
RUN cd ../libs/tailwind && yarn install --network-timeout 1000000
COPY libs/map-editor/yarn.lock libs/map-editor/package.json ./../libs/map-editor/
RUN cd ../libs/map-editor && yarn install --network-timeout 1000000
COPY libs/math-utils/yarn.lock libs/math-utils/package.json ./../libs/math-utils/
RUN cd ../libs/math-utils && yarn install --network-timeout 1000000
COPY libs ./../libs
COPY play/yarn.lock play/package.json ./
RUN yarn install
COPY play/yarn.lock play/package.json ./
RUN yarn install --network-timeout 1000000
COPY play .
COPY --from=proto-builder /usr/src/generated src/messages/generated
COPY --from=proto-builder /usr/src/ts-proto-generated src/messages/ts-proto-generated
RUN sed -i 's/import { Observable } from "rxjs";/import type { Observable } from "rxjs";/g' src/messages/ts-proto-generated/protos/messages.ts
COPY --from=proto-builder /usr/src/JsonMessages src/messages/JsonMessages
ENV NODE_ENV=production
# upgrade RAM available to 6G
RUN yarn run typesafe-i18n && yarn run build-iframe-api && NODE_OPTIONS="--max-old-space-size=6144" yarn build

# final production image
FROM node:18.11-buster-slim@sha256:c3a4122a9b60c52a633b92788dec4159909158c828b56e11a3dc0284814a81f2
WORKDIR /usr/src
COPY play/yarn.lock play/package.json ./
ENV NODE_ENV=production
RUN yarn install --production
COPY --from=builder --chown=node:node /usr/src/dist /usr/src/dist
COPY --chown=node:node play/src/pusher/data /usr/src/dist/pusher/data

USER node
CMD ["yarn", "run", "start"]
