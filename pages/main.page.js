import Page from './page';

class MainPage extends Page {
    get trendingList() { return $('//div[@class="ListWrapper-sc-1mxkd1t djoQGB"]') }
    get searcher() { return $('//*[@class="Input-sc-w75cdz tdeeo"]')}
    get searchButton() { return $('//div[@class="search-button__SearchIcon-ndudpy-0 dXfOPS"]')}
    get trendGif() { return $('//*[@class="Item-sc-1yg4na3 bKPIpm"][2]')}

    async typeSearch(searchtext) {
        await this.searcher.setValue(searchtext);
        await this.searchButton.click();
    }
    async findGif() {
        await this.trendGif.click();
    }

}

export default new MainPage();