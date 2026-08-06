// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
 
  fullyParallel: true,
  //forbidOnly: !!process.env.CI,
  //retries: process.env.CI ? 2 : 0,
  //workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {   
   trace: 'on-first-retry',
   headless:false,
   actionTimeout: 10000,
   navigationTimeout: 30000,
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

