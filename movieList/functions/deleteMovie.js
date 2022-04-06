const { By } = require('selenium-webdriver')

const deleteMovie = async (driver) =>{

    const movie = 'Back to the Future' 

    await driver.findElement(By.xpath('//input')).sendKeys(movie)
    // await driver.sleep(2000)
    await driver.findElement(By.xpath('//button')).click()
    // await driver.sleep(2000)
    const removesItem = await driver.findElement(By.id("BacktotheFuture")).click()
    // await driver.sleep(2000)

    await driver.sleep(2000)
    expect(removesItem).toBeFalsy()
}

module.exports ={
    deleteMovie
}