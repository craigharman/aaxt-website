# Triggers

HTMX triggers make a client request back to the server for more content. To use the power of AAXT we add some HTMLX attributes:

```html
<a href="/example" preload hx-get="/example" hx-trigger="click" hx-target="#mainContent"
          hx-replace-url="true" hx-ext="no-load">Example</a>
```

Here we have a standard `a` element with an `href` - we keep this to allow the user to be able to navigate even if Javascript is turned off. The remaining attributes are our HTMX ones and they help AAXT identify how to handle the request. A breakdown of these attributes and their specific relation to AAXT is included below:

| Attribute        | Required? | HTMX Usage                                     | AAXT Description                                                             |
| ---------------- | --------- | ---------------------------------------------- | ---------------------------------------------------------------------------- |
| preload          | N         | Preload the URL                                | Makes switching between pages much quicker by prefetching in the background. |
| hx-swap          | N         | Control how the response is swapped in.        | By default AAXT uses outerHTML                                               |
| hx-get           | Y         | Make a GET request to '/example'               | Request the elements that make up the '/example' route in `routes.ts`        |
| hx-target        | Y         | The element to place resulting HTML into.      | -                                                                            |
| hx-trigger       | Y         | The request is triggered by a click event.     | -                                                                            |
| hx-replace-url   | N         | Replace the browser's URL with the request URL | Required if URL needs to change.                                             |
| hx-ext="no-load" | N         | Load an HTMX extension                         | "no-load" stops HTMX requesting a page if we are already on that URL.        |

> Note that HTMX allows us to hoist any repeated attributes to the parent element so we don't need to repeat them on every link. As such our `<nav>` element from our previous example does not need to repeat every HTMX attribute.

```html
<!-- /resources/views/example.edge -->
<html>
  <head>
    <title>AXXT Example</title>
    <meta name="description" content="This is an AXXT enabled page">
  </head>
  <body>
    <nav preload hx-trigger="click" hx-target="#mainContent" hx-replace-url="true" hx-ext="no-load"> // [!code focus]
      <a href="/example" hx-get="/example">Example</a> | // [!code focus]
      <a href="/example2" hx-get="/example2">Example 2</a> // [!code focus]
    </nav> // [!code focus]
    <section id="mainContent">
      <div>The content for the example page goes here.</div>
    </section>
  </body>
</html>
```

With this change in place can revisit our website and go to the first example page `/example`. Open up the DevTools and visit the network tab and interrogate the request. Because this request wasn't made by HTMX (it came from your browser requesting the page) the entire page is returned by the server. Now navigate between pages and interrogate one of the requests and look at the content received from the server. You should see that Adonis is only returning the `mainContent` div instead of the whole page. HTMX is then inserting this data into the correct element.

## Multiple targets

AAXT supports requesting multiple fragments at one time, you just need to tell HTMX where to put them. To do this, use [out of band swaps](https://htmx.org/attributes/hx-swap-oob/) and send the elements to be swapped is additional vals:

```html
<a href="/example" preload hx-get="/example" hx-trigger="click" hx-select-oob="#sidebar,#mainContent"
          hx-vals='{"elements": "#sidebar,#mainContent"}' hx-replace-url="true" hx-ext="no-load">Example</a>
```

| Attribute     | Required? | HTMX Usage                              | AAXT Description                                                                                                         |
| ------------- | --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| hx-select-oob | Y         | Out of band swap of elements            | AAXT will return both these elements so we need HTMX to expect them. If only targeting one element, this can be omitted. |
| hx-vals       | Y         | Send some additional data to the server | Tell the server what elements we want generated and returned.  If only targeting one element, this can be omitted.       |

The result will be clicking on this link will replace the HTML in both the `sidebar` and `mainContent` elements.

## Using hx-boost

You may see all the attributes above and think, its much easier to just use [hx-boost](https://htmx.org/attributes/hx-boost/). While AAXT certainly supports this the disadvantage is you will be increasing the amount of traffic sent between the server and browser, as hx-boost requires the entire page to be sent on each request. If this is not a consideration for your setup, then you can use `hx-boost` out of the box as described in the [HTMX documentation](https://htmx.org/attributes/hx-boost/).

## Requesting HTML Fragments (or components)

If you want to load individual HTML components or fragments simply add a route to `routes.ts` that renders the component explicitly via `router.on('/routeName').render('components/componentName')` then use HTMX in the page view to request it:

```html
<button hx-get="/routeName" hx-trigger="click" hx-target="#target">
      Click to load
</button>
<div id="target">This text will be replaced with whatever returns from the /routeName endpoint.</div>
```
