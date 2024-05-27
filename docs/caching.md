# Caching

AAXT is configured out of the box to use best-practice caching to reduce resource requirements for serving up your pages.

## Browser caching

A `browser_cache_middleware` inserts a unique `ETag` to each response to allow the browser to recognise and cache responses locally. By default we set the `max-cache` age to 5 minutes, you can set it to whatever makes sense for your application.

We include the `Vary` header so that the cache can distinguish between a request that returns the entire page vs fragments.

## Server caching

AAXT uses [BentoCache](https://bentocache.dev/) to cache responses once they have been generated. The cache is an Adonis provider located in `/app/providers/cache_provider.ts`. 

Server caching of edge templates is done on a hash of the request URL + any HTMX requested targets. This has the advantage of quicker response times but at the expense of caching more duplicate data (the whole page, plus the fragments). If storage is a concern you can remove the `server_cache_middleware` from `kernel.ts` and instead just cache the whole page output by editing `htmx_middleware.ts` to retrieve the page from cache.

### BentoCache

You can further configure the cache using [BentoCache options](https://bentocache.dev/docs/options) in the `config/cache.ts` file. AAXT comes preconfigured with a simple default in-memory cache, but you can easily configure a more advanced caching mechanism. Refer to the [BentoCache docs](https://bentocache.dev/docs) for more details.

### Selective caching

Caching is on by default (in production). If you have certain HTMX requests you do not want cached you can used the [no-cache](https://github.com/craigharman/htmx-ext-no-cache) extension. Simply add the extension to any trigger element and AAXT will bypass both the client and server cache:

```
<button hx-get="/your-endpoint" hx-ext="noCache">Click me</button>
```
