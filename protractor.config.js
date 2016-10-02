exports.config = {
    baseUrl: 'file://' + __dirname,
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    specs: ['./dist/e2e.*.*.js'],

    capabilities: {
        'browserName': 'chrome'
    }
};
