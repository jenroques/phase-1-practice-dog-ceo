console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {

    let dogUL = document.querySelector("#dog-breeds")

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(handleImage)


    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(response => {
            let dogBreedsArr = Object.keys(response.message)
            dogBreedsArr.forEach((breed) => {
                dogUL.innerHTML += `<li>${breed}</li>`
            })
        })
    //DOMContentLoaded
})

function handleImage(jsonObject) {
    let dogImages = document.getElementById('dog-image-container')
    let dogArray = jsonObject.message;
    dogArray.forEach(url => {
        dogImages.innerHTML += imageTagString(url)
    })
}


function imageTagString(url) {
    return `<img src="${url}"/>`
}

