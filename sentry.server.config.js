import * as Sentry from "@sentry/astro";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "DSN",

  // Adds request headers and IP for users, for more info visit: for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  debug: true,
  integrations: [nodeProfilingIntegration()],

  // Define how likely traces are sampled. Adjust this value in production,
  // or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  profileLifecycle: "manual",
});
