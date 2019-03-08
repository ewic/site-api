// const xhr = new XMLHttpRequest();

// xhr.open("GET", "/api/images");
// xhr.send();

// xhr.onload = function() {
//   let ele = document.getElementById('list');
//   let response = JSON.parse(xhr.response);

//   let list = document.createElement('ul');

//   let rows = [];

//   for (var i=0; i<response.length; i++) {
//     let item = response[i];

//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let linkText = document.createTextNode(item.caption);
//     let linkUrl = '/files/' + item.id + '.' + item.extension

//     a.appendChild(linkText);
//     a.href = linkUrl;

//     li.appendChild(a);

//     list.appendChild(li);
//   }

//   ele.appendChild(list);
// }

import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  render() {
    return(
      <div className="root">Application!</div>
    )
  }
};