


const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



//________________________________________________________ Home

router.get('/', (req, res) => {
  res.render('main');
});



//________________________________________________________ Send email

router.post('/email', (req, res) => {
  
  // DODAĆ SPRAWDZANIE CZY WSZYSTKIE POLA FORMULARZA WYPEŁNIONE!
  // UMIEŚCIĆ WSZYSTKIE FUNKCJONALNOŚCI W FUNKCJACH

  const msg = {
    to: 'b.pyzocha@gmail.com',
    from: 'gabriela@josypow.com',
    subject: req.body.subject,
    html: `
      <h2 style="margin: 0; padding: 10px; font-size: 1rem; color: #0F0F0F;">email od: ${req.body.email}</h2>
      <h3 style="margin: 0; padding: 10px; font-size: 1rem; color: #0F0F0F;"><span style="font-weight: normal;">temat</span>: ${req.body.subject}</h3>
      <p style="margin: 10px; padding: 20px 0; font-size: 1rem; color: #0F0F0F; border-top: 1px solid #BBB;">${req.body.message}</p>
      <p style="margin-top: 100px; padding: 10px; font-size: 0.8rem;">To jest wiadomość <strong>no-reply</strong>.
    `
  };
  sgMail.send(msg);
  
  res.send({
    type: 'success',
    message: 'Wiadomość wysłana pomyślnie'
  });
});



//________________________________________________________ Export router



module.exports = router;