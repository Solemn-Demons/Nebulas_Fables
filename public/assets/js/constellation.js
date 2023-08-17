constellationSearch();

var divEl = document.getElementById('starchartSearch');

function constellationSearch(userSearch)  {
    $('#searchBtn').on('click', function async (event) {
        var searchInput = $('#user-search').val().trim();
        
        if (loggedIn) {
            const respone = await fetch('/api/constellation', {
                method: 'GET',
                body: JSON.stringify(constellationData),
                headers: {'Content-type': 'application/json'},
            })
            .then(function (data)
            {
                console.log(data);
                var constellationResponse = data;
                $('#starchartSearch').empty();
                console.log(constellationResponse);
                
            })
        } else {
            alert('Please Login');
        };
    });
};