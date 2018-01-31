/* This file contains commands related directly to the Discord API */

let ops = {
    
    ping: async function ping (message, client) {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
    
};

exports = module.exports = ops;