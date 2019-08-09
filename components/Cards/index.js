import {createElement} from "../Header/index.js";
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then( response => {
    const articleData = response.data.articles;

    console.log(articleData);

    const divTabNodeList = document.querySelectorAll("div.tab");
    console.log(divTabNodeList);
    divTabNodeList.forEach( tabList => {
        tabList.addEventListener("click", (event) => {
            //if cards exist, remove them
            const cardContainer = document.querySelector("div.cards-container");
            console.log(cardContainer);
            if (cardContainer != null) {
                while (cardContainer.firstChild) {
                    cardContainer.removeChild(cardContainer.firstChild);
                }
            }

            let articleName = event.target.textContent;
            articleName === "node.js" ? articleName = "node" : false;
            console.log(`Article Name: ${articleName}`);
            //There are multiple headlines
            articleData[articleName].forEach( article => {
                const divCard = createElement("div", "card", "", document.querySelector(".cards-container"));
                const divHeadline = createElement("div", "headline", article.headline, divCard);
                const divAuthor = createElement("div", "author", "", divCard);
                const divImgContainer = createElement("div", "img-container", "", divAuthor);
                const img = createElement("img", "", "", divImgContainer);
                img.src = article.authorPhoto;
                const span = createElement("span", "", `By ${article.authorName}`, divAuthor);
        })
    })
            })
    })
