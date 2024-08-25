function generateOTP() { 
    let digits = '0123456789'; 
    let OTP = ''; 
    let len = digits.length;
    for (let i = 0; i < 4; i++) { 
        OTP += digits[Math.floor(Math.random() * len)]; 
    } 
    return OTP; 
}

function displayOTP() {
    let otp = generateOTP();
    document.getElementById('otpDisplay').textContent = "Your OTP is: " + otp;
}
