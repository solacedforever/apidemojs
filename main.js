// //
//
//
let button = document.querySelector(".button");
let recipe = document.querySelector(".container");
let rec = document.querySelector("#input");

button.addEventListener("click", function searchRecipes () {

  fetch("https://crossorigin.me/http://www.recipepuppy.com/api/?i="+ rec.value)
    // Data is fetched and we get a promise.
    .then(
      // The promise returns a response from the server.
      function(response) {

        // We process the response accordingly.
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(response) {
          console.log("results is:", response);
          let template = "";
          response.results.forEach(function(data) {
            template += `
           <div recipe class="recipe">
              <img src="${data.thumbnail}"
            <h3> <a href="${data.href}"
             target"blank">${data.title}</a></h3></div>`;
             recipe.innerHTML = template;



          // let data = JSON.parse(this.responseText);

        });
      }
    )


    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    })
    }
  );

}
)
