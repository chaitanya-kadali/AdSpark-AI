import React, { useState } from 'react';

const RadioInput = (props) => {
    const [response, setResponse] = useState('');
  const handleChange = (value) => {
    setResponse(value);
    console.log("User response:", value);
  };

  return (
    <div style={{alignContent:"left"}}>
    <div className="max-w-md mx-auto p-6 bg-gray rounded-lg ">
          <label className="block text-lg font-medium text-white-700 mb-4">
            {/* <span className="font-bold"></span>
             */}
          </label>
          
          <div className="mt-3 space-y-3">
            <div className="flex items-center">
              <input
                id="yes-option"
                name="investment-response"
                type="radio"
                className="h-5 w-5 text-blue-600 border-white-300 focus:ring-blue-500"
                value="yes"
                checked={response === 'yes'}
                onChange={() => handleChange('yes')}
              />
              <label htmlFor="yes-option" className="ml-3 block text-white-700">
                Yes
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="no-option"
                name="investment-response"
                type="radio"
                className="h-5 w-5 text-blue-600 border-white-300 focus:ring-blue-500"
                value="no"
                checked={response === 'no'}
                onChange={() => handleChange('no')}
              />
              <label htmlFor="no-option" className="ml-3 block text-white-700">
                No
              </label>
            </div>
          </div>
        
        </div>
    </div>
  );
};

export default RadioInput;