declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      HOST: string;
      REDIS_HOST: string;
      REDIS_PORT: string;
      REDIS_SESSION_PREFIX: string;
      EXPRESS_SESSION_SECRET: string;
      EXPRESS_SESSION_TIMEOUT: string;
      OAUTH_GOOGLE_CLIENT_ID: string;
      OAUTH_GOOGLE_CLIENT_SECRET: string;
    }
  }
}
export {};
