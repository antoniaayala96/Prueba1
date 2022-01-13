const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4c058fc8d9b25d9a6b7060ef9eca49bd&hash=d4fd5b55608f713182ffb63c400de475';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        
        .then((json) => {
            
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-6 infinite-scroll py-3 text-center" id="spinners-and-async-example" style="max-height: 500px">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.name}</h3>
              </div>
              `;
              
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();