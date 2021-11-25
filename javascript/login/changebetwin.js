LoginScreen = document.getElementById("loginfield");
RegisterScreen = document.getElementById("registerfield");

var ActiveScreen

function ChangeBetweenScreens() {
    if (ActiveScreen == 1) {
        ActiveScreen == 2;

        RegisterScreen.style.setProperty('display', 'none');
        LoginScreen.style.setProperty('display', 'block');
    }

    if (ActiveScreen == 2) {
        ActiveScreen == 1;

        RegisterScreen.style.setProperty('display', 'block');
        LoginScreen.style.setProperty('display', 'none');
    }
}