async function openRegistrationPage() {
        await browser.reloadSession();
        await browser.url('/registrace');
    }
    function getNameField() {
        return $('#name');
    }
    function getEmailField() {
        return $('#email');
    }
    function getPasswordField() {
        return $('#password');
    }
    function getPasswordConfirmField() {
        return $('#password-confirm');
    }
    function getSignInBtn() {
        return $('.btn-primary');
    }
    function getUserName() {
        return $('.navbar-right').$('.nav-item.dropdown').$('a').$('strong');
    }
    function getHeading() {
        return $('h1');
    }
    function getInvalidFeedbackPassword() {
        return $('/html/body/div/div/div/div/div/div[2]/form/div[3]/div/span/strong')
    } 
    function getInvalidFeedbackEmail() {
        return $('/html/body/div/div/div/div/div/div[2]/form/div[2]/div/span/strong')
    }
    function getToastMessage() {
        return $('.toast-message');
    }
    describe('Homework', async () => {
        beforeEach('should open login page', async () => {
                await browser.reloadSession();
                await browser.url('/registrace');
                
})
        it('should open page + create screenshot', async () => {
        await expect(getNameField()).toBeEnabled();
        await expect(getEmailField()).toBeEnabled();
        await expect(getPasswordField()).toBeEnabled();
        await expect(getPasswordConfirmField()).toBeEnabled();
        await expect(getSignInBtn()).toBeDisplayed();
        await expect(getSignInBtn()).toBeClickable();
        await expect(getSignInBtn()).toHaveText('Zaregistrovat');
        // await browser.saveScreenshot('should-open-page.png'); → tohle řeší soubor wdio.hooks.conf.js, který se spouští npx wdio run wdio.hooks.conf.js
})

        it('should sign in - valid credentials + create screenshot', async () => { 
        await getNameField().setValue('Mrkef von Záhon');
        await getEmailField().setValue('carrot65@cake.com');
        await getPasswordField().setValue('Heslo123');
        await getPasswordConfirmField().setValue('Heslo12');
        await getPasswordConfirmField().clearValue();
        await getPasswordConfirmField().setValue('Heslo123');
        await getSignInBtn().click();
        await expect(getUserName()).toHaveText('Mrkef von Záhon');
        await expect(getUserName()).toHaveText(/[a-zA-Z a-zA-Z a-zA-Z]/);
        await expect(getHeading()).toHaveText('Přihlášky');
        // await browser.saveScreenshot('should-sign-in.png');
})
        it('should not sign in - already existing user + create screenshot', async () => {
        await getNameField().setValue('Mrkef von Záhon');
        await getEmailField().setValue('carrot00@cake.com');
        await getPasswordField().setValue('Heslo123');
        await getPasswordConfirmField().setValue('Heslo123');
        await getSignInBtn().click();
        await expect(getHeading()).toHaveText('Registrace');
        await expect(getInvalidFeedbackEmail()).toBeDisplayed();
        await expect(getInvalidFeedbackEmail()).toHaveText('Účet s tímto emailem již existuje');
        await expect(getToastMessage()).toBeDisplayed();
        await expect(getToastMessage()).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');
        // await browser.saveScreenshot('should-NOT-sign-in_1.png');
})
        it('should not sign in - invalid credentials + create screenshot', async () => {
        await getNameField().setValue('Ahoj Čau');
        await getEmailField().setValue('naskle1@mail.com');
        await getPasswordField().setValue('123456');
        await getPasswordConfirmField().setValue('123456');
        await getSignInBtn().click();
        await expect(getInvalidFeedbackPassword()).toBeDisplayed();
        await expect(getInvalidFeedbackPassword()).toHaveText('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
        await expect(getToastMessage()).toBeDisplayed();
        await expect(getToastMessage()).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');
        // await browser.saveScreenshot('should-NOT-sign-in_2.png');
})
          
    });

// npm run wdio -- --suite homework





