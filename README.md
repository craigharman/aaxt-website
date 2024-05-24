# AAXT

The complete web stack including AdonisJS AlpineJS htmlX and Tailwind.

## Features

- Alpine, HTMX and Tailwind pre-installed and configured
- AdonisJS middleware to automatically send HTML fragments for HTMX requests
- Same URL for whole page vs required fragments
- Server (using [Bentocache](https://bentocache.dev)) and Browser (using ETag) caching enabled by default
- HTMX extension `no-load` to not request current page
- Edge templating engine

## Usage

To create a new AAXT project run:

```bash
npx degit craigharman/aaxt my-new-project
cd my new project
npm i
npm run dev
```

This will provide you with an AdonisJS project preconfigured with AlpineJS, HtmlX and Tailwind and with a few other bonus niceties to connect these technologies together. **It is recommended that you have a basic understanding of HTMX and AlpineJS before you start but it is not required, and hopefully AAXT is easy enough to get up and running with.**

AAXT uses Adonis's server side rendering to generate HTML pages but then caches them to give your website/application the speed of a static rendered site. The steps to create yuor website content can be simplified to:

1. Create a new server-side page (in `/resources/views/pages`) or template (in `/resources/views/components/templates) or use the default one. 
2. Create a page in `/resources/views/pages/` using the AAXT default page template via `@templates.default({ title: 'Page title', description: 'Description for home goes here' })`
3. Add HTMX requests to the page (or page components such as navigation bar) that will then request HTML Element ids from the server

That's it! AAXT will build all the pages you create in their entirety but return fragments to the client when an HTMX request is made. Requests are automatically cached client and server side to reduce server resource usage and network requests. A basic demonstration is included to get you started and each step is explained in more detail below.

## Creating pages

AAXT pages use Edge templates in Adonis JS. You are free to use them in any way you want but a recommended quick start has been supplied to help you get started.

### Default template

The default template is a wrapper for the main page and is located in `/recources/views/components/templates/default.edge`. It is placed in the components folder so it can be referenced in other pages with `@templates.default({ title: 'Home', description: 'Description for home goes here' })`. Note we can pass a page title and description to the template using parameters.

The template is a very simple wrapper that contains a couple of Edge variables (for the title and description) and then some embedded components including the navigation and the main slot which is where your page content will go. Also note the `id="content-wrapper"` attribute in the wrapping div. This is going to be our HTMX `target` when we traverse pages.

### Pages

Create a page that uses the default template by wrapping some HTML in edge tags:

```html
@templates.default({ title: 'Home', description: 'Description for home goes here' })
<div>Your html goes here.</div>
@end
```
Your HTML can contain HTMX and AlpineJS and even Edge logic and components.
Pages will be injected into HTMX targets, in this case into the `content-wrapper` element.

> Don't forget to add your page route to `routes.ts` like any normal AdonisJS route. The advantage of AAXT is that you only need the one route regardless of if the page is expecting a page or a component!

### Triggers



## Caching

Both server side and browser side caching are configured via AdonisJS Middlewares. They are configured with "sane defaults" whereby the server should be serving cached versions of your HTML a majority of the time. However you are able to configure server side caching via the `./config/cache.ts` file which takes a [BentoCache](https://bentocache.dev) configuration.

Server caching of edge templates is done on a URL + HTMX requested targets basis. This has the advantage of quicker response times but at the expense of caching more duplicate data. If storage is a concern you can remove the `server_cache_middleware` from `kernel.ts` and instead just cache the whole page output by editing `htmx_middleware.ts` to retrieve the page from cache.
