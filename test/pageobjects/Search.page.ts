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
        return await this.searchResultsList.isDisplayed();
    }
}

export default new SearchPage();
