const posts = [];

const images = [
    '/images/wedding-images/wedding1.jpg',
    '/images/wedding-images/wedding2.jpg',
    '/images/wedding-images/wedding3.jpg',
    '/images/wedding-images/wedding4.jpg',
    '/images/wedding-images/wedding5.jpg',
    '/images/wedding-images/wedding6.jpg',
    '/images/wedding-images/wedding7.jpg',
    '/images/wedding-images/wedding8.jpg',
    '/images/wedding-images/wedding9.jpg',
    '/images/wedding-images/wedding10.jpg',
    '/images/wedding-images/wedding11.jpg',
    '/images/wedding-images/wedding12.jpg',
    '/images/wedding-images/wedding13.jpg',
    '/images/wedding-images/wedding14.jpg',
];

let imageIndex = 0;

for(let i = 1; i <= 20; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > images.length - 1) imageIndex = 0;
}