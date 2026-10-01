class EventHubPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.dilliDiwaliMela = page.getByRole('heading', { name: 'Dilli Diwali Mela', exact: true });
  }

  async openLoginPage() {
    await this.page.goto('https://eventhub.rahulshettyacademy.com/login');
    await this.page.waitForLoadState('networkidle');
  }

  async signIn(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}

module.exports = { EventHubPage };