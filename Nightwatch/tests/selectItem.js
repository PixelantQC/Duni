var duni = require('../helpers/login.js');

// Objects

// Grid Items
var firstGridItem = '.images-container div:nth-child(2)'

// Panel
var itemPanel = 'div.qbank_panel__wrapper._cloned'
var closePanel = 'div.qbank_panel__wrapper._cloned  div.qbank_panel__close'
var selectionButton = 'div.qbank_panel__wrapper._cloned  a.qbank_selection__btn'

// Selection
var selectionCounter = '.counter'

module.exports = {
  'Login to Duni': duni.login,
  'Open image panel': function (browser) {
    browser
      .pause(1000)
      .click(firstGridItem)
      .pause(2000)
      .assert.elementPresent(itemPanel, 'Item panel is opened?')
  },
  'Add item to selection': function (browser) {
    browser
      .click(selectionButton)
      .pause(2000)
      .assert.containsText(selectionCounter, '1', 'Selections counter = 1?')
  },
  'Close image panel': function (browser) {
    browser
      .click(closePanel)
      .pause(2000)
      .assert.elementNotPresent(itemPanel, 'Item panel is closed?')
      .end();
  }
}
