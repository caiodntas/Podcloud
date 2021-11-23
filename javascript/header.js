/* ID DECLARATION */

const HomeButton = document.getElementById("HomeButton");
const HomeDescription = document.getElementById("HomeDescription");
const SearchButton = document.getElementById("SearchButton");
const SearchDescription = document.getElementById("SearchDescription");
const SubscriptionButton = document.getElementById("SubscriptionButton");
const SubscribeDescription = document.getElementById("SubscribeDescription");
const ProfileButton = document.getElementById("ProfileButton");
const ProfileDescription = document.getElementById("ProfileDescription");
const SettingsButton = document.getElementById("SettingsButton");
const SettingsDescription = document.getElementById("SettingsDescription");
const ExitButton = document.getElementById("ExitButton");
const ExitDescription = document.getElementById("ExitDescription");

/* FUNCTIONS EXEC */
    /* Home Button */
    HomeButton.onmouseover = ShowHomeButtonDescription;
    HomeButton.onmouseout = HideHomeButtonDescription;
    /* Search Button */
    SearchButton.onmouseover = ShowSearchButtonDescription;
    SearchButton.onmouseout = HideSearchButtonDescription;
    /* Subscription Button */
    SubscriptionButton.onmouseover = ShowSubscriptionButtonDescription;
    SubscriptionButton.onmouseout = HideSubscriptionButtonDescription;
    /* Profile Button */
    ProfileButton.onmouseover = ShowProfileButtonDescription;
    ProfileButton.onmouseout = HideProfileButtonDescription;
    /* Settings Button */
    SettingsButton.onmouseover = ShowSettingsButtonDescription;
    SettingsButton.onmouseout = HideSettingsButtonDescription;
    /* Exit Button */
    ExitButton.onmouseover = ShowExitButtonDescription;
    ExitButton.onmouseout = HideExitButtonDescription;

/* FUNCTIONS */

    /* HOME BUTTON FUNCTIONS */
    function ShowHomeButtonDescription(){
        HomeDescription.style.visibility = "visible"
    }
    function HideHomeButtonDescription(){
        HomeDescription.style.visibility = "hidden"
    }

    /* SEARCH BUTTON DESCRIPTION */
    function ShowSearchButtonDescription(){
        SearchDescription.style.visibility = "visible"
    }
    function HideSearchButtonDescription(){
        SearchDescription.style.visibility = "hidden"
    }

    /* SUBSCRIBE BUTTON DESCRIPTION */
    function ShowSubscriptionButtonDescription(){
        SubscriptionDescription.style.visibility = "visible"
    }
    function HideSubscriptionButtonDescription(){
        SubscriptionDescription.style.visibility = "hidden"
    }

    /* PROFILE BUTTON DESCRIPTION */
    function ShowProfileButtonDescription(){
        ProfileDescription.style.visibility = "visible"
    }
    function HideProfileButtonDescription(){
        ProfileDescription.style.visibility = "hidden"
    }
    
    /* SETTINGS BUTTON DESCRIPTION */
    function ShowSettingsButtonDescription(){
        SettingsDescription.style.visibility = "visible"
    }
    function HideSettingsButtonDescription(){
        SettingsDescription.style.visibility = "hidden"
    }

    /* EXIT BUTTON DESCRIPTION */
    function ShowExitButtonDescription(){
        ExitDescription.style.visibility = "visible"
    }
    function HideExitButtonDescription(){
        ExitDescription.style.visibility = "hidden"
    }
    