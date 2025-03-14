import React, { useState } from "react";
import RadioInput from "./RadioInput";
import '../styles/ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const scriptURL = "https://script.google.com/macros/s/AKfycbzk7ugk0VKBuGIPgKFmjeuZuGXnK0Y-ia7b0QOz2YRzmhKUm7VBytpllW5_Ai8XWU0/exec"; 

  
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    business_name: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [radio, setRadio] = useState('not-selected');


  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const sendEmail = async() =>{
                        //ServiceID -      templateID -        #form      -publickey
    emailjs.send('service_5y7fh3j', 'template_781ltup', formData , 'QuWQRzl3zKUtd6h8E')
    .then(() =>{
        console.log('Mesg Sent successfully ✔✔',formData);
    }, () =>{
        //Show error message
         console.log('Mesg not sent (service error) ❌');
    })
}


const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("Name", formData.name);
      form.append("Contact-Number", String(formData.number));
      form.append("Business-Name", formData.business_name);
      form.append("invest", radio);
      await sendEmail();

      const response = await fetch(scriptURL, { method: "POST", body: form });

      if (response.ok) {
        alert("Thank you! Your form has been submitted.");
        setFormData({ name: "", number: "", business_name: ""});
        console.log(form);
        
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contf-container">
      
        <div className='form-body'>
              
            <form id='log-form' onSubmit={handleSubmit} name="contact-form">

                <label className="log-l1">Fill in the details below and let’s get started:</label>

             

                <label className="log-labl">Enter the Name:</label>

                <input type="text" className="log-inp" 
                name="name" placeholder="Name"  
                value={formData.name} onChange={handleChange}
                required/><br />

                <label className="log-labl">Enter the Contact Number:</label>

                <input type="number" name="number" 
                    style={{
                      appearance: "textfield",
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                      fontSize: "16px",

                      width: "100%",
                      padding: "12px",
                      margin: "10px 0",
                      border: "1px solid #444",
                      borderRadius: "10px",
                      background: "#222",
                      color: "white",
                      outline: "none",
                      transition: "0.3s",
                    }}
                 placeholder="Ph. Number" value={formData.number}
                onChange={handleChange} required  /><br />

                 <label className="log-labl">Enter Business Name:</label>

                <input className="log-inp"  type="text"
                name="business_name" placeholder="Business Name"value={formData.business_name}
                onChange={handleChange} required /><br />

              <label className="log-labl"> Are you ready to invest ₹5000 in AI-powered videos?
                 <span className="text-blue-500 ml-1">*</span> </label> 

                <RadioInput  radio={radio} setRadio={setRadio} />
                
                    <button className="log-btn" type="submit" id="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
            </form>
        </div>

    </div>
  );
};

export default ContactForm;





/* Steps to Create the Google Apps Script Web App URL

      1. Open Google Sheets and create a new sheet.  --D

      2. Rename the sheet to "Sheet1" (or update `sheetName` in the script) and name the column names you have like (your-name,your-number,your-business_name,invest).

      3. Open Extensions → Apps Script in the menu.

      4. Delete any existing code and paste the provided script.

              const sheetName = 'Sheet1'
              const scriptProp = PropertiesService.getScriptProperties()

              function intialSetup () {
                const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
                scriptProp.setProperty('key', activeSpreadsheet.getId())
              }

              function doPost (e) {
                const lock = LockService.getScriptLock()
                lock.tryLock(10000)

                try {
                  const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
                  const sheet = doc.getSheetByName(sheetName)

                  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
                  const nextRow = sheet.getLastRow() + 1

                  const newRow = headers.map(function(header) {
                    return header === 'Date' ? new Date() : e.parameter[header]
                  })

                  sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

                  return ContentService
                    .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
                    .setMimeType(ContentService.MimeType.JSON)
                }

                catch (e) {
                  return ContentService
                    .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
                    .setMimeType(ContentService.MimeType.JSON)
                }

                finally {
                  lock.releaseLock()
                }
              }


      5. Click the Save icon or (CTRL + S).

      6. Click Deploy → New Deployment.

      7. Select "Web app" as the deployment type.

      8. Under "Execute as", select "Me".

      9. Under "Who has access", select "Anyone".

      10. Click Deploy and authorize if prompted.
      
      11. click `RUN` at the spreadsheet extensions manager once **********************************************

      12. Copy the generated URL and replace `scriptURL` in your React code.
      
      note :- this is gonna be effected in the sheet as name       form.append("your-number", formData.number);


      */