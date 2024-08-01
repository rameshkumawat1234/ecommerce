import React from 'react'

const Contact = () => {
  return (
    // <div>
      <div class="mt-5 contactform"><br/><br/><br/>
        <h1 class="text-center bold m-28 mb-3">Contact Us</h1><br/><br/>
        <form class=" container m-20">
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>

          </div>
          <div class="row py-3">
            <div class="col">
              <input type="email" class="form-control" placeholder="Email" />
            </div>
          </div>
          <div class="row ">

            <div class="col">
              <input type="number" class="form-control" placeholder="Contact" />
            </div>
          </div>
          <div class="row py-3">
            <div class="col">
              <textarea name="address" placeholder="Address"
                class="form-control" cols="100" rows="2" id=""></textarea></div></div><br/>
          <div class="row mx-auto text-center">
            <div class="col mx-auto">
              <button class="btn btn-success w-50">Submit</button>
            </div><br/><br/><br/><br/><br/>
          </div>

        </form>
      </div>
    // </div>
  )
}

export default Contact

