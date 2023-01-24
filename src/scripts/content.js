DEBUG_MODE = true;

window.addEventListener('load', event => {
  debug('Bitbucket new Pull Request page loaded');
  const deleteBranchCheckbox = document.querySelector('[data-testid="delete-branch--hidden-checkbox"]');

  if (deleteBranchCheckbox) {
    debug('Found delete branch checkbox', deleteBranchCheckbox);
    deleteBranchCheckbox.click();
  } else {
    debug('Delete branch checkbox not found');
  }
});
