# Getting started

AAXT uses Adonis's server side rendering to generate HTML pages but then caches them to give your website/application the speed of a static rendered site. The steps to create your website content can be simplified to:

1. Create pages (in `/resources/views/pages`) as you would in a normal Adonis JS app
2. Add HTMX requests to link to these pages

That's it! AAXT will build all the pages you create in their entirety but also return fragments to the client when an HTMX request is made. Requests are automatically cached client and server side to reduce server resource usage and network requests.

The default installation provides you with a basic page/template/component structure you can edit if you wish to dive in, otherwise continue on for some more detail on creating pages.
