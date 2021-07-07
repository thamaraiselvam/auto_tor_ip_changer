const { openBrowser, goto, dropDown, text, write, click, closeBrowser } = require('taiko');


    (async () => {
        var opt = [
            "US Server",
            "EU Server",
            "US1",
            "US2",
            "US3",
            "US4",
            "US5",
            "US6",
            "US7",
            "US8",
            "US9",
            "US10",
            "US11",
            "US12",
            "US13",
            "US14",
            "US15",
            "EU1",
            "EU2",
            "EU3",
            "EU4",
            "EU5",
            "EU6",
            "EU7",
            "EU8",
            "EU9",
            "EU10"
        ]
        await openBrowser();
        for (let i = 0; i < opt.length; i++) {
            try {
                await goto('https://www.proxysite.com/', {navigationTimeout:30000});
                await sleep(10000)
                await dropDown().select(opt[i]);
                await write('https://fotofox.live/mrs-india/?contest=photo-detail&photo_id=723',into( await textBox({placeholder:'Enter Url'})));
                await click('GO');
                await sleep(45000)
                let votes = await $('.pc-votes-count').text()
                console.log("current votes", votes)
                await click('VOTE FOR THIS PHOTO!');
                await sleep(15000)
            } catch (error) {
                console.error(error);
            }
        }
        await closeBrowser();
    })();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
