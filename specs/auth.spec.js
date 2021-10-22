import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    it('successful login', async () => {
        await LoginPage.open();
        await LoginPage.login('muraways@gmail.com', 'Nfy.irf1990');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });
});


