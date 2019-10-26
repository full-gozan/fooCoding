'use strict';

/* global Util */

// eslint-disable-next-line no-unused-vars
class Contributor {
  constructor(contributor) {
    this.contributor = contributor;
  }

  /**
   * Render the contributor info to the DOM.
   * @param {HTMLElement} container The container element in which to render the contributor.
   */
  render(container, currentRepo) {

    const summary = document.getElementById('repo-select');

    summary.addEventListener('change',()=> {
      if (currentRepo.name === summary.value){
        container.innerHTML='';
        

    Util.createAndAppend('p', container, {text:this.contributor.login});


      }}) 


    
  }
}
