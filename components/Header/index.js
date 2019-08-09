// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
function createElement(element, className, content, parent){
    const item = document.createElement(element);
    className != "" ? item.classList.add(className) : false;
    content != "" ? item.textContent = content : false;
    parent != "" ? parent.appendChild(item): false;
    return item;
}

function Header() {
    const divHeader = createElement("div", "header", "", "");
    const spanDate = createElement("span", "date", "MARCH 28, 2019", divHeader);
    const h1 = createElement("h1", "", "Lambda Times", divHeader);
    const spanTemp = createElement("span", "temp", "98°", divHeader);
    return divHeader;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());

export {createElement};
