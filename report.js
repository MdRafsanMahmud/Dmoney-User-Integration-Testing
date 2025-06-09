const newman = require('newman');
noderequire('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/42737134-ae6334fd-dd03-48a8-b595-697ff80aaa91?access_key=${process.env.pmatKey}`,
    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
