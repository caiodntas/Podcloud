const LoginField = document.getElementById("loginfield");
const RegisterField = document.getElementById("registerfield");
const ChangeButton = document.getElementById("changebutton");

/* 1 = LOGIN SCREEN; 2 = REGISTER SCREEN */
var ActiveField = 1;

ChangeButton.onclick = ChangeBetweenScreens;

function ChangeBetweenScreens() {
    if (ActiveField == 1) {
        ActiveField = 2;

        RegisterField.style.setProperty('display', 'block');
        LoginField.style.setProperty('display', 'none');
        ChangeButton.innerHTML = "Já tem uma conta?"
    }

    else {
        ActiveField = 1;

        RegisterField.style.setProperty('display', 'none');
        LoginField.style.setProperty('display', 'block');
        ChangeButton.innerHTML = "Criar nova conta"
    }
}