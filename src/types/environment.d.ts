declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HELLO_WORLD_PORT: number
      EXPRESS_HELLO_WORLD_PORT: number
      ROUTER_HANDLERS_PORT: number
      MIDDLEWARE_PORT: number
      STATIC_FILES_PORT: number
      MONGODB_PORT: number
    }
  }
}

export {}
