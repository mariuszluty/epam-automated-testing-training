describe("Test suite", () => {

    it("Page title", async () => {
        await browser.url("https://pastebin.com/");

        const pageTitle = await browser.getTitle();

        
        const agreeButton = await $('#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button.css-47sehv');
        agreeButton.click();
        const textArea = await $('#postform-text')
        await textArea.waitForDisplayed();
        await textArea.setValue('Hello from WebDriver');
        const expiriationComboBox =  await $('#select2-postform-expiration-container');
        expiriationComboBox.scrollIntoView({ block: 'center', inline: 'center' });
        await expiriationComboBox.click();
        const tenMinutesSelection  = await $('/html/body/span[2]/span/span[2]/ul/li[3]');
        tenMinutesSelection.scrollIntoView({ block: 'center', inline: 'center' });
        await tenMinutesSelection.click();
        const nameInput = await $('#postform-name');
        await nameInput.setValue('helloweb');
        const createNewPasteButton = await $('#w0 > div.post-form__bottom > div.post-form__left > div.form-group.form-btn-container > button');
        createNewPasteButton.scrollIntoView({ block: 'center', inline: 'center' });
        await createNewPasteButton.click();

        const note = await $('body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.page > div > div');
        expect(note).toHaveText("NOTE: Your guest paste has been posted. If you sign up for a free account, you can edit and delete your pastes!");
    })
});