/* eslint-disable */

'use strict';

{
  function fetchJSON(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status < 400) {
        cb(null, xhr.response);
      } else {
        cb(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
      }
    };
    xhr.onerror = () => cb(new Error('Network request failed'));
    xhr.send();
  }

  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);

    parent.appendChild(elem);
    Object.keys(options).forEach(key => {

      const value = options[key];

      if (key === 'text') {

        elem.textContent = value;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }

  function repoCollect(url) {
    fetchJSON(url, (err, data) => {
      const root = document.getElementById('repo-select');

      for (let index = 0; index < data.length; index++) {
        if (err) {
          createAndAppend('div', root, {
            text: err.message,
            class: 'alert-error'
          });
        } else {
          const repoName = JSON.parse(JSON.stringify(data[index].name));

          createAndAppend('option', root, {
            text: repoName
          });
        }
      }

      const repoHighlightShow = () => {
        const summary = document.getElementById('repo-select');
        const inforight = document.getElementById('info-right');
        const infoleft = document.getElementById('info-left');
        const repoInfo = document.getElementById('repo-info');
        const rightside = document.getElementById('right');
        const leftside = document.getElementById('left');
        const center = document.getElementById('center');
        const container = document.getElementById('container');
        //const link = document.getElementById('link');







        summary.addEventListener('change', () => {



          for (let index = 0; index < data.length; index++) {
            if (data[index].name === summary.value) {
              leftside.innerHTML = '';
              center.innerHTML = '';
              rightside.innerHTML = '';
              infoleft.innerHTML='';
             inforight.innerHTML='';
             const link =document.createElement('a');
             inforight.appendChild(link);

              createAndAppend('h3', infoleft, {
                text: 'name: '

              });
              createAndAppend('h3', infoleft, {
                text: '   description: '

              });
              createAndAppend('h3', infoleft, {
                text: 'forks: '

              });
              createAndAppend('h3', infoleft, {
                text: '  updated_at: '

              });
            
              createAndAppend('a', inforight, {
                text: link

              });
              link.setAttribute('href', data[index].html_url);
              link.setAttribute('target','_blank')
              link.innerHTML = summary.value;

              createAndAppend('p', inforight, {
                text: data[index].description
              });
              createAndAppend('p', inforight, {
                text: data[index].forks
              });
              createAndAppend('p', inforight, {
                text: data[index].updated_at
              });

              fetchJSON(data[index].contributors_url, (err2, data2) => {

                for (let item = 0; item < data2.length; item++) {

                  if (err2) {
                    console.log('hello');
                  } else {


                    const image = document.createElement('img');
                    image.setAttribute('src', data2[item].avatar_url)
                    leftside.appendChild(image);

                    createAndAppend('p', center, {
                      text: data2[item].login
                    });
                    createAndAppend('p', rightside, {
                      text: data2[item].contributions,
                    });


                  }
                }

              });




            }


          }

        });
      };
      return repoHighlightShow();


    });
  }

  const REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';

  repoCollect(REPOS_URL);
}