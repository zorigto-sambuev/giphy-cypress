import MainPage from '../pages/main.page'
import SearchPage from '../pages/searcher.page'
import LinkedPage from '../pages/linked.page'

describe('TrendSection', () => {
    it('trending to be exist', async () => {
        await browser.url('https://giphy.com/')
        await expect(MainPage.trendingList).toBeExisting();
    });
    it('click on a gif in trending section', async () => {
        await browser.url('https://giphy.com/')
        await MainPage.findGif();
        await expect(LinkedPage.linkGif).toBeDisplayed();
    });

});

describe('Search works', () => {
    it('search field to be exist', async () => {
        await browser.url('https://giphy.com/')
        await expect(MainPage.searcher).toBeExisting();
    });
    it('can type text into search field', async () => {
        await browser.url('https://giphy.com/')
        await MainPage.typeSearch('birthday')
        await expect(SearchPage.searchHeader).toBeExisting();
    });

});

