const { By } = require('selenium-webdriver')

const showWatchedMessage = async (driver) =>{

    await driver.findElement(By.xpath('//input')).sendKeys('Call Me By Your Name')
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//button')).click()

    const crssdOffMovie = await driver.findElement(By.xpath('//li/span'))
    const msg = await driver.findElement(By.id('message'))
    await crssdOffMovie.click()

    expect(await msg.isDisplayed()).toBe(true)

    await driver.sleep(2000)
}

module.exports ={
    showWatchedMessage
    
}

