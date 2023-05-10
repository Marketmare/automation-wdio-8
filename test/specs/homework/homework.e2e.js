describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        // sem vypracuj domácí úkol (Lekce_01)
        await browser.reloadSession('chrome');

        await browser.url('/registrace');
        
        await browser.saveScreenshot('signup_page.png');

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);
    
/* 
(Lekce_02)

Najdi nejvhodnější:
1. Políčko pro jméno a příjmení id="name"
2. Políčko pro email id="email"
3. Políčko pro zadání hesla id="password"
4. Políčko pro kontrolu zadaného hesla id="password-confirm"
5. Tlačítko na registraci class="btn btn-primary"

Dobrovolné:
Tvým úkolem je si zatím jen selektory najít a otestovat v Developer Tools. 
Pokud se na to cítíš, můžeš zkusit zapsat najít elementy a zapsat je do homework.e2e.js 
podobně jako jsme to dělali ve cvičení.

*/
    
        const nameField = await $('#name');
        console.log(await nameField.getHTML ()) ;

        var nameField2 = await $('#name');
        console.log(await nameField2.getHTML ()) ;
        console.log(await nameField2.getLocation ()) ;

        const emailField = await $('#email');
        console.log(await emailField.getHTML());

        const passwordField = await $('#password');
        console.log(await passwordField.getHTML());

        const passConfField = await $('#password-confirm');
        console.log (await passwordField.getHTML());

        const regButton = await $('.btn-primary');
        console.log (await regButton.getText ());
    
    });

});






