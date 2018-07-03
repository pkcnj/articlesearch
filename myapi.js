// API Details
const nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const queryParams = '?api-key=a22ac56558854ddbbc9ce78a8131f4e0&q=';

// Page Components


const jsonButton = document.querySelector('#runSearch');
const aString = document.querySelector('#startDate');
const bString = document.querySelector('#endDate');


const inputField = document.querySelector('#searchTerm');
const responseField = document.querySelector('#responseField');



// AJAX function
const runQuery = async() => {
    const wordQuery = inputField.value;
    const yearStart = `${'&begin_date='}${aString.value}`;
    const yearEnd = `${'&end_date='}${bString.value}`;

    const endpoint = `${nytUrl}${queryParams}${wordQuery}${yearStart}${yearEnd}`;
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();


            let tr;
            let x;

            for (x in jsonResponse.response.docs) {
                const body = jsonResponse.response.docs[x].web_url;
                tr = $('<tr/>');

                tr.append("<td>" + body + "</td>")

                $('#imdb').append(tr);

            };









        }
    } catch (error) {
        console.log(error);
    }
}

jsonButton.addEventListener('click', runQuery);