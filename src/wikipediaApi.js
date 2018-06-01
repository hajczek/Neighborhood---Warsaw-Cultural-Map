/**
  * @description Get data from Wikipedia Api
  */
export const getInfo = (search) => {
  fetch("https://pl.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + search + "&limit=1", 
        { headers: 
          {'Accept': 'application/json'},
        }).then(response => response.json())
          .then(addInfo)
          .catch(e => requestError(e));
  }

  /**
  * @description Set data from Wikipedia Api in InfoWindow
  */
  const addInfo = (data) => {
    const link = data[3][0];
    const art = data[2][0];
    link ?
      (
        document.querySelector('#results').setAttribute("href", link),
        document.querySelector('#results').setAttribute("alt", link),
        document.querySelector('#results').innerHTML = 'See article in Wikipedia »'
      )
    :
      (
        document.querySelector('#results').removeAttribute("href"),
        document.querySelector('#results').removeAttribute("alt"),
        document.querySelector('#results').innerHTML = ''
      )    

     art ? document.querySelector('#short-article').innerHTML = '<em>' + art + '</em><br/><br/>' : document.querySelector('#short-article').innerHTML = ''
  }
    /**
    * @description Display information when error occure
    */
    const requestError = (e) => {
      let infoBox = document.getElementById('info-box');
      infoBox.setAttribute('class', 'show');
      setTimeout(function(){ infoBox.setAttribute('class', 'hide') }, 3000);
    }
    