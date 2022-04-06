const {Builder, Capabilities} = require('selenium-webdriver')
const { By } = require('selenium-webdriver')
const { deleteMovie } = require('../functions/deleteMovie')
const { crossOffMovie } = require('../functions/crossOffMovie')
const { showWatchedMessage } = require('../functions/mooVwatchedMsg')
require('chromedriver')
let driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test('Delete Movie Test', async () => {
    await deleteMovie(driver)
})

test('Cross Off Test', async () => {
    await crossOffMovie(driver)
    await driver.sleep(2000)
})

test('Movie Watched Msg Test', async () =>{
    await showWatchedMessage(driver)
    
})