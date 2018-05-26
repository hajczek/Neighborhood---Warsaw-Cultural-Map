import React, { Component } from 'react';

export const getInfo = (search) => {

fetch("https://pl.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + search + "&limit=1", 
        { headers: {'Accept': 'application/json',},
        }).then(response => response.json()).then(addInfo).catch(e => requestError(e));
          function addInfo (data){
            console.log(data);
            const link = data[3][0];
            const art = data[2][0];
            if (link) {
              document.querySelector('#short-article').innerHTML = art;
              document.querySelector('#see-link').innerHTML = 'See article in Wikipedia:<br/>'
              document.querySelector('#results').setAttribute("href", link);
              document.querySelector('#results').innerHTML = link + ' »';
              } else {
              document.querySelector('#info').innerHTML = 'Unfortunately, no info was returned for this data.'
              }
            }
            function requestError(e){
              console.log(e);
              document.addEventListener("load", function(){
                document.querySelector('#info').innerHTML = '<br>Oh no! There was an error making a request for this place.';
            });

          }
       }