import { createRequestHandler } from "react-router";

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: Record<string, unknown>;
      ctx: unknown;
    };
  }
}

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(request: Request, env: Record<string, unknown>, ctx: unknown) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
};
