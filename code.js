let idNumber = document.getElementById('id-number')
let btn = document.querySelector('#submit')
let error = document.querySelector('.error')
let gender = document.querySelector('.gender')
let dob = document.querySelector('.dob')
let container = document.querySelector('.container')


btn.addEventListener('click', () => {
    idNumber = idNumber.value
    if(idNumber.length < 13 || idNumber.length > 13){
        error.innerText = 'Enter a valid ID number'
    }
    else{
        let dateOfBirth = idNumber.slice(0, 6)
        let userGender = parseInt(idNumber.substring(6, 10))
        if(userGender >= 5000){
            userGender = 'male'
            console.log(userGender)
        }

        dob.innerText = `DOB: ${dateOfBirth}`
        gender.innerText = `Gender: ${userGender}`
    }
})  