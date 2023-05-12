describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

// domácí úkol (Lekce_01)
// npm run wdio -- --suite homework
       
        await browser.reloadSession();

        await browser.url('/registrace');

/* const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        const allCookies = await browser.getCookies();
        console.log(allCookies);

        await browser.saveScreenshot('signuPage_HO1.png');

        await browser.pause(500);
*/
    
// domácí úkol (Lekce_02) → najdi nejvhodnější selektory
        
        const nameField = $('#name');
        console.log('→ Name field HTML: ' + await nameField.getHTML());

        const emailField = $('#email');
        console.log('→ Email Field HTML: ' + await emailField.getHTML());

        const passwordField = $('#password');
        console.log('→ Password Field HTML: ' + await passwordField.getHTML());

        const passwordConfirmationField = $('#password-confirm');
        console.log('→ Password Confirmation Field HTML: ' + await passwordConfirmationField.getHTML());

        const submitButton = $('.btn-primary');
        console.log('→ Submit Button HTML: ' + await submitButton.getHTML());
        console.log('→ Submit Button Location: ' + await submitButton.getLocation());
        console.log('→ Submit Button Text: ' + await submitButton.getText());

// domácí úkol (Lekce_03) → najdi nejvhodnější selektory

        await nameField.setValue('Mrkef von Záhon');
        await emailField.setValue('carrot@cake.com');
        await passwordField.setValue('Heslo123');
        await passwordConfirmationField.setValue('Heslo12');
        await browser.pause(500);
        await passwordConfirmationField.clearValue('Heslo123');
        await submitButton.click();
        await browser.pause(5000);

    });

});






