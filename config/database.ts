import { registerAs } from '@nestjs/config';

export default registerAs(
  'db',
  () =>
    ({
      isGlobal: true,
      default: 'pg',
      connections: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            cluster: process.env.DB_CLUSTER,
      },
    }),
);
