# gatsby-remark-embed-glitch

Embed a Glitch in your Markdown

## Install

1. Install plugin to your site:

```bash
npm install gatsby-remark-embed-glitch --save
```

2. Add following to your `gatsby-config.js`:

```js
    plugins: [
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-embed-glitch"
          }
          ]
        }
      },
```

## License

MIT
