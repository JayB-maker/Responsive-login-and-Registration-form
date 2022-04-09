let loginBTN = document.getElementById('login')
    registerBTN = document.getElementById('register')
    emailField= document.getElementById('email')
    passwordField= document.getElementById('password')
    remailField= document.getElementById('remail')
    rpasswordField= document.getElementById('rpassword')
    confirmPassword= document.getElementById('confirmpassword')
    newMember= document.getElementById('newmember')
    oldMember= document.getElementById('oldmember')
    loginForm= document.getElementById('login-form')
    registerForm= document.getElementById('register-form')
    viewPassword= document.getElementById('eye')
    rviewPassword= document.getElementById('reye')
    rhidePassword= document.getElementById('reyelash')
    passwordAlert = document.querySelector('.status3');
    


    loginBTN.addEventListener('click', () => {
        if (emailField.value == '' && passwordField.value == '') {
            alert("email address and password is missing");
        }

        else if (emailField.value == '') {
            alert('Email address is Missing');
        }

        else if (passwordField.value == '') {
            alert('Password is Missing');
        }

        else{
            alert('success');
        }
    })

    registerBTN.addEventListener('click', (e) => {
        e.preventDefault();
        if (remailField.value == '' && rpasswordField.value == '' && confirmPassword.value == '') {
            alert('All Fields are Empty');
        }

        else if (remailField.value == '') {
            alert('Email address is Missing');
        }

        else if (rpasswordField.value == '') {
            alert('Password is Missing');
        }

        else if (confirmPassword.value == '') {
            alert('please confirm your password');
        }

        else if (confirmPassword.value !== rpasswordField.value) {
            //alert('error');
            passwordAlert.style = 'display:block;';
            //return true;
        }

        else {
            //alert('Success');
            passwordAlert.style = 'display:none;';
        }

        return true;
    })

    newMember.addEventListener('click', () => {
        loginForm.style='display:none';
        registerForm.style='display:block';
    })

    oldMember.addEventListener('click', () => {
        loginForm.style='display:block';
        registerForm.style='display:none';
    })

    viewPassword.addEventListener('click', () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            viewPassword.classList.replace('uil-eye', 'uil-eye-slash');
        }

        else{
            passwordField.type ='password';
            viewPassword.classList.replace('uil-eye-slash', 'uil-eye');
        }
    })

    rviewPassword.addEventListener('click', () => {
        if (rpasswordField.type === 'password' && confirmPassword.type === 'password') {
            rpasswordField.type = 'text';
            confirmPassword.type = 'text';
            rviewPassword.classList.replace('uil-eye', 'uil-eye-slash');
        }

        else{
            rpasswordField.type ='password';
            confirmPassword.type = 'password';
            rviewPassword.classList.replace('uil-eye-slash', 'uil-eye');
        }
    })

    
