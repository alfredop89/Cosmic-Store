// ANIMACIONES DEL HEADER Y BANNER

const header = document.querySelector('header')
const bannerText = document.querySelector('#bannerText')
const socialIcons = document.querySelector('#socialIcons')
const cartIcon = document.querySelector('#cartIcon')
const cartModal = document.querySelector('#cartModal')
const closeShoppingCart = document.querySelector('#closeShoppingCart')

function headerScroll(){
    
    window.onscroll = () => {
        
        if (window.scrollY > 20){
            header.classList.add('black-header')
            socialIcons.style.transform = 'translateX(100px)'
            bannerText.style.transform = 'translateX(-2000px)'
            cartIcon.style.transform = 'translateX(0px)'
        }else {
            header.classList.remove('black-header')
            socialIcons.style.transform = 'translateX(0px)'
            bannerText.style.transform = 'translateX(0px)'
            cartIcon.style.transform = 'translateX(-100px)'
            
        }

    }
}
headerScroll()

cartIcon.onclick = () =>{
    cartIcon.style.transform = 'translateX(-200px)'
    cartModal.style.transform = 'translateX(0px)'        
}
closeShoppingCart.onclick = () => {
    cartModal.style.transform = 'translateX(5000px)'
    cartIcon.style.transform = 'translateX(0px)'

}


