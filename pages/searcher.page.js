import Page from './page';

class SearchPage extends Page {
    get searchHeader() { return $('//h1[@class="sc-bYwzba Title-sc-jgn010 cYmwOA kDbeTS"]') }

}

export default new SearchPage();