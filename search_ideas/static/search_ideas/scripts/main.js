function searchSubmission(){
    /* Getting the search term */
    let searchTerm =  document.getElementById('search_box').value;
    /* Filtered array by come conditions : Lowercase, Includes, etc */
    let filteredArray = [];
    /* Filtering */
    ideaList.forEach((ele) => {
        if (searchTerm == ele || searchTerm.toLowerCase() == ele || ele.includes(searchTerm)){
            filteredArray.push(ele);
        }
    });
    /* Updating the search results */
    updateSearchResults(filteredArray);
}

function updateSearchResults(arr){
    /* temp View for storing temporaraly html */
    let tempView = ``;

    for(let i = 0; i < arr.length; i++){
        tempView += `
            <div class="result-item">   
                <h3>${arr[i]}</h3>
            </div>
        `;
    };
    /* Setting the html to results display */
    document.getElementById('search-results-display').innerHTML = tempView;

}