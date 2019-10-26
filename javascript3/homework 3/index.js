/* eslint-disable */

'use strict'




{

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

  function  getRepository(url) {
     return fetch(url)
      .then((resp) => resp.json())
      .then(data => {
        const root = document.getElementById('repo-select');

        for (let index = 0; index < data.length; index++) {

          const repoName = JSON.parse(JSON.stringify(data[index].name));

          createAndAppend('option', root, {
            text: repoName
          });

        }

        const repoInfoDisplay = () => {
          const summary = document.getElementById('repo-select');
          const inforight = document.getElementById('info-right');
          const infoleft = document.getElementById('info-left');
          const repoInfo = document.getElementById('repo-info');
          const contributionNumber = document.getElementById('contributionNumber');
          const contributorPicture = document.getElementById('contributorPicture');
          const contributorName = document.getElementById('contributorName');
          const container = document.getElementById('container');

          summary.addEventListener('change', () => {
            for (let index = 0; index < data.length; index++) {
              if (data[index].name === summary.value) {
                contributorPicture.innerHTML = '';
                contributorName.innerHTML = '';
                contributionNumber.innerHTML = '';
                infoleft.innerHTML = '';
                inforight.innerHTML = '';
                const link = document.createElement('a');
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
                link.setAttribute('target', '_blank')
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

                fetch(data[index].contributors_url)
                  .then((resp2) => resp2.json())
                  .then(data2 => {

                    for (let item = 0; item < data2.length; item++) {



                      const image = document.createElement('img');
                      image.setAttribute('src', data2[item].avatar_url)
                      contributorPicture.appendChild(image);

                      createAndAppend('p', contributorName, {
                        text: data2[item].login
                      });
                      createAndAppend('p', contributionNumber, {
                        text: data2[item].contributions,
                      });



                    }

                  });




              }


            }

          });
        };
        return repoInfoDisplay();
        


      });
  }

  const REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';

  getRepository(REPOS_URL);
}