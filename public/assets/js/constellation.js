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

// BETHS CODE TO REVIEW AND BLEND WITH ABOVE WHEN NOT SO TIRED
// Fetch constellation details based on ID
 async function fetchConstellationDetails(constellationId) {
    const response = await fetch(`/api/constellation/${constellationId}`);
    const data = await response.json();
    return data;
  }
  
  function updateConstellationDetails(constellation) {
    const constellationName = document.querySelector('.constellation-name');
    constellationName.textContent = constellation.name;
  
    const starsList = document.querySelector('.stars-list');
    starsList.innerHTML = '';
    constellation.stars.forEach(star => {
      const starItem = document.createElement('li');
      starItem.textContent = star;
      starsList.appendChild(starItem);
    });
  
    const factsList = document.querySelector('.facts-list');
    factsList.innerHTML = '';
    constellation.facts.forEach(fact => {
      const factItem = document.createElement('li');
      factItem.textContent = fact;
      factsList.appendChild(factItem);
    });
  }
  
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', async function(event) {
      event.preventDefault();
      const selectedId = this.id;
      const selectedConstellation = await fetchConstellationDetails(selectedId);
      updateConstellationDetails(selectedConstellation);
    });
  });
   