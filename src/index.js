console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {

    let dogUL = document.querySelector("#dog-breeds")

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(handleImage)

    fetchReturn()
        .then(response => {
            let dogBreedsArr = Object.keys(response.message)
            dogBreedsArr.forEach((breed) => addLI(breed))
        })

    dogUL.addEventListener("click", function (event) {
        if (event.target.dataset.info === "breed") {
            event.target.style.color = "teal"
        }
    })

    let breedSelect = document.getElementById('breed-dropdown')
    breedSelect.addEventListener("change", (event) => {
        fetchReturn()
            .then(response => {
                let breedSelectArr = Object.keys(response.message)

                let filteredArray = breedSelectArr.filter(breed => {
                    return breed.startsWith(event.target.value)
                })

                dogUL.innterHTML = ""

                filteredArray.forEach(addLI)



            })
        //DOMContentLoaded
    })

    function fetchReturn() {
        return fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
    }

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

    function addLiToDom(breed) {
        let dogUL = document.querySelector("#dog-breeds")
        dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
    }

    function addLI(breed) {
        let dogUL = document.querySelector("#dog-breeds")
        dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
    }
})

