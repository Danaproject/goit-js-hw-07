const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


const galleryRef = document.querySelector('#gallery');

const createImage = image => {
    const itemRef = document.createElement('li');
    const imgRef = document.createElement('img');
    imgRef.src = image.url;
    imgRef.alt = image.alt;
    
    imgRef.style.width = '380px';
    itemRef.style.margin = "8px";
    
    itemRef.appendChild(imgRef);
    return itemRef;
}
const imagesItem = images.map(image => createImage(image));
galleryRef.append(...imagesItem);

galleryRef.style.display = "flex";
galleryRef.style.flexWrap = "wrap";
galleryRef.style.margin = "-8px";
galleryRef.style.listStyle = "none";

console.log(imagesItem);