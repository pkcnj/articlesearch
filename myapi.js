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
                const headline = jsonResponse.response.docs[x].headline.main;
                const snippet = jsonResponse.response.docs[x].snippet;
                const dateArticle = jsonResponse.response.docs[x].pub_date;
                const author = jsonResponse.response.docs[x].byline.original;
                tr = $('<tr/>');

                tr.append("<td>" + "<h4>" + headline + "</h4>" + "<br />" + author + "<br />" + dateArticle + "<br />" + "<a href='" + body + "'>" + body + "</a>" + "<br />" + snippet + "</td>")


                $('#imdb').append(tr);

            };









        }
    } catch (error) {
        console.log(error);
    }
}

jsonButton.addEventListener('click', runQuery);
$('#clearAll').on('click', function() {

    $("#imdb").empty();
})