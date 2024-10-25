export const waitAndClick = async (element: ChainablePromiseElement) => {
    await element.waitForClickable();
    await element.click();
}

export const compareFullPageSnapshot = async(
        elementToHideAfterScroll: ChainablePromiseElement, 
        fileName: string, 
        mismatchMargin: number) => {
    await expect(browser).toMatchFullPageSnapshot(fileName, mismatchMargin, {
        hideAfterFirstScroll: [elementToHideAfterScroll]
    })        
}

export const compareElementSnapshot = async(
        element: ChainablePromiseElement, 
        elementToHide: ChainablePromiseElement, 
        fileName: string, 
        mismatchMargin: number) => {
    await expect(element).toMatchElementSnapshot(fileName, mismatchMargin, {
        hideElements: [elementToHide]
    })        
}