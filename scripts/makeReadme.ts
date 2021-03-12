import * as fs from 'fs';

import config from '../config';

const readme = `# This is a portfolio
> This repo is a next.js app intend to serve as an online resume, take a [look](${config.servedAt}) at it.

The website is available at [${config.servedAt}](${config.servedAt}), it has been made of the following technologies:
* [Next.js](https://nextjs.org)
* [Graphql](https://graphql.org)
* [Nexus.js](https://nexusjs.org)
* [Anime.js](https://animejs.com)
* [Material UI](https://material-ui.com)

![Twitter Follow](https://img.shields.io/twitter/follow/${config.twitterHandle}?style=social)
![GitHub followers](https://img.shields.io/github/followers/${config.githubHandle}?style=social)
[LinkedIn](https://www.linkedin.com/in/${config.linkedinHandle})


![](portfolio.png)

## Usage example

If you are interested to use it as your online resume please fork it on github and change \`config.json\` according to your need.

## Development setup

After making a fork of this repo run the following commands and enjoy hacking 🤓

\`\`\`sh
vim config.ts # place your information in the file
yarn install
yarn makeReadme
yarn dev
\`\`\`

## Release History

* 0.0.1
    * add README.md
    * add config.json
    * add makeReadme.sh

## Meta

${config.fullName} – [@${config.twitterHandle}](https://twitter.com/${config.twitterHandle}) – ${config.emailAddress}

Distributed under the MIT license. See \`\`LICENSE\`\` for more information.

[https://github.com/${config.githubHandle}](https://github.com/${config.githubHandle})`

fs.writeFile('../README.md', readme, (err => err ? console.error(err) : console.log('README.md created')));
