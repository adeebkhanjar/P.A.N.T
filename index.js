//key   //? r1p0hoAwll8bABhoWnFw8iTyBpx5c6wR     //
//secret//? ROfTAEfulzFzoaJh                     //
//app id//? 103e6f44-572f-4ed2-8b80-f11da54df601 //
//?==============================================//


const btn = document.querySelectorAll('input'),
    articleContainer = document.querySelector('.art-cont');

// document.body.addEventListener('click', () => {
//     let temp = false
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// })
btn[0].addEventListener('click', () => {
    fetchArticles(1)
});
btn[1].addEventListener('click', () => {
    fetchArticles(7)
});
btn[2].addEventListener('click', () => {
    fetchArticles(30)
});

async function fetchArticles(days) {
    try {
        let articles = await (await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${days}.json?api-key=r1p0hoAwll8bABhoWnFw8iTyBpx5c6wR`)).json()
        console.log(articles);
        articleContainer.innerHTML = ''
        articles.results.forEach(obj => {
            let div = document.createElement('div');
            div.classList.add('sub-div');
            div.innerHTML = `<hr>
                    <p class="flex"><span>${obj.title}</span><Span>${obj.section}</span></p>
                    <div class="hide">
                        <p><strong>${obj.abstract}</strong></p>
                        <img src="${obj.media.length>0?obj.media[0]["media-metadata"][2].url:' ' }">
                        <p>${obj.media.length>0?obj.media[0].caption:" "}</p>
                        <p>For the full article click <a href="${obj.url}" target="_blank">HERE</a></p>                                   
                    </div>`;
            articleContainer.appendChild(div)
        });
    } catch (e) {
        console.log(e);
    }
}
fetchArticles(1)