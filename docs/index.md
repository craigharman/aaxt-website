# AAXT

![AAXT Logo](/aaxt-logo.svg){width=150px .light-only align=left}
![AAXT Logo](/aaxt-logo-dark.svg){width=150px .dark-only align=left}

AAXT is a meta-framework that combines AdonisJS, Alpine JS, HTMX and Tailwind into a quick start boilerplate for developing backend centric websites and applications. If you are reaching for a database then AAXT is probably a good fit, if you are after a static site generator, then there's better options.

It's major advantages include:

- AdonisJS configured with AlpineJS (for front end javascript), HTMX for data retrieval and Tailwind for styling
- Automatic fragment vs. full page response to lower network traffic
- Server (using [Bentocache](https://bentocache.dev)) and Browser (using ETag) caching enabled by default
- Transition animations (with either Alpine, HTMX or CSS transitions)
- Control everything from one node application (no separate frontend application required)
- No modifications to routes or client-side library installs - it just works!
