import { Given, When, Then } from "@cucumber/cucumber";
import * as chai from 'chai'
import logger from "../helper/logger.ts";

Given(/^Google page is opened$/, async function () {
    logger.info(`Starting`)
    await browser.url("https://www.google.com")
    await browser.pause(1000)
})

When(/^Search with (.*)$/, async function (searchItem) {
    logger.info(`searching for: ${this.SearchItem}`)
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
    console.log(url)
    chai.expect(url).to.equal(ExpectedURL)
            await $(".featureTitle_r_DH").scrollIntoView()
            await browser.pause(3000)
})
            // await $("#mousehover").moveTo()
            // await browser.pause(3000)
            // await $("=Top").click()
Then(/^Go to new url$/, async function () {

    await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
    await $(".scroll").scrollIntoView()
    await browser.pause(3000)
    // await $("#mousehover").moveTo()
    // await browser.pause(3000)
    // await $("=Top").click()
    // await $("button").doubleClick()
    // browser.pause(6000)
    await browser.saveScreenshot("screenshot.png")
    //chai.expect(await browser.isAlertOpen()).to.be.true
    // chai.expect(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
    // await browser.acceptAlert()
    // await browser.pause(3000)
})
        

