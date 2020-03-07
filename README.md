# gatsby-remark-embed-glitch

Embed a Glitch in your Markdown

## Install

1. Install plugin to your site:

```bash
npm install gatsby-remark-embed-glitch --save
```

2. Add following to your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-glitch`,
          },
        ],
      },
    },
  ],
};
```

## Usage

Set your Glitch Project Name. ex) `react-babel-starter`

```md
# Look at this Glitch
`glitch:react-babel-starter`
```

## License

MIT

### Thanks

This project was very inspired from `gatsby-remark-embed-youtube` and modified for Glitch.

[gatsby-remark-embed-youtube](https://github.com/ntwcklng/gatsby-remark-embed-youtube)
