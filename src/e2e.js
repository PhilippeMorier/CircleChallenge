describe('Circle Challenge', function () {
    beforeEach(function () {
        browser.driver.get('file://' + __dirname + '/../dist/index.html');

        return browser.ignoreSynchronization = true;
    });

    it('should add circles when clicking the canvas', function () {
        var updatableSpan = element(by.id('updatableSpan'));
        var renderCanvas = element(by.id('renderCanvas'));

        var circleCount = 500;
        for (var i = 0; i < circleCount; i++) {
            renderCanvas.click();
        }

        expect(updatableSpan.getText()).toBe(circleCount.toString());
    });
});
