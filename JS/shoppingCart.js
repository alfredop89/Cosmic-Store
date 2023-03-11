// SHOPPING CART

let cartLenght = document.querySelector('#cartLenght')

let cartContainer = document.querySelector('#cartContainer')
let trashIcon = document.getElementById('trashIcon')

let shoppingCart = []


// SHOPPING CART ICON

function cartIconLength(){

    let cantidadTotal = shoppingCart.reduce((index, prod) => index += prod.cantidad, 0)
    cartLenght.innerHTML = `<p>${cantidadTotal}</p>`
    

}

// SHOPPING CART UPDATE

function cartUpdate(){
    cartContainer.innerHTML = ``
}

// SHOPPING CART RENDER

function renderCart(){

    shoppingCart.forEach((prod) => {

        let div = document.createElement('div')

        div.classList.add('cart-product')
        div.innerHTML = `
            <div id="${prod.id}" class="cart-close-product">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="cart-image-product">
                <img src="${prod.image}" alt="">
            </div>
            <div class="cart-title-product">
                <p>${prod.title}</p>
            </div>
            <div class="cart-price-product">
            <div>
            <p>${'Cant: ' + prod.cantidad}</p>
            </div>
            <div>
                <p>${'Total: ' + prod.precio_total + ' $'}</p>
            </div>  
        `
        cartContainer.appendChild(div)

        // ELIMINAR PRODUCTO

        let cartCloseProduct = document.getElementById(prod.id)

        cartCloseProduct.onclick = () => {
            
            prod.cantidad = 0
            deleteProd(prod)
            cartIconLength()
            cartUpdate()
            renderCart()
            totalPrice()
        }
    })

}

// ELIMINAR PRODUCTO

function deleteProd(prod) {

    let eliminar = shoppingCart.forEach((producto, index, object) => {
        if(producto === prod){
            object.splice(index, 1)
        }
    })
        
}

// VACIAR CARRITO

function vaciarCarrito(){
    trashIcon.onclick = () => {
        shoppingCart.length = 0
        cartLenght
        cartIconLength()
        cartUpdate()
        renderCart()
        totalPrice()
    }
}
vaciarCarrito()

// PRECIO TOTAL

function totalPrice(){

    let totalToPay = document.getElementById('totalToPay')
    let precioTotal = shoppingCart.reduce((index, item) => index += item.precio_total, 0)
    totalToPay.innerHTML = `<p>Total a pagar: ${Math.floor(precioTotal)} $</p>`

}