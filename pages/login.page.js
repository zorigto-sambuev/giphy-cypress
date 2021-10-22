import Page from './page';
class LoginPage extends Page {

    get inputEmail () { return $('//input[@type="email"]') }
    get inputPassword () { return $('(//input[@type="password"])') }
    get buttonLogIn () { return $('.login-form__CTAButton-sc-1vrkdbu-3')}
    get notification () { return $('.flash')}

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonLogIn.click();
    }
    open () {
        return super.open('/login');
    }
}

export default new LoginPage();
