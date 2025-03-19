import { useEffect } from "react";

function MetaScript() {
  useEffect(() => {
    const noscriptTag = document.createElement("noscript");
    noscriptTag.innerHTML = `
    
    <img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=604992212362592&ev=PageView&noscript=1"
/>

    `;
    document.head.appendChild(noscriptTag); // Add <noscript> inside <head>
  }, []);

  return null; // This component doesn't render anything in the UI
}

export default MetaScript;
