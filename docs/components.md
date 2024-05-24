# Components

Components are small Edge templates that are embedded into templates or pages to help with re-use and abstraction. These are simply Edge files stored in the `/resources/views/components` folder and can contain HTMX and AlpineJS.

In our example we created a `@navigation` component that allowed us to separate out the navigation logic from the main template. It looks like this:

```html
<nav preload hx-trigger="click" hx-target="#mainContent" hx-replace-url="true" hx-ext="no-load">
  <a href="/example" hx-get="/example">Example</a> |
  <a href="/example2" hx-get="/example2">Example 2</a>
</nav>
```

Then we can place this in our template as follows:

```html
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ title || 'Default title' }}</title>
    <meta name="description" content="{{ description || '' }}">

    @vite(['resources/js/app.js', 'resources/css/app.css'])
  </head>

  <body hx-ext="preload">
    @!navigation() // [!code focus]
    <section id="mainContent">
      {{{ await $slots.main() }}}
    </section>
  </body>

</html>
```

Note the use of the exclamation mark so we don't have to close the component with an `@end`.

::: tip
AAXT doesn't actually use the Edge structure of our code to render fragments so you can use components however you want without having to consider your HTMX fragments.
:::
