/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_qtf15fe','template_y1zjaxq','#contact-form','GafzmVXQhZZcUZ_Ut')
      .then(() =>{
         // Show sent message
         contactMessage.textContent = 'Message sent ✅ You will recieve an email within the next 24hrs.'

         // Remove message after five seconds
         setTimeout(() =>{
            contactMessage.textContent = ''
         }, 5000)

         // Clear input fields
         contactForm.reset()

      }, () =>{
         // Show error message
         contactMessage.textContent = 'Message not sent (service error) ❌'
      })
}

contactForm.addEventListener('submit', sendEmail)
