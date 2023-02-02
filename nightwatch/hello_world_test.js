module.exports = {
    test: client => {
        client
            .url('https://duckduckgo.com/')
            .waitForElementVisible('#logo_homepage_link', 10 * 1000)
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'hello world')
            .assert.visible('input[type=submit]')
            .click('input[type=submit')
            .waitForElementVisible('.results--main')
            .assert.visible('#r1-0')
            .assert.visible('#r1-0 .ikg2IXiCD14iVX7AdZo1 .LnpumSThxEWMIsDdAT17 .eVNpHGjtxRBq_gLOfGDr .EKtkFWMYpwzMKOYr0GYm')
            .assert.containsText('#r1-0 .ikg2IXiCD14iVX7AdZo1 .LnpumSThxEWMIsDdAT17 .eVNpHGjtxRBq_gLOfGDr .EKtkFWMYpwzMKOYr0GYm', '"Hello, World!" program - Wikipedia')
            .click('#r1-0 .ikg2IXiCD14iVX7AdZo1 .LnpumSThxEWMIsDdAT17 .eVNpHGjtxRBq_gLOfGDr .EKtkFWMYpwzMKOYr0GYm')
            .assert.visible('#firstHeading')
            .assert.containsText('#firstHeading span', '"Hello, World!" program')
    }
}
