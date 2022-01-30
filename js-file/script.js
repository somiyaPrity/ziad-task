// add more education field

const addField = document.querySelector('.add-button')
const educationField = document.querySelector('.education-field')

addField.addEventListener('click', () => {
  const buttonDiv = document.querySelector('.add-more-field')
  const div = document.createElement('div')
  div.classList.add('education-input-field', 'row', 'mb-2')
  div.innerHTML = `
      <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
                            onkeydown = "console.log(this.value)"
                            placeholder="Degree name "
                          />
                       </div>
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Passing year"
                          />
                        </div>
                        <div class="col-md-2">
                          <input
                            type="button"
                            class="bg-white form-control delete-field"
                            value="X"
                          />
       </div>
`
  educationField.insertBefore(div, buttonDiv)
})

// delete extra education field
const form = document.querySelector('form')

form.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-field')) {
    const target = e.target.parentElement.parentElement
    educationField.removeChild(target)
  }
})
// form.addEventListener('click', (e) => {
//   if (e.target.classList.contains('degree-name')) {
//     let value = e.target.value
//     console.log(value)
//   }
// })
//form validation
let country = document.getElementById('country')
let countryName = document.getElementById('country_name')
country.addEventListener('change', () => {
  if (country.value == 2) {
    countryName.removeAttribute('disabled')
  }
  if (country.value == 1) {
    countryName.setAttribute('disabled', true)
  }
})
function validation() {
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let phone = document.getElementById('phone').value
  let genderMale = document.getElementById('inlineRadio1').checked
  let genderFemale = document.getElementById('inlineRadio2').checked
  let country = document.getElementById('country')
  let countryName = document.getElementById('country_name')

  if (name.length == 0) {
    document.getElementById('name_error').textContent =
      'Please input a valid name'
    return false
  }
  if (email.length == 0) {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailValidate = re.test(String(email).toLowerCase())
    if (emailValidate == false) {
      return false
    }
  }
  if (phone.length < 11) {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailValidate = re.test(String(email).toLowerCase())
    if (emailValidate == false) {
      document.getElementById('email_error').textContent =
        'Please input a valid email'
      return false
    }
  }
  if (phone.length < 11) {
    document.getElementById('phone_error').textContent =
      'Please input a valid phone number'

    return false
  }
  if (genderMale == false && genderFemale == false) {
    document.getElementById('gender_error').textContent = 'Please select gender'
    return false
  }
  if (country.value == null) {
    return false
  }
  if (country.value == 2) {
    if (countryName.length == 0) {
      return false
    }
  }
  if (country.value == '') {
    console.log(country.value)
    document.getElementById('country_error').textContent =
      'Please select your country'
    return false
  }
  if (country.value == 2) {
    if (countryName.length == 0) {
      document.getElementById('country_name_error').textContent =
        'Please write your country name'
      return false
    }
  } else {
    return true
  }
}

document.getElementById('submit_btn').addEventListener('click', (e) => {
  e.preventDefault()
  if (!validation()) {
    return false
  }
  console.log('validate successfull')
})
