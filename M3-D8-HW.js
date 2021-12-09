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
            await fetch(url,{ 
                method: "POST",
                body: JSON.stringify(myEvent),
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2Mzg5NzEzODcsImV4cCI6MTY0MDE4MDk4N30.ui1gZNkTLs9yfR-O_2ZCX7z7ctAFsq-zJ8PdeGpBTng"
                        }
            })
            .catch(error => console.log("error", error))
}
//GET PRODUCTS
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
            const container = document.querySelector(".card-columns")
   
    products.forEach((prod)=> {
        container.innerHTML += 
        ` <div class="card" onclick="setData(${prod})">
                <div class="card-body">
        ${prod.name}
            </div>
            </div>`

    })
return products
}

let setData = (prod) => {
    console.log(prod)
    // document.querySelector("#name").innerHTML = prod.name
}
//UPDATE PRODUCTS
    const editProducts =  async() => { 
    const response = await fetch(url,{ 
                body: "",
                method: "PUT",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2Mzg5NzEzODcsImV4cCI6MTY0MDE4MDk4N30.ui1gZNkTLs9yfR-O_2ZCX7z7ctAFsq-zJ8PdeGpBTng"
                        }
            })
            
        }
//DELETE PRODUCTS
        const deleteProducts =  async() => { 
    const response = await fetch(url,{ 
                method: "DELETE",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2Mzg5NzEzODcsImV4cCI6MTY0MDE4MDk4N30.ui1gZNkTLs9yfR-O_2ZCX7z7ctAFsq-zJ8PdeGpBTng"
                        }
            })
           
        }
