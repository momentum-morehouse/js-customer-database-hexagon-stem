import customers from './customers.js'

//you will need their name, address, phone numbers, thumnail, birthdate, and the date they became a customer

let person = [{
 // thumbNail:'https://randomuser.me/api/portraits/thumb/women/89.jpg',
  name: "pauline hughes",
 // email: "pauline.hughes@example.com",
 // address: "3447 Elgin St, Roseville, IN 93281",
  // birthdate: "12/08/1977" ,
  // startDay: "06/29/2004"
}]

//person.push({
 // thumbNail:'https://randomuser.me/api/portraits/thumb/women/89.jpg',
 // name: "Pauline Hughes",
 // email: "pauline.hughes@example.com",
//  address: "3447 Elgin St, Roseville, IN 93281",
//})

function listCustomers(personArray) {
  let customerList = document.querySelector("#customer-list");
  for (let customer of customers) {
    let newCustomer = document.createElement("li");
    let customerText = document.createTextNode(`"${person.name}" located ${person.address}`);
    let customerImage = document.createElement("img")
    customerImage.src = `${person.thumbNail}`;
    let customerEmail = document.createElement("email");
    newCustomer.append(customerText, customerEmail);
    customerList.append(newCustomer);
    newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
  };
};

listCustomers(person);
