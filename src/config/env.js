const dotenv = require("dotenv");

/**
 * NODE_ENVに応じて読み込む.envファイルを決定します。
 *
 * development → .env
 * test        → .env.test
 * production  → .env.production
 */
const envFiles = {
  development: ".env",
  test: ".env.test",
  production: ".env.production",
};

const nodeEnv = process.env.NODE_ENV || "development";

const envFile = envFiles[nodeEnv];

if (!envFile) {
  throw new Error(`Unsupported NODE_ENV: ${nodeEnv}`);
}

/**
 * 指定した.envファイルを読み込みます。
 */
const result = dotenv.config({
  path: envFile,
});

if (result.error) {
  throw new Error(`Failed to load ${envFile}: ${result.error.message}`);
}

console.log(`Environment : ${nodeEnv}`);
console.log(`Env file    : ${envFile}`);

/**
 * アプリケーションで利用する設定値を
 * ここに集約します。
 */
const env = {
  nodeEnv,

  port: Number(process.env.PORT),

  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

module.exports = env;
