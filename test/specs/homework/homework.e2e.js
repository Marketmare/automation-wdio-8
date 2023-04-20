describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        // sem vypracuj domácí úkol
        await browser.reloadSession('chrome');

        await browser.url('/registrace');
        
        await browser.saveScreenshot('signup_page.png');

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);
    });

});
