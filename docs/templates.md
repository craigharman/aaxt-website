# Templates

To save on repeating a lot of code we can take advantage of Edge to create templates that will do most of the AAXT heavy lifting for us. Of course, how you write your templates is up to you but it is recommended to put templates in the `/resources/views/components/templates` folder. This allows us to take advantage of the Edge `@component` shortcut in our pages.

Here is an example template that creates the default page for our website:

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
    @!navigation()
    <section id="mainContent">
      {{{ await $slots.main() }}}
    </section>
  </body>

</html>
```

There are a couple of important things to note in this template. Firstly, we are using variables for the page title and description, this allows us to pass these into the template and change them on each page. Secondly, we include a `@navigation` [component](/components) - this keeps our base template nice and clean and also provides an example of using components within a template.

Finally, take note of the `<section>` element. Note how is has an `id` of `mainContent`. This is the id we are going to target when we swap content in and out. We put that here so we don't have to add it in every page.

Now our page can make use of this template and only include the content that changes on that page:

```html
<!-- /resources/views/example.edge -->
@templates.default({ title: 'Example 1', description: 'Description for example 1 page goes here' })
  <div>The content for the example page goes here.</div>
@end
```

```html
<!-- /resources/views/example2.edge -->
@templates.default({ title: 'Example 2', description: 'This is another AXXT enabled page' })
  <div>The content for the 2nd example page goes here.</div>
@end
```

See how much cleaner this pages our pages?

::: tip
AAXT doesn't actually use the Edge structure of our code to render fragments so you can layout templates and components however you want.
:::
