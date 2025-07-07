import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "DSN",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  integrations: [Sentry.browserTracingIntegration()],

  // Define how likely traces are sampled. Adjust this value in production,
  // or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
});
