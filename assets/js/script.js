const images = [
    {
        image: 'assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Popoliamo il carosello usando l'array qua sopra

let index = 0; // Indice dell'immagine corrente

// Per ogni immagine nell'array prendo il contenitore delle immagini
// e gli aggiungo la singola immagine
const imagesContainer = document.querySelector('#imagesContainer');
const thumbnailsContainer = document.querySelector('#thumbnailsContainer');

for(let key in images) {
    // console.log(images[key]);
    const thisPath = images[key].image;
    // console.log(thisPath);
    const newImage = `
    <img class="object-fit-cover d-none" src="${thisPath}" id="mainImage">
    `;
    // console.log(newImage);
    imagesContainer.innerHTML += newImage;

    const newThumbnail = `
    <img class="object-fit-cover opacity-50" src="${thisPath}" alt="thumbnail">
    `;
    // console.log(newThumbnail);

    thumbnailsContainer.innerHTML += newThumbnail;
}

// rimuoviamo la classe d-none alla prima immagine
const allImages = document.querySelectorAll('#imagesContainer img');
allImages[index].classList.remove('d-none');
const allThumbnails = document.querySelectorAll('#thumbnailsContainer img');
allThumbnails[index].classList.add('border', 'border-white');
allThumbnails[index].classList.remove('opacity-50');

const nextButton = document.querySelector('#nextButton');
nextButton.addEventListener('click', function() {
    // Aggiungiamo d-none all'elemento corrente
    // incrementiamo activeItem di 1
    // rimuoviamo d-none al nuovo activeItem
    // rimuoviamo border border-white alla thumbnail corrente
    // e lo aggiungiamo al successivo
    allImages[index].classList.add('d-none');
    allThumbnails[index].classList.remove('border', 'border-white');
    allThumbnails[index].classList.add('opacity-50');
    
    if(index < allImages.length -1) {
        index++;
    } else {
        index = 0;
    }

    allImages[index].classList.remove('d-none');
    allThumbnails[index].classList.add('border', 'border-white');
    allThumbnails[index].classList.remove('opacity-50');

});

const prevButton = document.querySelector('#prevButton');
prevButton.addEventListener('click', function(){
    // Funzionamento simile a nextButton, ma con una decrementazione dell'indice
    allImages[index].classList.add('d-none')
    allThumbnails[index].classList.remove('border', 'border-white');
    allThumbnails[index].classList.add('opacity-50');
    
    if(index > 0 ) {
        index--;
    } else {
        index = allImages.length -1;
    }

    allImages[index].classList.remove('d-none');
    allThumbnails[index].classList.add('border', 'border-white');
    allThumbnails[index].classList.remove('opacity-50');

});
