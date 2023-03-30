describe('Click interactions', () => {

    it.only('click button', async()=>{
        await browser.url('http://uitestingplayground.com/click');
        //resolved, pending, rejected
        //console.log(await browser.getTitle());
        const button = $('#badButton');
        await button.click();
        await expect(button).toHaveElementClassContaining('btn btn-success')
    });
});
