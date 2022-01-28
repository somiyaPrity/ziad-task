// add more education feild

const addFeild = document.querySelector('.add-button')

addFeild.addEventListener('click', () => {
  const educationFeild = document.querySelector('.edcation-feild')
  const buttonDiv = document.querySelector('.add-more-feild')
  const div = document.createElement('div')
  div.classList.add('education-input-feild', 'row', 'mb-2')
  div.innerHTML = `
      <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
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
                            class="bg-white form-control delete-feild"
                            value="X"
                          />
       </div>
`
  educationFeild.insertBefore(div, buttonDiv)
})

// delete extra education feild
const form = document.querySelector('form')

form.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-feild')) {
    e.target.parentElement.parentElement.style.display = 'none'
  }
})
