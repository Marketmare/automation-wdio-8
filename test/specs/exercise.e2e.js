import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

/*describe('Czechitas Login Page', async () => {
    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');
        
        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

//      await browser.pause(1000);

//  https://team8-2022brno.herokuapp.com/prihlaseni
        
//  LESSON_02 - exercise_1
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
       // const emailField = $('#email');
      //  console.log("→ Email Field HTML: " + await emailField.getHTML());

        //políčko password podle id (#)
      //  const passwordField = $('#password');
      //  console.log("→ Password Field HTML: " + await passwordField.getHTML());

        //3. podle třídy (.) 
      //  const loginButton = $('.btn-primary');
      //  console.log("→ Login Button text: " + await loginButton.getText());
      //  console.log("→ Login Button HTML: " + await loginButton.getHTML());

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

*/

// LESSON04-exercise_1

//da-app.admin@czechitas.cz
//Czechitas123
describe('Czechitas Login Page', async () => {

        beforeEach('should open login page', async () => {
                await browser.reloadSession();
                await browser.url('/prihlaseni');
        })
        it('should not log in - no credentials', async () => {
                const emailField = $('#email');
                const passwordField = $('#password');
                const loginButton = $('.btn-primary'); 
                await loginButton.click();
                console.log('Email Field is Displayed: ' + await emailField.isDisplayed());
                console.log('Email Field is Enabled: ' + await emailField.isEnabled());
                console.log('Password Filed is Displayed: ' + await passwordField.isDisplayed());
                console.log('Password Field is Enabled: ' + await passwordField.isEnabled());
                
        })
        it('should not log in - invalid credentials', async () => {
                const emailField = $('#email');
                const passwordField = $('#password');
                const loginButton = $('.btn-primary');
                const toastMessage = $('#toast-container'); 
                await emailField.clearValue();
                await passwordField.clearValue();
                await emailField.setValue('da-app.admin@czechitas.cz');
                await passwordField.setValue('NESPRÁVNÉ-HESLO');
                await loginButton.click();
                console.log('Email Field is Displayed: ' + await emailField.isDisplayed());
                console.log('Email Field is Enabled: ' + await emailField.isEnabled());
                console.log('Password Filed is Displayed: ' + await passwordField.isDisplayed());
                console.log('Password Field is Enabled: ' + await passwordField.isEnabled());
                console.log('Toast Message is Displayed: ' + await toastMessage.isDisplayed());
                console.log('Text of Toast Message: ' + await toastMessage.getText());
        })
        it('should log in - valid credentials', async () => {
                const emailField = $('#email');
                const passwordField = $('#password');
                const loginButton = $('.btn-primary');
                await emailField.setValue('da-app.admin@czechitas.cz');
                await passwordField.setValue('Czechitas123');
                await loginButton.click();})
                // console.log('User Name is Displayed: ' + await userName.isDisplayed());
                // console.log('User Name: ' + await userName.getText());
        
        it('should log out', async () => {
                const emailField = $('#email');
                const passwordField = $('#password');
                const loginButton = $('.btn-primary');
                await emailField.setValue('da-app.admin@czechitas.cz');
                await passwordField.setValue('Czechitas123');
                await loginButton.click();})
                
                const userName = $('.dropdown-toggle');
                const logoutLink = $('#logout-link');
                const memberButton = $('=Přihlásit');
                const header = $('h1');
                await userName.click();
                await logoutLink.click();
                console.log('Logout verification: '+ await memberButton.isDisplayed());
                console.log('Text: ' + await memberbutton.getText()); 
                console.log(await header.getText());
        })


describe.only('Applications page', async () => {
        
        before('should log in', async () => {
                await browser.reloadSession();
                await browser.url('/prihlaseni');
       
                const emailField = $('#email');
                const passwordField = $('#password');
                const loginButton = $('.btn-primary');
                
                await emailField.setValue('da-app.admin@czechitas.cz');
                await passwordField.setValue('Czechitas123');
                await loginButton.click();
        })
        it('should open applications', async () => {
                const applicationsLink = $('=Přihlášky');
                await applicationsLink.click();
        })
        it('should display all table rows', async () => {
                const rows = await $('.dataTable').$('tbody').$$('tr');
                const tableInfo =$('#DataTables_Table_0_info');
                console.log('There are ' + rows.length + ' rows in the table');
                for (const row of rows) {
                        const rowText = await row.getText();
                        console.log(rowText);
                }
                console.log('Displayed: ' + await tableInfo.getText());
        })
        it('should search in table', async () => {
                const searchInput = $('input[type="search"]');
                const tableInfo =$('#DataTables_Table_0_info');
                await searchInput.setValue("mik"); 
                console.log('Displayed: ' + await tableInfo.getText());
        })
        
})