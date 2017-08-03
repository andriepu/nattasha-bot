'use strict';

// --- Copy .sample-env to .env
const fs = require('fs')fs.createReadStream('.sample-env').pipe(fs.createWriteStream('.env'));
