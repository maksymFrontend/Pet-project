if (!/Mobi/.test(navigator.userAgent)){ 
    document.getElementById('Main').addEventListener('mousemove', e => {
        let x, y
        if (e.pageX)
        {
            x = e.pageX
        }
        else if (e.clientX)
        {
            x = e.clientX+(document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft
        }
        if (e.pageY)
        {
            y = e.pageY
        }
        else if (e.clientY)
        {
            y = e.clientY+(document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop
        }
        document.getElementsByClassName('parallax-block')[0].style.marginLeft =  `${x/120}px`
        document.getElementsByClassName('parallax-block')[0].style.marginTop =  `${y/130}px`
    })
}

let phoneInput = document.getElementById("Phone")
phoneInput.addEventListener("input", function(event) {
    let phoneNumber = event.target.value
    let digitsPattern = /^[+\d]*$/
    if (!digitsPattern.test(phoneNumber) || phoneNumber.length < 10) {
        document.getElementsByClassName('input-phone')[0].style = 'background: #623a3a; border: 1px solid #ff3c3c;'
        document.getElementsByClassName('form-button')[0].disabled = true
    } 
    else{
        document.getElementsByClassName('input-phone')[0].style = ''
        document.getElementsByClassName('form-button')[0].disabled = false
    }
})

document.getElementById("FormApplication").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let divElement = document.createElement("div")
    divElement.className = 'popup-block'
    let divElementBlock = document.createElement("div")
    divElementBlock.className = 'popup-window'
    let h2Element = document.createElement("h2")
    h2Element.textContent = "Thank you! Your data has been successfully sent!"
    divElementBlock.appendChild(h2Element)
    let ulElement = document.createElement("ul")
    let formData = new FormData(this)
    for (var pair of formData.entries()) {
        let liElement = document.createElement("li")
        liElement.innerText = pair[0] + ": " + pair[1]
        ulElement.appendChild(liElement)
    }
    let button = document.createElement("button")
    button.className = 'form-button w-100'
    button.innerText = 'Close the form'
    button.onclick = () => divElement.style.display = 'none'
    divElementBlock.appendChild(ulElement)
    divElementBlock.appendChild(button)
    divElement.appendChild(divElementBlock)
    document.body.appendChild(divElement)
    document.getElementById("FormApplication").reset()
})
