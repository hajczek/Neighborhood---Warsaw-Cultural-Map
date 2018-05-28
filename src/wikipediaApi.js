export const getInfo = (search) => {
  fetch("https://pl.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + search + "&limit=1", 
        { headers: {'Accept': 'application/json'},
        }).then(response => response.json()).then(addInfo).catch(e => requestError(e));
  }

  const addInfo = (data) => {
    console.log(data);
    const link = data[3][0];
    const art = data[2][0];
    if (link || art) {
      document.querySelector('#short-article').innerHTML = '<em>' + art + '</em><br/><br/>';
      document.querySelector('#results').setAttribute("href", link);
      document.querySelector('#results').innerHTML = 'See article in Wikipedia »';
    }
    else {
      document.querySelector('#info').innerHTML = 'Unfortunately, no info was returned for this data.';
      }
    }

    const requestError = (e) => {
      console.log(e);
      let infoWindow = document.getElementById('info-window');
      let errorInfo = document.createElement('span');
      errorInfo.innerHTML = 'Oh no! There was an error making a request for this place.';
      document.body.insertBefore(errorInfo, infoWindow);
    }