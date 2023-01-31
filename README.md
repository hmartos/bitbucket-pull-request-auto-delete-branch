<p style="text-align:center" align="center">
  <img src="./src/images/logo48.png" alt="logo">

  <h1 align="center">Bitbucket Pull Request auto delete branch</h1>

  <h4 align="center">Automatically checks the checkbox to delete the current branch after the pull request is merged on Bitbucket Cloud</h4>

  <p align="center">
    <a href="https://chrome.google.com/webstore/detail/bitbucket-pull-request-au/iffllgmebelmfdfiiagjgbpjhplobfem?utm_source=github"><strong>Install for Google Chrome &raquo;</strong></a>
  </p>
</p>

<p align="center">
  <a href="https://chrome.google.com/webstore/detail/bckfpnenhimfckndcceonmkhheinmkob?utm_source=github_badge"><img alt="Chrome Web Store" src="https://img.shields.io/chrome-web-store/v/iffllgmebelmfdfiiagjgbpjhplobfem"></a>
  <a href="https://github.com/hmartos/bitbucket-pull-request-auto-delete-branch/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/hmartos/bitbucket-pull-request-auto-delete-branch"></a>
</p>

<p style="text-align:center" align="center">
  <img src="./chrome-web-store/screenshot_1.png" alt="logo">
</p>

## Requirements

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/)

## Getting Started

1. Clone the repository `git clone https://github.com/hmartos/bitbucket-pull-request-auto-delete-branch.git`.
2. Open Google Chrome Extension Management page navigating to [chrome://extensions](chrome://extensions).
   The Extension Management page can also be opened by clicking on the Chrome menu, hovering over `More Tools` then selecting `Extensions`.
3. Enable `Developer Mode` by clicking the toggle switch next to Developer mode in the top right corner.
4. Click the `Load Unpacked` button and select the folder `src` inside the cloned repository.

## Build

You can generate a zip file with the extension ready to be uploaded to [Google Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)

Just execute `npm run build` and a zip called `bitbucket-pull-request-auto-delete-branch.zip` will be generated.

## License

Copyright 2023 Héctor Martos. Code released under the [MIT License](./LICENSE).
