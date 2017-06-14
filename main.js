// 1. Fetch your users data
fetch('https://randomuser.me/api/?results=12')
.then (
  function (response) {
    if (response.status !== 200) {
      console.log("ooohhhhhh nonono" + response.status);
      return;
    }
    response.json().then(function (data) {
      // console.log(data.results);
      let name = data.results;
      // console.log(name);


      function renderName(){
        return `

        ${name.map(name =>
        `<ul>
        <li> ${name.name.first} ${name.name.last}</li>
         <li> ${name.email}</li>
         <li> ${name.location.street}</li>
         <li> ${name.location.city}</li>
         <li> ${name.location.state}</li>
         <li> ${name.location.postcode}</li>
         <li> ${name.phone}</li>`).join('')}
        </ul>
        `;
      }

      let test1 =
      `<div class="customers">
      <p>Name ${renderName()}</p>
      </div>`

      document.body.innerHTML = test1;
    })
  }
)







// 2. Loop over the data
// 3. Display it in the `.customers` element
// (function () {
//
//   'use strict';
//
//   // Your Code Goes Here
//
// })();
//
//
// console.log("hello JS");
