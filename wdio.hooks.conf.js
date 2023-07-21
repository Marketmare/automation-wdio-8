import fs from 'fs';
import deepmerge from 'deepmerge';
import {config as baseConfig} from './wdio.conf.js';

const passedDirectory = 'screenshots/passed';
const failedDirectory = 'screenshots/failed';

function createIfNotExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function deleteFiles(dir) {
    if (fs.existsSync(dir)) {
        fs.rm(dir, { recursive: true }, err => {
            if (err) console.log(err);
        });
    }
}

export const config = deepmerge(baseConfig, {
    specs: [
        // '../lesson-05*/*.e2e.js'
        './test/specs/homework/homework.e2e.js'
    ],
    exclude: [ './test/specs/exercise.e2e.js'],
     
    /*
    Definice potřebných hooků
    */
    onPrepare: (config, capabilities) => {
        deleteFiles("screenshots");
    },

    afterTest: (test, context, { error, result, duration, passed, retries }) => {
        const screenshotName = (`${test.parent}__${test.title}.png`).replace(/ /g, '_');
        if (passed === false) {
            createIfNotExists(failedDirectory);
            // console.log(`${failedDirectory}/${screenshotName}`);
            browser.saveScreenshot(`${failedDirectory}/${screenshotName}`);
        
        }
        else {
            createIfNotExists(passedDirectory);
            // console.log(`${failedDirectory}/${screenshotName}`);
            browser.saveScreenshot(`${passedDirectory}/${screenshotName}`); 
        }
    }

}, { clone: false })

// npx wdio run wdio.hooks.conf.js