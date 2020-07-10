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


function processSingleUser(user){
  let firstName = user.name.first; //get the first name
  let lastName = user.name.last; // get the last name


  let li = document.createElement("li");
  li.innerText = firstName+""+lastName;

  // get ul element
  let ul = document.getElementById("people");
  //add the newly created li as a child of the ul
  ul.appendChild(li);

  li.addEventListener("cick", function(){
    //when the li is clicked
    //if the li has the class blue, remove the class blue and add the class red
    if (li.classList.contains("blue")){
      li.classList.add("red");
      li.classList.remove("blue");
    } else {
      //otherwise, add the class blue and remove the class red
      li.classList.add("blue");
      li.classList.remove("red");
    }
  })
}
