import * as playwright from "playwright-aws-lambda";

const exePath = process.platform === 'win32'
? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
: process.platform === 'linux'
? '/usr/bin/google-chrome'
: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

interface Options {
    args: string[];
    executablePath: string;
    headless: boolean;
}

export async function getOptions(isDev: boolean) {
    let options : Options | undefined= undefined;
    if (isDev) {
        options = {
            args: [],
            executablePath: exePath,
            headless: true
        };
    } 
    return options;
}

async function getPage(isDev: boolean) {
    const options = await getOptions(isDev);
    const browser = await playwright.launchChromium(options)
    const _page = await browser.newPage({
        viewport : { width: 1200, height: 630 }
    });
    return _page;
}

export async function getScreenshot(html: string, isDev: boolean) {
    const page = await getPage(isDev);
    await page.setContent(html, {waitUntil : 'networkidle'});
    const file = await page.screenshot({ type : 'png' });
    return file;
}