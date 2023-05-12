import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {
    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');
        
        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

//      await browser.pause(1000);

//  https://team8-2022brno.herokuapp.com/prihlaseni
        
/*  LESSON_02 - exercise_1
        //1. tag → form element, input element, button element
        const formElementTag = $('form');
        console.log("→ Form Tag HTML: " + await formElementTag.getHTML());
        console.log("→ Form Tag Location: " + await formElementTag.getLocation());
        console.log("→ Text of Form Tag: " + await formElementTag.getText());

        const inputElementTag = $('input');
        console.log("→ Input Tag HTML: " + await inputElementTag.getHTML());
        
        const buttonElementTag = $('button');
        console.log("→ Button Tag HTML: " + await buttonElementTag.getHTML());
        
        //2. políčko email podle id (#)
        const emailField = $('#email');
        console.log("→ Email Field HTML: " + await emailField.getHTML());

        //políčko password podle id (#)
        const passwordField = $('#password');
        console.log("→ Password Field HTML: " + await passwordField.getHTML());

        //3. podle třídy (.) 
        const loginButton = $('.btn-primary');
        console.log("→ Login Button text: " + await loginButton.getText());
        console.log("→ Login Button HTML: " + await loginButton.getHTML());

        const logoCzechitas = $('.logo');
        console.log("→ Location of Home Page logo: " + await logoCzechitas.getLocation());
        
        const registrationButton = $('.btn-secondary');
        console.log("→ Registration Button HTML: " + await registrationButton.getHTML());
        console.log("→ Registration Button Text: " + await registrationButton.getText());
        
        //4. podle atributu
        const emailFieldAttribute = $('[name="email"]');
        console.log ("→ Email Field HTML: " + await emailFieldAttribute.getHTML());

        const passwordFieldAttribute = $('[type="password"]');
        console.log("→ Password Field HTML: " + await passwordFieldAttribute.getHTML());

        const passwordFieldAttribute2 = $('[type^="pass"]');
        console.log("→ Password Field HTML II: " + await passwordFieldAttribute2.getHTML());

        const passwordFieldAttribute3 = $('[type*="ass"]');
        console.log("→ Password Field HTML III: " + await passwordFieldAttribute3.getHTML());

        const passwordFieldAttribute4 = $('[type$="word"]');
        console.log("→ Password Field HTML IV: " + await passwordFieldAttribute4.getHTML());

        //5. KOMBINACE selektorů
        const TagAndIdSelector = $('input#email');
        console.log("→ Tag&Id Selector: " + await TagAndIdSelector.getHTML());

        const TagAndAttributeSelector = $('input[type="password"]');
        console.log('→ Tag&Attribute Selector: ' + await TagAndAttributeSelector.getHTML());

        const TagAndClassSelector = $('button.btn-primary');
        console.log('→ Tag&Class Selector: ' + await TagAndClassSelector.getHTML());

        //6. ŘETĚZENÍ selektorů
        const HTMLHierarchy = $('div').$('form').$('input[type$="word"]');
        console.log('→ HTML Hierarchy - Chaining: ' + await HTMLHierarchy.getHTML());

        //7. spešl WDIO selektory
        const findElementByText = $('=Zapomněli jste své heslo?');
        console.log('→ Selector By Text_HTML: ' + findElementByText.getHTML());
        console.log('→ Selector By Text_Text: ' + findElementByText.getText());

*/

//  LESSON_03 - exercise_1
        const emailField = $('#email');
        console.log('Location of Email Field: ' + await emailField.getLocation());
        console.log('Email Field is Displayed: ' + await emailField.isDisplayed());
        console.log('Email Field is Enabled: ' + await emailField.isEnabled());

        const passwordField = $('#password');
        console.log('Password Field HTML: ' + await passwordField.getHTML());
        console.log('Name Field is Displayed: ' + await passwordField.isDisplayed());
        console.log('Name Field is Enabled: ' + await passwordField.isEnabled());

        const loginButton = $('.btn-primary');
        console.log(await loginButton.getText());

        const PasswordLink = await $('.btn-link').getAttribute('href'); 
//  $('*=Zapomněli'); 
        console.log('Forgotten Password Link: ' + PasswordLink)

//  přihlášení
        await emailField.setValue('da-app.admin@czechitas.cz');
        await passwordField.setValue('Czechitas123');
        await loginButton.click();  
        await browser.pause(5000);
        const userName = await $('nav').$('strong');
        console.log(await userName.getText());
    
//  exercise_2 

        const applicationsLink = $('=Přihlášky');
        await applicationsLink.click(); 
        await browser.pause(2000);
    
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log('There are ' + rows.length + ' rows in the table');
        for (const row of rows) {
            const rowText = await row.getText()
            console.log(rowText);
        }
       //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       
// exercise_3

    });

});
