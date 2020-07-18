'use strict'


fetch("https://randomuser.me/api/?results=20")
  .then(function(response){
    console.log("Fetch respose ", response);
    return response.json(); 
  }).then(function(json){
    console.log("payload is ", json);
    let users = json.results;
    processUsers(users);
  });

function processUsers(users){
  users.forEach(function(user){
    processingSingleUser(user);
  });
}

function processingSingleUser(user){
  let img = document.createElement("img");
  let firstName = user.name.first; //get the first name
  let lastName = user.name.last; // get the last name
  let li = document.createElement("li");
  li.innerText = firstName+" "+lastName;

  // get ul element
  let ul = document.getElementById("people");
  //add the newly created li as a child of the ul
  ul.appendChild(li);
  img.src = user.picture.thumbnail;
  let btn = document.createElement("button")
  li.appendChild(btn)
  li.appendChild(img)
  let phone = user.cell

  btn.innerText = "Show Contact"
  btn.addEventListener("click", function(){

  let liDiv = document.createElement("div");
  liDiv.innerText = phone;
  li.appendChild(liDiv); 

  if (liDiv == 'block') {
    phone.style.display = 'none';
    btn.innerText = 'Show Contact';
  }
  else {
    phone.style.display = 'block';
    btn.innerText = 'Hide Contact';
    }
  })
} 
