# Installation

To create a new AAXT project use [degit](https://www.npmjs.com/package/degit) to scaffold a new project based on the latest version of AAXT: 

```bash
npx degit craigharman/aaxt my-new-project
cd my-new-project
npm i
cp .env.example .env
npm run dev
```
::: tip
Be sure to copy the `.env` file or AlpineJS will not be able to start.
:::

This will provide you with an AdonisJS project preconfigured with AlpineJS, HtmlX and Tailwind and with a few other bonus niceties to connect these technologies together. **It is recommended that you have a basic understanding of HTMX and AlpineJS before you start but it is not required.**
