import React, { useState } from 'react';

const RadioInput = (props) => {
    const [response, setResponse] = useState('');
  const handleChange = (value) => {
    setResponse(value);
    console.log("User response:", value);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg shadow-blue-200/50">
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-4">
            <span className="font-bold">Are you ready to invest ₹5000 in AI-powered videos?</span>
            <span className="text-blue-500 ml-1">*</span>
          </label>
          
          <div className="mt-3 space-y-3">
            <div className="flex items-center">
              <input
                id="yes-option"
                name="investment-response"
                type="radio"
                className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                value="yes"
                checked={response === 'yes'}
                onChange={() => handleChange('yes')}
              />
              <label htmlFor="yes-option" className="ml-3 block text-gray-700">
                Yes
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                id="no-option"
                name="investment-response"
                type="radio"
                className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                value="no"
                checked={response === 'no'}
                onChange={() => handleChange('no')}
              />
              <label htmlFor="no-option" className="ml-3 block text-gray-700">
                No
              </label>
            </div>
          </div>
        </div>
        
        {response && (
          <div className="mt-2 p-3 bg-blue-50 rounded-md text-blue-800 text-sm">
            You selected: <span className="font-medium">{response}</span>
          </div>
        )}
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-md shadow-blue-300/50 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RadioInput;