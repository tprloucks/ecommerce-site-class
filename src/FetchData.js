const allProducts = [
    {
        id: '1',
        name: "red boat",
        description: 'a red boat',
        brand: 'Bertram',
        price: 1000,
        image: 'https://cdn.trendhunterstatic.com/thumbs/speedboat.jpeg'
    },
    {
        id: '2',
        name: "blue boat",
        description: 'a blue boat',
        brand: 'Boston Whaler',
        price: 1000,
        image: 'https://thecoolhunter.net/wp-content/uploads/old-blog-images/blueb.jpg'
    }
]

export const fetchProducts = () => new Promise ((resolve, reject) => {
    console.log("fetch the products")
    setTimeout(()=> {
        try {
            resolve(allProducts)
        } catch (e) {
            reject(e)
        }
    }, 1000)
})