DEBUG_MODE = true;

try {
  window.addEventListener('load', event => {
    debug('Bitbucket new Pull Request page loaded', event);
    waitForElm('[data-testid="delete-branch--hidden-checkbox"]:not([disabled])').then(elm => {
      debug('Delete branch checkbox is in the page', elm);
      // Trick to wait for the checkbox to be ready. It's a total mistery why I can't click it!
      setTimeout(() => {
        elm.click();
      }, 100);
    });
  });
} catch (error) {
  console.error(`Something went wrong, sorry... but here is a trace that could help to fix the problem`, error);
}

// FUNCTIONS

/**
 * Wait for element to be in the element selected by the querySelector passed to the observer
 * @param {*} selector
 * @returns
 * @see https://stackoverflow.com/a/61511955/5231262
 */
function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.querySelector('[data-testid="Content"]'), {
      childList: true,
      subtree: true,
    });
  });
}
