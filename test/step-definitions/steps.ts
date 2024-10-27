import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/Home.page';
import Navbar from '../pageobjects/components/Navbar';
import LoginPage from '../pageobjects/Login.page';
import SearchPage from '../pageobjects/Search.page';
import FeedbackPage from '../pageobjects/Feedback.page';

Given('the user is on the homepage', async () => {
    await HomePage.open();
});

Given('the user is on the login page', async () => {
    await HomePage.open();
    await Navbar.clickSignInButton();
    await LoginPage.waitForLoginPageVisible();
});

Given('the user is on the feedback page', async () => {
    await HomePage.open();
    await HomePage.clickFeedbackLink();
    await FeedbackPage.waitForFeedbackPageVisible();
});

When('the user submits the login form with invalid credentials', async () => {
    await LoginPage.login('testusername', 'testpassword');
});

When('the user submits the login form with valid credentials', async () => {
    await LoginPage.login('username', 'password');
});

When('the user searches for {string}', async (query: string) => {
    await Navbar.executeSearch(query);
});

When('the user correclty fills the feedback form', async () => {
    await FeedbackPage.submitFeedback('test name', 'testemail@email.com', 'test subject', 'test comment');
});

Then('the user can see the different online banking features headers', async () => {
    await HomePage.assertOnlineBankingFeatures();
});

Then('an error message is displayed', async () => {
    await LoginPage.assertErrorMessage('Login and/or password are wrong.')
});

Then('the user is not logged in', async () => {
    await HomePage.open();
    await expect(await Navbar.isSignInButtonDisplayed()).toBe(true);
});

Then('the user is successfully logged in', async () => {
    await HomePage.open();
    await expect(await Navbar.isSignInButtonDisplayed()).toBe(false);
    await Navbar.assertUsername('username');
});

Then('search returns results', async () => {
    await expect(await SearchPage.isSearchResultsListDisplayed()).toBe(true);
});

Then('no results are returned', async () => {
    await expect(await SearchPage.isSearchResultsListDisplayed()).toBe(false);
});

Then('a successful search results message is displayed mentioning {string}', async (query: string) => {
    await SearchPage.assertSearchResultsMessage(true, query);
});

Then('a search results message is displayed mentioning that there are no results for {string}', async (query: string) => {
    await SearchPage.assertSearchResultsMessage(false, query);
});

Then('a success message is displayed for the feedback', async () => {
    await FeedbackPage.assertSuccessFeedbackMessage('test name');
});
