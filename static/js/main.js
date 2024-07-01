/*
+++++++++++++++++++++++++++++++++++++++++++++++Demo Video++++++++++++++++++++++++++++++++++++++++++++++++
*/
var modal = document.getElementById("myModal");
var btn = document.getElementById("demoBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "flex";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
++++++++++++++++++++++++++++++++++++++++++++Demo Video End+++++++++++++++++++++++++++++++++++++++++++++++++
*/

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

    if (isBestSeller) {
        return html
    } else {
        html = html.replace('<div class="best-seller-label">Best Seller</div>', "")
        return html
    }
}

searchBtn.addEventListener('click', function (event) {
    productsContainer.innerHTML = ''
    // Prevent the default action of the anchor tag
    event.preventDefault();

    // Get the input value
    const query = userInput.value;

    const fetchData = async (query) => {
        try {
            const response = await fetch(
                `https://RDeepak-RAG-Embedding-Search-EPs.hf.space/api.v1/products/?query=${query}`,
                {
                    method: 'GET',
                    headers: {
                        "Authorization": "Infr_89b474cf37cb8ada500c387fd4d29f88",
                        "Content-Type": "application/json"
                    }
                }
            )

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const data = await response.json()
            return data
        } catch (error) {
            console.log('Fetch error: ', error)
            throw error
        }
    }

    fetchData(
        query
    ).then(
        records => {
            records.forEach(record => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                const prodImage = record["imgUrl"]
                const prodTitle = record["title"]
                const prodPrice = record["price"]
                const prodRating = record["stars"]
                const prodLink = record["productURL"]
                const isBestSeller = record["isBestSeller"]

                productDiv.innerHTML = productCard(prodImage, prodTitle, prodPrice, prodRating, prodLink, isBestSeller)
                productsContainer.appendChild(productDiv)
            });
        }
    )
})