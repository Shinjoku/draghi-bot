
let ops = new Object();

let meta = require('./commands/discord.js');

// Features ------------------------------------------------------------------

/*      Discord API     */
ops['ping'] = meta.ping;

/*      Other APIs      */
ops['gif'] = require('./commands/giphy.js');
ops['gimme'] = require('./commands/tastedive.js');
ops['warframe'] = require('./commands/warframe.js');

// ---------------------------------------------------------------------------
// Features in production ----------------------------------------------------

ops['translate'] = require('./commands/future/translation.js');

// ---------------------------------------------------------------------------

module.exports = ops;
