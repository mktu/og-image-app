import { getOptions } from './options';
import { Page } from 'puppeteer-core'

let _page : Page;

async function getPage(isDev: boolean) {
    if (_page) {
        return _page;
    }

    let puppeteer
    
    if(isDev){
        puppeteer = await import('puppeteer')
    }else{
        puppeteer = await import('puppeteer-core')
    }
    
    const options = await getOptions(isDev);
    const browser = await puppeteer.launch(options);
    console.log('launch succeeded')
    _page = await browser.newPage() as Page;
    return _page;
}

export async function getScreenshot(html: string, isDev: boolean) {
    const page = await getPage(isDev);
    await page.setViewport({ width: 1200, height: 630 });
    await page.setContent(html, {waitUntil : 'networkidle0'});
    console.log('setContent')
    const file = await page.screenshot({ type : 'png' });
    console.log('page.screenshot')
    return file;
}