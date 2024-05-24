# Caching

AAXT is configured out of the box to use best-practice caching to reduce resource requirements for serving up your pages.

## Browser caching

A `browser_cache_middleware` inserts a unique `ETag` to each response to allow the browser to recognise and cache responses locally. By default we set the `max-cache` age to 5 minutes, you can set it to whatever makes sense for your application.

We include the `Vary` header so that the cache can distinguish between a request that returns the entire page vs fragments.

## Server caching

AAXT uses [BentoCache](https://bentocache.dev/) to cache responses once they have been generated. The cache is an Adonis provider located in `/app/providers/cache_provider.ts`. 

You can configure the cache using [BentoCache options](https://bentocache.dev/docs/options) in the `config/cache.ts` file. AAXT comes preconfigured with a simple default in-memory cache, but you can easily configure a more advanced caching mechanism.
