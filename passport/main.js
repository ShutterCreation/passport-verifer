
function verifyPassport() {
    const passport = document.getElementById('passportInput').value;
    const result = document.getElementById('result');
    const today = new Date().toISOString().split('T')[0];

    if (passport.length < 10) {
        result.innerHTML = `<b class="output" >INVALID</b>`;
        return;
    }

   
    const nationality = passport.substring(0, 3);
    const validNationalities = ['USA', 'IND', 'GBR', 'CAN'];
    if (!validNationalities.includes(nationality)) {
        result.innerHTML = `<b class="output" >INVALID</b>`;
        return;
    }

 
    const passportNumber = passport.substring(3, 12);
    if (!/^\d{9}$/.test(passportNumber)) {
        result.innerHTML = `<b class="output" >INVALID</b>`;
        return;
    }

    
    const expirationDate = passport.match(/\d{4}-\d{2}-\d{2}/);
    if (!expirationDate || expirationDate[0] < today) {
        result.innerHTML = `<b class="output" >INVALID</b>`;
        return;
    }

  
    if (!/[!@#$%^&*()_+\-=\~]/.test(passport)) {
        result.innerHTML = `<b class="output" >INVALID</b>`;
        return;
    }

  
    if (/\s/.test(passport)) {
        result.innerHTML = `<b class="output" >INVALID</b>`;
        return;
    }
    result.innerHTML = `<b class="result">VALID</b>`;
}