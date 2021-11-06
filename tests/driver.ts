import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver'

export function getService() {
    const service = new chrome.ServiceBuilder(chromedriver.path).build();

    chrome.setDefaultService(service);

    return service;
}

export function getOptions() {
    const chromeOptions = new chrome.Options();

    chromeOptions.addArguments(/*"--disable-infobars",*/ "--window-size=1280,960", "--ignore-certificate-errors", "--disable-extensions", "--no-sandbox", "--disable-dev-shm-usage");

    if (process.env.mode === 'prod') {
        chromeOptions.addArguments("--headless", "--disable-gpu");
    }

    return chromeOptions
}

export function getDriver(opt?: chrome.Options) {
    const chromeOptions = opt ? opt : getOptions();

    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

    return driver
}
