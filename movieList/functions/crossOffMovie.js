const { By } = require('selenium-webdriver')

const crossOffMovie = async (driver) =>{

    await driver.findElement(By.xpath('//input')).sendKeys('Batman')
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//button')).click()

    const crssdOffMovie = await driver.findElement(By.xpath('//li/span'))
    await crssdOffMovie.click()
    await driver.sleep(2000)

    let classAttribute = await crssdOffMovie.getAttribute('class')
    
    expect(classAttribute.includes('checked')).toBe(true)

}

module.exports ={
    crossOffMovie

}

