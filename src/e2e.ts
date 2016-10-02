import { browser, element, by, ElementFinder } from 'protractor';

describe('Circle Challenge', () => {
    beforeEach(() => {
        browser.driver.get(browser.baseUrl + '/dist/index.html');

        return browser.ignoreSynchronization = true;
    });

    it('should add circles when clicking the canvas', () => {
        let updatableSpan: ElementFinder = element(by.id('updatableSpan'));
        let renderCanvas: ElementFinder = element(by.id('renderCanvas'));

        let circleCount: number = 400;
        for (let i: number = 0; i < circleCount; i++) {
            renderCanvas.click();
        }

        expect(updatableSpan.getText()).toBe('#Circles: ' + circleCount.toString());
    });
});
