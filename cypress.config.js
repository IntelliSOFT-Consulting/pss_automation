import { defineConfig } from 'cypress';
import { lighthouse, prepareAudit } from '@cypress-audit/lighthouse';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', async (browser = {}, launchOptions) => {
        await prepareAudit(launchOptions);

        // Increase memory limit and other browser configurations if needed
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--disable-software-rasterizer');
        }
        return launchOptions;
      });

      on('task', {
        lighthouse: lighthouse()
      });

      return config;
    },
    baseUrl: 'https://pssinternational.intellisoftkenya.com/', // Adjust this to your app's base URL
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000
  }
});



