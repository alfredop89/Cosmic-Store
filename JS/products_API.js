// FETCH STORE API

const products = []

function callApi(){

    fetch('https://fakestoreapi.com/products/')
        .then(resp => resp.json())
        .then(json => {

            products.push(...json)

            // AGREGAR CANTIDAD AL PRODUCTO

            for ( let i = 0; i < products.length; i++){
                products[i].cantidad = 0
            }

            // RENDERIZADO DE PRODUCTOS

            products.forEach((prod) => {

                let productSection = document.querySelector('#productSection')
                let div = document.createElement('div')
                div.innerHTML = `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${prod.image}" alt="">
                        </div>
                        <div class="product-title">
                            <p>${prod.title}</p>
                        </div>
                        <div class="product-price">
                            <p>${prod.price + " $"}</p>
                        </div>
                        <div class="product-description">
                            <p>Ver descripción</p>
                        </div>
                        <button id="${prod.id}" class="product-card-button">AGREGAR</button>
                    </div>
                `
                productSection.appendChild(div)

                // IMAGEN DEL PROODUCTO

                

                // BOTON AGREGAR

                let agregar = document.getElementById(prod.id)
                agregar.onclick = () => {
                    

                    function addToCart(arr){

                        if(arr.length === 0){
                            arr.push(prod)
                            prod.precio_total = prod.price * prod.cantidad
                            cartIconLength()
                            cartUpdate()
                            renderCart()
                            totalPrice()
                        }

                        let buscarRepetido = arr.includes(prod)
                        if(buscarRepetido){
                            prod.cantidad++
                            prod.precio_total = prod.price * prod.cantidad
                            cartIconLength()
                            cartUpdate()
                            renderCart()
                            totalPrice()
                        }else{
                            arr.unshift(prod)
                            prod.cantidad++
                            prod.precio_total = prod.price * prod.cantidad
                            cartIconLength()
                            cartUpdate()
                            renderCart()
                            totalPrice()
                        }
                    }
                    addToCart(shoppingCart)
                    
                }
            })
        })
}
callApi()