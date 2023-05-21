export const getPictures = () => {

    const images = [
        '/assets/picture1.jpg',
        '/assets/picture2.jpg',
        '/assets/picture3.jpg',
        '/assets/picture4.jpg',
        '/assets/picture5.jpg',
        '/assets/picture6.jpg',
        '/assets/picture7.jpg'
    ]

    var index = Math.floor(Math.random() * 6) + 1;
    console.log(index);
    return images[index];
}