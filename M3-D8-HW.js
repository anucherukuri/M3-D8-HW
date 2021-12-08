window.onload = async() => {
 const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2Mzg5NzEzODcsImV4cCI6MTY0MDE4MDk4N30.ui1gZNkTLs9yfR-O_2ZCX7z7ctAFsq-zJ8PdeGpBTng"
}

})
// console.log(await response)
getProducts()
}

const url = "https://striveschool-api.herokuapp.com/api/product/"
const handleSubmit = async(event) => {
    // const url = "https://striveschool-api.herokuapp.com/api/product/"
    event.preventDefault()

    const myEvent = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        imageUrl: document.getElementById("imgUrl").value,
        brand: document.getElementById("brand").value,
        price: document.getElementById("price").value
            }
            fetch(url,{ 
                method: "POST",
                body: JSON.stringify(myEvent),
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2Mzg5NzEzODcsImV4cCI6MTY0MDE4MDk4N30.ui1gZNkTLs9yfR-O_2ZCX7z7ctAFsq-zJ8PdeGpBTng"
                        }
            })
            .catch(error => console.log("error", error))
}
const getProducts =  async() => { 
    const response = await fetch(url,{ 
                method: "GET",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2Mzg5NzEzODcsImV4cCI6MTY0MDE4MDk4N30.ui1gZNkTLs9yfR-O_2ZCX7z7ctAFsq-zJ8PdeGpBTng"
                        }
            })

            console.log(response)
            const products = await response.json() 
            console.log(products)
            return products
        }
