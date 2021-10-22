import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    beforeEach(async () => {
        await LoginPage.open();
    })
    it.skip('successful login', async () => {
        await LoginPage.login('muraways@gmail.com', 'Nfy.irf1990');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });

    it('wrong credentials throws error', async () => {
        await LoginPage.login('invalid@example.com', 'qwerty123');
        await expect(LoginPage.notification).toHaveTextContaining('Your email address was not recognized or your password was incorrect.');
    });
});
