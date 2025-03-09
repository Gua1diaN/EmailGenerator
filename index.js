document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get('email', function (result) {
        if (result.email) {
        document.getElementById("emailInput").value = result.email;
        }
    });
});

document.getElementById("copyButton").addEventListener("click", function () {
    const emailInput = document.getElementById("emailInput").value;
  
    if (validateEmail(emailInput)) {
      const alias = getEmailAlias(emailInput);
      copyToClipboard(alias);
      chrome.storage.local.set({ email: emailInput });
    } else {
      alert("Please enter a valid email address.");
    }
  });
  

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const getEmailAlias = (email) => {
    const timeStamp = new Date().toISOString().replace(/[:T-]/g, "").slice(0, 12);
    const aliasEmail = email.replace(/@/, `+${timeStamp}@`);
    return aliasEmail;
}

// Function to copy text to clipboard
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
        alert(`Copied alias: ${text}`);
        })
        .catch(err => {
        console.error("Failed to copy text:", err);
        });
}
  