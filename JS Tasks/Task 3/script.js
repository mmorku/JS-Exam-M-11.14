/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

function fetchUsers(event) {
  fetch("https://api.github.com/users")
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((result) => {
      // console.log(result);
      result.forEach((user) => {
        const markup = `<ol>${
          "Login: " + user.login + " " + "Avatar: " + user.avatar_url
        }</ol>`;
        document
          .getElementById("output")
          .insertAdjacentHTML("beforeend", markup);
        document.getElementById("message").style.display = "none";
        document.getElementById("output").style.color = "lightblue";
      });
    })
    .catch((error) => console.log("text", error));

  event.preventDefault();
}
document.getElementById("btn").addEventListener("click", fetchUsers);
