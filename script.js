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
    passwordAlert = document.querySelector('.status3')
    successAlert = document.querySelector('.success')
    span1 = document.querySelector('.span1')
    span2 = document.querySelector('.span2')
    span3 = document.querySelector('.span3')
    span4 = document.querySelector('.span4')
    pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    


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
            remailField.style = 'border:1px solid green;';
            rpasswordField.style = 'border:1px solid green;';
            confirmPassword.style = 'border:1px solid green;';
            successAlert.style = 'display:block;';
        }

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

    emailField.addEventListener('keydown', () => {
        if (emailField.value === '') {
            remailField.classList.remove('valid');
            remailField.classList.remove('invalid');
            span1.style = 'display: none';
            span2.style = 'display: none';
        }

        else if ((emailField.value).match(pattern)) {
            emailField.classList.add('valid');
            emailField.classList.remove('invalid');
            span1.style = 'display: none';
            span2.style = 'display: block';
        }

        else {
            emailField.classList.remove('valid');
            emailField.classList.add('invalid');
            span1.style = 'display: block';
            span2.style = 'display: none';
        }
    })

    remailField.addEventListener('keydown', () => {
        if (remailField.value === '') {
            remailField.classList.remove('valid');
            remailField.classList.remove('invalid');
            span3.style = 'display: none';
            span4.style = 'display: none';
        }

        else if ((remailField.value).match(pattern)) {
            remailField.classList.add('valid');
            remailField.classList.remove('invalid');
            span3.style = 'display: none';
            span4.style = 'display: block';
        }

        else {
            remailField.classList.remove('valid');
            remailField.classList.add('invalid');
            span3.style = 'display: block';
            span4.style = 'display: none';
        }
    })

    
