class LoginPage {
    public get loginForm() {
        return $('#login_form');
    }

    public get usernameInputField() {
        return $('#user_login')
    }

    public get passwordInputField() {
        return $('#user_password')
    }

    public get signInButton() {
        return $('input[type="submit"]');
    }

    public get errorMessage() {
        return $('.alert-error');
    }

    public async waitForLoginPageVisible() {
        await this.loginForm.waitForDisplayed();
    }

    public async login(username: string, password: string) {
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.signInButton.click();
    }

    public async assertErrorMessage(text: string) {
        await expect(this.errorMessage).toHaveText(text)
    }
}

export default new LoginPage();
