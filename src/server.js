import fastify from 'fastify';
import fastifyEnv from 'fastify-env';

import blogRoutes from '@routes/blogs';

const server = fastify({ logger: true });

const options = {
  confKey: 'config', // optional, default: 'config'
  schema: {
    properties: {
      PORT: {
        default: 3000,
        type: 'string',
      },
    },
    required: ['PORT'],
    type: 'object',
  },
};

server.register(fastifyEnv, options).ready((err) => {
  if (err) console.error(err);
});

server.get('/', async () => ({ hello: 'world' }));

blogRoutes.forEach((route) => {
  server.route(route);
});

server.listen(server.config?.PORT, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`server listening on ${address}`);
});
