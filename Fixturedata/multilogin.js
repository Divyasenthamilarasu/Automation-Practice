
const { test: base } = require('@playwright/test');

const td = [
  {
    email: 'divyamuruganmettur@gmail.com',
    password: 'mAGIL13#'
  },
  {
    email: 'divyam@gmail.com',
    password: 'Magil1'
  },
  {
    email: 'senthamil1@gmail.com',
    password: 'senthamil'
  }
];

const test = base.extend({
  login: async ({}, use) => {
    await use(td);
  }
});

module.exports = { test, td };





