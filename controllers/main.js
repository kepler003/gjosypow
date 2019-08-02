


const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const validator = require('validator');



//________________________________________________________ Home

router.get('/', (req, res) => {
  res.render('main');
});



//________________________________________________________ Send email

router.post('/email', async (req, res) => {
  
  let canAct = true;
  



  // Check if all form fields provided
  let message = '';
  let checkIfAllFormFields = () => {

    if(canAct){

      if(!validator.isEmail(req.body.email)){
        canAct = false;
        message += 'Niepoprawny adres email.';
      };

      if(validator.isEmpty(req.body.subject)){
        canAct = false;
        message += ' Niepoprawny temat wiadomości.';
      };

      if(validator.isEmpty(req.body.message)){
        canAct = false;
        message += ' Niepoprawny tekst wiadomości';
      };
    };
  };

  let act = () => {

    if(!canAct){
      
      res.send({
        type: 'error',
        message: message
      });
    
    } else if(canAct){

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
    };
  };
  
  


  await checkIfAllFormFields();
  await act();
});



//________________________________________________________ Export router

module.exports = router;