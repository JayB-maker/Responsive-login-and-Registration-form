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
    registerForm= document.getElementById('register-form');


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

    registerBTN.addEventListener('click', () => {
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
            alert('password not thesame');
        }

        else {
            alert('Success');
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