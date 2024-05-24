// import { Given } from "@wdio/cucumber-framework";
// import * as chai from 'chai'
// Given(/^Google page is opened$/, async function(){
//    await browser.url('https://www.google.com');
//     await browser.pause(4000);
//     let URL=await browser.getUrl()
//     chai.expect(URL).to.equal('https://www.google.com')  
// });
// When(/^Search with <SearchItem>$/, async function(SearchItem){
//      let search = $('#input');
//     await search.setValue(SearchItem);

// })
import { Given, When, Then } from "@cucumber/cucumber";
import * as chai from 'chai'

Given(/^Google page is opened$/, async function () {
    await browser.url("https://www.google.com")
    await browser.pause(1000)
})

When(/^Search with (.*)$/, async function (searchItem) {
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the search result$/, async function () {
    let ele = await $(`<h3>`)
    ele.click()
})

Then(/Url should match (.*)$/, async function (ExpectedURL) {
    await browser.waitUntil(async function () {
        return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    }, {timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`})

    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)
})
