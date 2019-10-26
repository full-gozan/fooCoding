'use strict';

/* global Util */

// eslint-disable-next-line no-unused-vars
class Repository {
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Render the repository info to the DOM.
   * @param {HTMLElement} container The container element in which to render the repository.
   */
  render(container) {
    // TODO: replace the next line with your code.
    const summary = document.getElementById('repo-select');
    const infoleft = document.getElementById('info-left');


    summary.addEventListener('change',()=> {
      if (this.repository.name === summary.value){
        container.innerHTML='';
        infoleft.innerHTML='';
        Util.createAndAppend('h4', infoleft, {
          text: 'name: '
  
        });
        Util.createAndAppend('h4', infoleft, {
          text: '   description: '
  
        });
        Util.createAndAppend('h4', infoleft, {
          text: 'forks: '
  
        });
        Util.createAndAppend('h4', infoleft, {
          text: '  updated_at: '});
  
        Util.createAndAppend('p', container, {text: JSON.stringify(this.repository.name)});
        Util.createAndAppend('p', container, {text: JSON.stringify(this.repository.description)});
        Util.createAndAppend('p', container, {text: JSON.stringify(this.repository.forks_url)});
        Util.createAndAppend('p', container, {text: JSON.stringify(this.repository.updated_at)});


        


      }
    })
  }

  /**
   * Returns an array of contributors as a promise
   */
  fetchContributors() {
    return Util.fetchJSON(this.repository.contributors_url);
  }

  /**
   * Returns the name of the repository
   */
  name() {
    return this.repository.name;
  }
  
}
