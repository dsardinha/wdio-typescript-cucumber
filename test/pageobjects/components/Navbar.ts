import { waitAndClick } from "../../utilities/helper.ts"; 

class Navbar {
    public get signInButton() {
        return $('#signin_button');
    }

    public get user() {
        return $('a:has(> i[class="icon-user"])')
    }

    public get searchInputField() {
        return $('#searchTerm');
    }

    public async clickSignInButton() {
        await waitAndClick(this.signInButton);
    }

    public async isSignInButtonDisplayed() {
        return await this.signInButton.isDisplayed();
    }

    public async assertUsername(username: string) {
        await expect(this.user).toHaveText(username);
    }

    public async executeSearch(query: string) {
        await this.searchInputField.setValue(query);
        await browser.keys('Enter');
    } 
}

export default new Navbar();
