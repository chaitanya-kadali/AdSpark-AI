import React, { useState } from "react";
import '../styles/ContactForm.css'

const ContactForm = () => {
  const scriptURL = "YOUR SCRIPT URL"; 

  /* Steps to Create the Google Apps Script Web App URL

      1. Open Google Sheets and create a new sheet.

      2. Rename the sheet to "Sheet1" (or update `sheetName` in the script) and name the column names you have like (your-name,your-number,your-email,message).

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

      11. Copy the generated URL and replace `scriptURL` in your React code.
*/
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("your-name", formData.name);
      form.append("your-number", formData.number);
      form.append("your-email", formData.email);
      form.append("message", formData.message);

      const response = await fetch(scriptURL, { method: "POST", body: form });

      if (response.ok) {
        alert("Thank you! Your form has been submitted.");
        setFormData({ name: "", number: "", email: "", message: "" });
        console.log(formData);
        
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
      
     
          <div className='log-d2'>
              
            <form id='log-form' onSubmit={handleSubmit} name="contact-form">

                <label className="log-l1">This is Login Page</label>

              <label className="log-l2">Enter the Email ID:</label>

                <input className="log-i1"  type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required /><br />

                <label className="log-l3">Enter the Name:</label>

                <input type="text" className="log-i2" 
                name="name" placeholder="Name"
                value={formData.name} onChange={handleChange}
                required/><br />

                <label className="log-l4">Enter the Product Name:</label>

                <input type="text" name="number"
                placeholder="Number" value={formData.number}
                onChange={handleChange} required className="log-i3" /><br />

                <textarea
                        name="message" rows="7" placeholder="Your Message"
                        value={formData.message} onChange={handleChange}
                    required ></textarea>
                
                    <button className="log-btn" type="submit" id="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
            
            </form>
          </div>

    </div>
  );
};

export default ContactForm;


