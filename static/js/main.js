const userInput = document.getElementById("user-query")
const aBtn = document.getElementById("a-btn")
const searchBtn = document.getElementById("btn")

const productsContainer = document.getElementById("products-block")


function productCard(prodImage, prodTitle, prodPrice, prodRating, prodLink, isBestSeller) {
    let html = `
    <div class="product-img">
        <img src="${prodImage}" alt="image">
        <div class="best-seller-label">Best Seller</div>
    </div>
    <div class="product-title">
        <p>
            ${prodTitle}
        </p>
    </div>
    <div class="product-details">
        <p><span>Price: </span>$${prodPrice}/*</p>
        <p><span>Star: </span>${prodRating}</p>
    </div>
    <div class="product-link">
        <div class="buy-btn"><a href="${prodLink}" target="_blank">Buy</a></div>
    </div>
    `

    if (isBestSeller){
        return html
    }else{
        html = html.replace('<div class="best-seller-label">Best Seller</div>', "")
        return html
    }
}


// const fetchedData = [
//     {
//         '_id': '6676b375c251745a5f4536d4',
//         'title': "Men's Crew Neck Tee 100% Combed Heavyweight Cotton T-Shirts (Pack of 6)",
//         'imgUrl': 'https://m.media-amazon.com/images/I/81lT7uIvBpL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B07NNNJCS4',
//         'stars': 4.7,
//         'reviews': 0,
//         'price': 36.99,
//         'listPrice': 39.95,
//         'isBestSeller': false,
//         'boughtInLastMonth': 200,
//         'category': "Men's Clothing",
//         'objectID': '68364d3d-2ffd-4900-8def-5ea37943dcdf'
//     },
//     {
//         '_id': '6676b37dc251745a5f453b73',
//         'title': "Men's Cloud Flannel Woven Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/81tpIt-ZHzL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B09NMN9J73',
//         'stars': 4.7,
//         'reviews': 0,
//         'price': 26.11,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 100,
//         'category': "Men's Clothing",
//         'objectID': '8a61b495-353d-43b1-8ff6-402205bf1821'
//     },
//     {
//         '_id': '6676b37dc251745a5f453e69',
//         'title': 'Cotton Linen Shirts for Men Casual Shirts Lightweight Long Sleeve Henley Beach Shirts Hawaiian T Shirts for Men',
//         'imgUrl': 'https://m.media-amazon.com/images/I/61N9w7ta6gL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B0BRN54MZ5',
//         'stars': 4.2,
//         'reviews': 0,
//         'price': 21.99,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 100,
//         'category': "Men's Clothing",
//         'objectID': 'e4e2fa4b-d050-42e0-baf2-07103f0e4ec4'
//     },
//     {
//         '_id': '6676b38cc251745a5f454f2a',
//         'title': 'Mens Ls Regular Fit Shirt',
//         'imgUrl': 'https://m.media-amazon.com/images/I/81S04FOKY8L._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B0BCQG2XZG',
//         'stars': 0.0,
//         'reviews': 0,
//         'price': 195.0,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': 'f98a3aaf-f4fb-4225-bac7-ece4df77bc56'
//     },
//     {
//         '_id': '6676b38fc251745a5f4550d1',
//         'title': "Men's Dress Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/7172sgsfFeL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B07NFRDWWC',
//         'stars': 4.3,
//         'reviews': 0,
//         'price': 98.0,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': 'c09b2cb1-4054-4790-8aea-f1ab21ec2ed5'
//     },
//     {
//         '_id': '6676b394c251745a5f455979',
//         'title': 'Mens Cotton Linen V-Neck Shirt Solid Hippie Shirts Yoga Henley Shirt Hawaiian Beach Wear',
//         'imgUrl': 'https://m.media-amazon.com/images/I/5144-EkVVdL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B0B41NJ4VX',
//         'stars': 3.2,
//         'reviews': 0,
//         'price': 23.88,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': 'c36ba9fd-b37d-42db-b680-f656e93fa517'
//     },
//     {
//         '_id': '6676b397c251745a5f455f44',
//         'title': "Men's Pima Cotton Blend V-Neck Short Sleeve Tee Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/71QVwCYiS9S._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B01MTNTGIW',
//         'stars': 4.5,
//         'reviews': 0,
//         'price': 28.3,
//         'listPrice': 30.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '04b08dd8-97d8-4cc5-9833-22d6356c0a4a'
//     },
//     {
//         '_id': '6676b39ac251745a5f455fbf',
//         'title': 'Mens 100% Cotton Twill Oxford Shirt with Contrast',
//         'imgUrl': 'https://m.media-amazon.com/images/I/710uTuEzHOL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B01N9RL6W3',
//         'stars': 4.3,
//         'reviews': 0,
//         'price': 29.99,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': 'fa9af676-50b3-41c0-a730-298f2545566c'
//     },
//     {
//         '_id': '6676b39ac251745a5f4560cc',
//         'title': "Men's Solid Interlock Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/61-zDZ8RqJL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B0BLT8PSWH',
//         'stars': 4.4,
//         'reviews': 0,
//         'price': 21.99,
//         'listPrice': 27.99,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '6d2bf04d-b34b-4692-8737-8454a7ee7e59'
//     },
//     {
//         '_id': '6676b39ac251745a5f456161',
//         'title': "Men's Cloud Weave Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/91+sWUnEG8L._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B0BP2ZC199',
//         'stars': 4.8,
//         'reviews': 0,
//         'price': 140.34,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '672fa9e1-d70e-42d7-a155-7448ad77cc93'
//     },
//     {
//         '_id': '6676b39ac251745a5f4561d4',
//         'title': "Men's Polo Shirts Regular Fit Cotton Golf Shirt Soft Breathable Fashion Casual Collared Tshirts",
//         'imgUrl': 'https://m.media-amazon.com/images/I/61yDMnkVmZL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B09DFYW5JD',
//         'stars': 4.2,
//         'reviews': 0,
//         'price': 35.99,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '611ed5b3-a0fc-436e-bf83-fbf4ebcb6324'
//     },
//     {
//         '_id': '6676b39ac251745a5f456302',
//         'title': "Men's Wowzer Modern Fit Cotton Polo Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/81HvcOVTsFL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B01JQ90PMS',
//         'stars': 4.6,
//         'reviews': 0,
//         'price': 18.0,
//         'listPrice': 35.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': 'be06d04f-198e-40f6-9b75-1e7a899a8b9e'
//     },
//     {
//         '_id': '6676b39dc251745a5f45637c',
//         'title': 'mens Crew Neck Logo Tee T Shirt, Quilted Logo Heather Grey, X-Large US',
//         'imgUrl': 'https://m.media-amazon.com/images/I/71NR7BG--nL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B0775RL2T4',
//         'stars': 4.6,
//         'reviews': 0,
//         'price': 23.35,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': 'bd8998d4-34ba-42fc-94bc-8722716d640f'
//     },
//     {
//         '_id': '6676b39dc251745a5f4563ee',
//         'title': "Men's Regular Fit Check Print Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/911D7nKQkmL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B09RQ94BY3',
//         'stars': 5.0,
//         'reviews': 0,
//         'price': 119.99,
//         'listPrice': 145.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '64f80876-71f8-486d-886e-67b76bd10a59'
//     },
//     {
//         '_id': '6676b39dc251745a5f4566eb',
//         'title': "Men's Everett Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/71j9H7PDIVL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B0BCCPFMVB',
//         'stars': 4.3,
//         'reviews': 0,
//         'price': 67.6,
//         'listPrice': 169.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '6d7d0e86-7f97-4ff9-bbf7-01043fa22e6d'
//     },
//     {
//         '_id': '6676b3a0c251745a5f45687a',
//         'title': 'Mens O Bark Shirt',
//         'imgUrl': 'https://m.media-amazon.com/images/I/81+TioXs-OL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B07F1V5DYX',
//         'stars': 4.5,
//         'reviews': 0,
//         'price': 27.69,
//         'listPrice': 30.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '6424131a-cf1b-41da-8778-4dbb72c7da4e'
//     },
//     {
//         '_id': '6676b3a0c251745a5f456b46',
//         'title': 'Turtleneck Men Shirt Long Sleeve Ribbed Knitted Casual Tshirt Slim Fit Cotton Turtle Neck Pullover Sweater',
//         'imgUrl': 'https://m.media-amazon.com/images/I/719OaVV3kIL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B09BJ64VQ6',
//         'stars': 4.3,
//         'reviews': 0,
//         'price': 21.99,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '142b9cd6-3c99-4b37-8b61-191fd2c7c486'
//     },
//     {
//         '_id': '6676b3a3c251745a5f456d0d',
//         'title': "Men's Shirt JKT",
//         'imgUrl': 'https://m.media-amazon.com/images/I/61Eo2aeJuDL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B09SN4GKZ9',
//         'stars': 0.0,
//         'reviews': 0,
//         'price': 221.25,
//         'listPrice': 295.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': 'ba103f39-1eef-4c74-8edf-de9799c7362f'
//     },
//     {
//         '_id': '6676b3a6c251745a5f456fe9',
//         'title': 'Men Compression Shirt',
//         'imgUrl': 'https://m.media-amazon.com/images/I/81I8vISfjCL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B0BBWCVWLV',
//         'stars': 4.4,
//         'reviews': 0,
//         'price': 24.99,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '025bca26-216c-4357-8107-c709a87aba1a'
//     },
//     {
//         '_id': '6676b54ac251745a5f47a103',
//         'title': "Men's Center Logo Pique Cotton Polo Shirt",
//         'imgUrl': 'https://m.media-amazon.com/images/I/71uHjoFT0EL._AC_UL320_.jpg',
//         'productURL': 'https://www.amazon.com/dp/B098ZCB6LR',
//         'stars': 4.7,
//         'reviews': 71,
//         'price': 88.0,
//         'listPrice': 0.0,
//         'isBestSeller': false,
//         'boughtInLastMonth': 0,
//         'category': "Men's Clothing",
//         'objectID': '45d1225a-4e87-49ff-8ccd-004ec0bc3127'
//     }]


searchBtn.addEventListener('click', function (event) {
    productsContainer.innerHTML = ''
    // Prevent the default action of the anchor tag
    event.preventDefault();

    // Get the input value
    const query = userInput.value;

    const fetchedData = fetch(
        `http://127.0.0.1:8000/api.v1/products?query=${query}`,
        {
            method: 'GET',
            headers:{
                "Authorization": "Infr_89b474cf37cb8ada500c387fd4d29f88",
                "Content-Type": "application/json"
            }
        }
    ).then(response => {
        if (!response.ok){
            throw new Error("Server error...")
        }
        return response.json()
    })

    // Do something with the input value
    console.log('Button clicked with query: ', query);
    console.log(fetchedData)

    // fetchedData.forEach(record => {
    //     const productDiv = document.createElement('div');
    //     productDiv.classList.add('product');
    //     const prodImage = record["imgUrl"]
    //     const prodTitle = record["title"]
    //     const prodPrice = record["price"]
    //     const prodRating = record["stars"]
    //     const prodLink = record["productURL"]
    //     const isBestSeller = record["isBestSeller"]

    //     productDiv.innerHTML = productCard(prodImage, prodTitle, prodPrice, prodRating, prodLink, isBestSeller)
    //     productsContainer.appendChild(productDiv)
    // });
})