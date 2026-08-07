// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
 expect: {
    timeout: 50000,
  },
  fullyParallel: true,
  //forbidOnly: !!process.env.CI,
  //retries: process.env.CI ? 2 : 0,
  //workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {   
   trace: 'on-first-retry',
   headless:false,
   actionTimeout: 50000,
   navigationTimeout: 50000,
  },


projects:[
  {
    name: 'chrome',
    use:{
      browserName:'chromium',
      channel:'chrome',
    }
  }
]


});

