
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwHVzD--ifYWlus564nikkrzapzfFw4f3y1A7J0Hd3qFBzifzz5jB3GdhqvYm4mAOzL/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            msg.innerHTML= ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
