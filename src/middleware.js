import * as Sentry from "@sentry/astro";

export function onRequest(context, next) {
  // intercept data from a request
  // optionally, modify the properties in `locals`
  context.locals.title = "New title";
  console.log("astro middleware");
  // return a Response or the result of calling `next()`
  Sentry.startSpan(
    {
      name: "mymiddleware",
      op: "middleware",
    },
    async () => {
      Sentry.profiler.startProfiler();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("middleware done");
      Sentry.profiler.stopProfiler();
    }
  );

  context.locals.sentry = Sentry;

  return next();
}
