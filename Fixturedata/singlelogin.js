const { test: base } = require('@playwright/test');

const td = 
  {
    email: 'divyamuruganmettur@gmail.com',
    password: 'mAGIL13#'
  };

const test = base.extend({
  login: async ({}, use) => {
    await use(td);
  }
});
module.exports={test,td};







//