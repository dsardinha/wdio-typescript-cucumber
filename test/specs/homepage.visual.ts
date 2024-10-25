import HomePage from "../pageobjects/Home.page";

describe('Homepage', () => {
    it('Should correctly display the homepage', async () => {
        await HomePage.open();
        await HomePage.compareHomepageSnapshot();  
    })

    it('Should correctly display remaining carousel items', async () => {
        await HomePage.compareCarouselSnapshotAfterSwipe(1);
        await HomePage.compareCarouselSnapshotAfterSwipe(2);
    })
})