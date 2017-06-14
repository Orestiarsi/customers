// 1. Fetch your users data
fetch('https://randomuser.me/api/?results=12')
.then (
  function (response) {
    if (response.status !== 200) {
      console.log("ooohhhhhh nonono" + response.status);
      return;
    }
    response.json().then(function (data) {
      console.log(data.results);
      let customers = data.results;
      // console.log(name);

      function renderCustomers(){
        return `

        ${customers.map(customer => `
          <div class="customer">
            <ul>

                  <img src="${customer.picture.large}">
                  <li id="names"> ${customer.name.first} ${customer.name.last}</li>
                  <li> ${customer.email}</li>
                  <li class="address"> ${customer.location.street}</li>

                  <li class="address"> ${customer.location.city}
                   ${customer.location.state}
                   ${customer.location.postcode}</li>
                  <li id="phone"> ${customer.phone}</li>
                  <li id="cell"> ${customer.cell}</li>

            </ul>
          </div>
          `).join('')}
        `
      }

      let test1 = `
      <div class="customers">
        ${renderCustomers()}
      </div>
      `

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
