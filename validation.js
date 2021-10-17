
form.addEventListener('submit', () => {

    let firstName = document.forms['form']['firstname'].value
    let lastName = document.forms['form']['lastname'].value
    let email = document.forms['form']['email'].value
    let frontCheckBox = document.getElementById('frontend-checkbox')
    let backCheckBox = document.getElementById('backend-checkbox')
    let mobileCheckBox = document.getElementById('mobile-checkbox')
    let graphicsCheckBox = document.getElementById('graphics-checkbox')
    let lista = []

    if (firstName !== '' && lastName !== '' && email !== '') {
        lista.push(firstName,lastName,email)
        if (frontCheckBox.checked == false && backCheckBox.checked == false && mobileCheckBox.checked == false && graphicsCheckBox.checked == false) {
            alert('Wybierz sekcję')
        } else {
            if (frontCheckBox.checked == true) {
                lista.push(frontCheckBox.value)
            }
            if (backCheckBox.checked == true) {
                lista.push(backCheckBox.value)
            }
            if (mobileCheckBox.checked == true) {
                lista.push(mobileCheckBox.value)
            }
            if (graphicsCheckBox.checked == true) {
                lista.push(graphicsCheckBox.value)
            }
            console.log(lista);
            alert('Wszystko w porządku')
            lista.push(firstName, lastName, email)
            console.log(lista)
        }
    }
})

