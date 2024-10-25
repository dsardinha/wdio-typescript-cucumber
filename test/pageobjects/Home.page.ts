import data from "../resources/data";
import * as helper from "../utilities/helper";

class HomePage {
    public get feedbackLink() {
        return $('#feedback');
    }

    public get onlineBankingFeatures() {
        return $$('#online_banking_features h4');
    }

    public async open() {
        await browser.url('/');
        await browser.maximizeWindow();
    }

    public async clickFeedbackLink() {
        await helper.waitAndClick(this.feedbackLink);
    }
    
    public async assertOnlineBankingFeatures() {
        const onlineBankingFeaturesList: string[] = [];
        await this.onlineBankingFeatures.forEach(async (feature) => {
            const header = await feature.getText();
            await onlineBankingFeaturesList.push(header);
        })
        await expect(onlineBankingFeaturesList).toEqual(data.onlineBankingFeatures);
    }

    public async compareHomepageSnapshot() {
        const navBar = await $('.navbar');
        await helper.compareFullPageSnapshot(navBar, 'homepage', 0);
    }

    public async compareCarouselSnapshot(carouselItem: number = 0) {
        const carousel = await $('.carousel-inner');
        const navBar = await $('.navbar');
        await helper.compareElementSnapshot(carousel, navBar, `carousel-${carouselItem}`, 0);
    }

    public async swipeCarouselToRight() {
        const carouselRightControl = await $('.carousel-control.custom.right');
        await helper.waitAndClick(carouselRightControl);
    }

    public async getActiveCarouselItemIndex() {
        const carouselItemsList = await $$('.item');
        return await carouselItemsList.findIndex(async (carouselItem) => {
            const activeElement = await carouselItem.getAttribute('class'); 
            return activeElement.includes('active'); 
        });
    }

    public async compareCarouselSnapshotAfterSwipe(carouselItem: number) {
        await this.swipeCarouselToRight();
        await browser.waitUntil(async () => {
            return (await this.getActiveCarouselItemIndex() === carouselItem);
        })
        await this.compareCarouselSnapshot(carouselItem);
    }
}

export default new HomePage();
