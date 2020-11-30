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

//affixed all images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo2 = document.querySelector('#cta-img')
logo2.setAttribute('src', siteContent.cta['img-src'])

let logo3 = document.querySelector('#middle-img');
logo3.setAttribute('src', siteContent['main-content']['middle-img-src'])

//nav bar
const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.style.color = 'grey'
});

linksArray = Array.from(links)
linksArray[0].textContent = 'Services'
linksArray[1].textContent = 'Product'
linksArray[2].textContent = 'Vision'
linksArray[3].textContent = 'Features'
linksArray[4].textContent = 'About'
linksArray[5].textContent = 'Contact'

//header
const header = document.querySelector('h1');
const button = document.querySelector('button')

header.innerHTML = 'Dom <br> is <br> awesome!'
button.textContent = 'Get Started'

//main content

const heads = document.querySelectorAll('h4');

const headsArray = Array.from(heads);
headsArray[0].textContent = 'Features'
headsArray[1].textContent = 'About'
headsArray[2].textContent = 'Services'
headsArray[3].textContent = 'Product'
headsArray[4].textContent = 'Vision'
headsArray[5].textContent = 'Contact'

const headText = document.querySelectorAll('p');

const headTextArray = Array.from(headText);
headTextArray[0].textContent = siteContent['main-content']['features-content']
headTextArray[1].textContent = siteContent['main-content']['about-content']
headTextArray[2].textContent = siteContent['main-content']['services-content']
headTextArray[3].textContent = siteContent['main-content']['product-content']
headTextArray[4].textContent = siteContent['main-content']['vision-content']
headTextArray[5].innerHTML = '123 Way 456 Street<br> Somewhere, USA'
headTextArray[6].textContent = siteContent['contact']['phone']
headTextArray[7].textContent = siteContent['contact']['email']
headTextArray[8].textContent = siteContent['footer']['copyright']