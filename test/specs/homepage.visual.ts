import HomePage from "../pageobjects/Home.page";

describe('Homepage Visual', () => {
    it('Should correctly display the homepage', async function () {  // Use `function` to maintain `this` context
        await HomePage.open();
        await HomePage.compareHomepageSnapshot(this.test?.title);
    });

    it('Should correctly display second carousel item', async function () {
        await HomePage.compareCarouselSnapshotAfterSwipe(this.test?.title, 1);
    });

    it('Should correctly display third carousel item', async function () {
        await HomePage.compareCarouselSnapshotAfterSwipe(this.test?.title, 2);
    });
});
