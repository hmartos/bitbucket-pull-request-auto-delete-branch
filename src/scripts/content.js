// TODO Set DEBUG_MODE to false before first release
const DEBUG_MODE = true;
const DELETE_BRANCH_CHECKBOX_SELECTOR = '[data-testid="delete-branch--hidden-checkbox"]:not([disabled])';
const CONTENT_DIV_SELECTOR = '[data-testid="Content"]';

try {
  window.addEventListener('load', event => {
    debug('Bitbucket new Pull Request page loaded', event);

    // Set MutationObserver in 'Content' div
    const contentDiv = document.querySelector(CONTENT_DIV_SELECTOR);
    debug('Setting mutation observer for Content div', contentDiv);
    const observer = new MutationObserver(() => {
      if (document.querySelector(DELETE_BRANCH_CHECKBOX_SELECTOR)) {
        checkDeleteBranchCheckbox();
      }
    });
    observer.observe(contentDiv, {
      childList: true,
      subtree: true,
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

    observer.observe(document.querySelector(CONTENT_DIV_SELECTOR), {
      childList: true,
      subtree: true,
    });
  });
}

const checkDeleteBranchCheckbox = () => {
  waitForElm(DELETE_BRANCH_CHECKBOX_SELECTOR).then(elm => {
    // Trick to wait for the checkbox to be ready. It's a total mistery why I can't click it directly!
    setTimeout(() => {
      if (!elm.checked) {
        debug('Checking delete branch checkbox', elm);
        elm.click();
      }
    }, 100);
  });
};
