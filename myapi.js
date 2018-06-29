// information to reach API
const nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const queryParams = '?api-key=a22ac56558854ddbbc9ce78a8131f4e0&q=';

// selecting page elements
const jsonButton = document.querySelector('#runSearch');
const yearStart = '&begin_date=' + $('#startYear').value;
const yearEnd = '&end-date' + $('#endYear').value;
const inputField = document.querySelector('#searchTerm');
const responseField = document.querySelector('#responseField');



// AJAX function
const runQuery = async() => {
    const wordQuery = inputField.value;
    const endpoint = `${nytUrl}${queryParams}${wordQuery}`;
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

jsonButton.addEventListener('click', runQuery);