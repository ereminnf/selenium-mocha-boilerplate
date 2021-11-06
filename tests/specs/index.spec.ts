import webdriver from 'selenium-webdriver';
import { assert } from 'chai';
import { getDriver } from '../driver';

describe('Тестирование поиска яндекс', function () {
    this.timeout(15000)

    let driver: webdriver.ThenableWebDriver;

    before(async () => {
        driver = getDriver();
    });

    after(async () => {
        await driver.quit()
    });

    it('Поиск строки react', async function () {
        try {
            await driver.get('https://yandex.ru/');
            await driver.findElement(webdriver.By.css(".search2__input input")).sendKeys('react', webdriver.Key.ENTER);

            const title = await driver.findElement(webdriver.By.css(".entity-search__title")).getText();

            assert.equal('React', title)
        } catch (e) {
            throw e
        }
    });
});

export { }