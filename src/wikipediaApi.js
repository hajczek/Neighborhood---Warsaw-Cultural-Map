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
              document.querySelector('#short-article').innerHTML = '<em>' + art + '</em>';
              document.querySelector('#results').setAttribute("href", link);
              document.querySelector('#results').innerHTML = 'See article in Wikipedia »';
              } else {
              document.querySelector('#info').innerHTML = 'Unfortunately, no info was returned for this data.';
              }
            }
            function requestError(e){
              console.log(e);
              let errorInfo = document.createElement('div');
              let address = document.getElementById('address');
              errorInfo.innerHTML = '<br>Oh no! There was an error making a request for this place.';
              document.body.insertBefore(errorInfo, address);
            };
          }