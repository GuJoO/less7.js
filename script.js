let requist = new XMLHttpRequest();

requist.addEventListener("load", function () {
  let mosuliInfo = requist.responseText;
  let mosuliInfoJS = JSON.parse(mosuliInfo);
  let ulItem = document.createElement("ul");

  mosuliInfoJS.data.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element.name + " " + element.color;

    ulItem.appendChild(li);
  });
  document.getElementById("name").appendChild(ulItem);
});

requist.open("GET", "https://reqres.in/api/unknown");
requist.send();

// less2

let mosuli = new XMLHttpRequest();

mosuli.addEventListener("load", function () {
  let cameInfo = mosuli.responseText;
  let cameInfoJS = JSON.parse(cameInfo);
  let ulItem = document.createElement("ul");

cameInfoJS.data.forEach(element => {
    let li = document.createElement("li")
    li.textContent=element.first_name + ' ' + element.last_name + '- ' +element.email;

    ulItem.appendChild(li)
    
});
  document.getElementById("email").appendChild(ulItem)
});

mosuli.open("GET","https://reqres.in/api/users?page=2");
mosuli.send();
