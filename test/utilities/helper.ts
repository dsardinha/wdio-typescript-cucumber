import AllureReporter from "@wdio/allure-reporter";
import * as fs from "fs";

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

export const addAllureReportScreenshot = async (name: string, filePath: string) => {
    AllureReporter.addAttachment(name, fs.readFileSync(filePath), 'image/png');
}