class FeedbackPage {
    public get feedbackForm() {
        return $('form[action="/sendFeedback.html"]')
    }

    public get nameInputField() {
        return $('#name');
    }

    public get emailInputField() {
        return $('#email');
    }

    public get subjectInputField() {
        return $('#subject');
    }

    public get commentTextArea() {
        return $('#comment');
    }

    public get submitButton() {
        return $('input[type="submit"]')
    }

    public get successFeedbackMessage() {
        return $('.span6')
    }

    public async waitForFeedbackPageVisible() {
        await this.feedbackForm.waitForDisplayed();
    }

    public async submitFeedback(name: string, email: string, subject: string, comment: string) {
        await this.nameInputField.setValue(name);
        await this.emailInputField.setValue(email);
        await this.subjectInputField.setValue(subject);
        await this.commentTextArea.setValue(comment);
        await this.submitButton.click();
    }

    public async assertSuccessFeedbackMessage(name: string) {
        await expect(this.successFeedbackMessage).toHaveText(`Thank you for your comments, ${name}.`, {
            containing: true
        })
    }
}

export default new FeedbackPage();
