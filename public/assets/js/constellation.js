// constellationSearch();

// var divEl = document.getElementById('starchartSearch');

// function constellationSearch(userSearch)  {
//     $('#searchBtn').on('click', function async (event) {
//         var searchInput = $('#user-search').val().trim();

//         if (loggedIn) {
//             const response = await fetch('/api/constellation', {
//                 method: 'GET',
//                 body: JSON.stringify(constellationData),
//                 headers: {'Content-type': 'application/json'},
//             })
//             .then(function (data)
//             {
//                 console.log(data);
//                 var constellationResponse = data;
//                 $('#starchartSearch').empty();
//                 console.log(constellationResponse);

//             })
//         } else {
//             alert('Please Login');
//         };
//     });
// };

//const constellationId = 


// BETHS CODE TO REVIEW AND BLEND WITH ABOVE WHEN NOT SO TIRED
// Fetch constellation details based on ID
async function fetchConstellationDetails(constellationId) {
  const response = await fetch(`/api/constellation/${constellationId}`);
  console.log(constellationId);
  const data = await response.json();
  console.log(data);
  //return data;
}

function updateConstellationDetails(constellation) {
  const constellationName = document.querySelector(".constellation-name");
  constellationName.textContent = data.constellation_name;
    console.log(constellationName)
  const starsList = document.querySelector(".stars-list");
  starsList.innerHTML = "";
  data.star.star_name.forEach((star) => {
    const starItem = document.createElement("li");
    starItem.textContent = star;
    starsList.appendChild(starItem);
  });

  const factsList = document.querySelector(".facts-list");
  factsList.innerHTML = "";
  constellation.facts.forEach((fact) => {
    const factItem = document.createElement("li");
    factItem.textContent = fact;
    factsList.appendChild(factItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("constellationOption");
  selectEl.addEventListener("change", async function () {
    const selectedId = this.options[this.selectedIndex].value; // Get selected option value
    const selectedConstellation = await fetchConstellationDetails(selectedId);
    updateConstellationDetails(selectedConstellation);
  });
});
