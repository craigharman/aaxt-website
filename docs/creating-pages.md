# Creating pages

AAXT pages use standard Edge templates in Adonis JS and should be placed in the  `/resources/views/` folder. You create pages and routes just like you would in any other AdonisJS project.

```html
<!-- /resources/views/example.edge -->
<html>
  <head>
    <title>AXXT Example</title>
    <meta name="description" content="This is an AXXT enabled page">
  </head>
  <body>
    <nav><a href="/example">Example</a> | <a href="/example2">Example 2</a></nav>
    <section id="mainContent">
      <div>The content for the example page goes here.</div>
    </section>
  </body>
</html>
```

```typescript
// /start/routes.ts
import router from '@adonisjs/core/services/router'

router.on('/example').render('pages/example')
```

Here we have added a route to Adonis so when a user visits `/example` they will be presented with our example Edge page. Nothing above and beyond standard Adonis views at this stage. Your HTML can contain HTMX and AlpineJS and even Edge logic and components, as we'll see shortly.

You'll notice there is a link to `/example2` but we haven't created that yet so lets do that now by duplicating the original page and making a few minor changes:

```html
<!-- /resources/views/example2.edge -->  // [!code focus]
<html>
  <head>
    <title>AXXT Example 2</title> // [!code focus]
    <meta name="description" content="This is another AXXT enabled page"> // [!code focus]
  </head>
  <body>
    <nav><a href="/example">Example</a><a href="/example2">Example 2</a></nav>
    <section id="mainContent">
      <div>The content for the 2nd example page goes here.</div> // [!code focus]
    </section>
  </body>
</html>
```

```typescript
// /start/routes.ts
import router from '@adonisjs/core/services/router'

router.on('/example').render('pages/example')
router.on('/example2').render('pages/example2')  // [!code ++]
```

Now if we visit our site at `http://localhost:3333/example` and click on the link for `Example 2` the page new page loads. Currently we are loading the entire page on each request, but if you click back and forth a few times you'll see that the page is loading from browser cache rather than hitting the server each time - that's the first advantage of AAXT, but its not very impressive. Lets add some HTMX to the mix!

::: tip
For more details on the power of Edge [read the docs here](https://edgejs.dev/docs/introduction).
:::
