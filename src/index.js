'use strict'
const visit = require(`unist-util-visit`)

module.exports = ({ markdownAST }) => {

  visit(markdownAST, `inlineCode`, node => {
    const { value } = node

    if (value.startsWith(`glitch:`)) {
      const name = value.substr(7)

      node.type = `html`
      node.value = `

      <!-- Copy and Paste Me -->
      <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
        <iframe
          src="https://glitch.com/embed/#!/embed/${name}?path=README.md&previewSize=0"
          title="${name} on Glitch"
          allow="geolocation; microphone; camera; midi; vr; encrypted-media"
          style="height: 100%; width: 100%; border: 0;">
        </iframe>
      </div>
      `
    }
  })

  return markdownAST
}
