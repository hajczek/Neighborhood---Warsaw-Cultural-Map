import React, { Component } from 'react'
export const requestError = (e) => {
    console.log(e);
    let errorInfo = document.createElement('div');
    let address = document.getElementById('address');
    errorInfo.innerHTML = '<br>Oh no! There was an error making a request for this place.';
    document.body.insertBefore(errorInfo, address);
  }