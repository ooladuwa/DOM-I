const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {

    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",
    
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"]);

let logo3 = document.getElementById('middle-img');
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"])
// end of pictures

// start of Header
let links = document.querySelectorAll('a');

links.forEach(function(currentValue){
  currentValue.style.color = "green"
});

let endLink = document.createElement('a')
endLink.textContent='endTest1'
// console.log(endLink)

let endLinkB = document.querySelector('nav')
endLinkB.appendChild(endLink)
// console.log(endLinkB)

let startLink = document.createElement('a')
startLink.textContent='startTest1'

let startLinkB = document.querySelector('nav')
startLinkB.prepend(startLink)


// links.textcontent = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact']
// console.log(links)

let newLinks = Array.from(links)

newLinks[0].textContent='Services',
newLinks[1].textContent='Product',
newLinks[2].textContent='Vision',
newLinks[3].textContent='Features',
newLinks[4].textContent='About',
newLinks[5].textContent='Contact'

const button = document.querySelector('button')
button.textContent = "Get Started"

let headline = document.querySelector('h1') 
headline.innerHTML = "DOM<br> Is<br> Awesome"

// End of Header

// Sub-headings

let text = document.querySelectorAll('h4')
// console.log(text)
let newText = Array.from(text)
// console.log(newText)
newText[0].textContent = 'Features',
newText[1].textContent = 'About',
newText[2].textContent = 'Services',
newText[3].textContent = 'Product',
newText[4].textContent = 'Vision',
newText[5].textContent = 'Contact'

// Text Passages

let content = document.querySelectorAll('p')
// console.log(content);
let newContent = Array.from(content)
// console.log(newContent);
newContent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

newContent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

newContent[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

newContent[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

newContent[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

// Footer 

newContent[5].innerHTML = "123 Way 456 Street<br> Somewhere, USA",
newContent[6].textContent = "1 (888) 888-8888",
newContent[7].textContent = "sales@greatidea.io",
newContent[8].textContent = "Copyright Great Idea! 2018"
