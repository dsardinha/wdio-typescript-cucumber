class SearchPage {
    public get searchResults() {
        return $('.top_offset');
    }

    public get searchResultsList() {
        return $('.top_offset > ul');
    }

    public async assertSearchResultsMessage(hasResults: boolean, query: string) {
        const expectedMessage = hasResults 
            ? `The following pages were found for the query: ${query}` 
            : `No results were found for the query: ${query}`;
        expect(this.searchResults).toHaveText(expectedMessage, {
            containing: true
        });
    }

    public async isSearchResultsListDisplayed() {
        try {
            await this.searchResultsList.waitForDisplayed({
                timeout: 1500
            });
            return await this.searchResultsList.isDisplayed();
        } catch (e) {
            return false;
        }
    }
}

export default new SearchPage();
