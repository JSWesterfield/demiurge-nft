const { createAvatar } = require('@dicebear/avatars');
const style = require('@dicebear/open-peeps');
// const style = require('@dicebear/adventurer'); // optional secondary
const Rarepress = require('rarepress');

// Simply increment the INDEX value to mint collections from a new address every time.
const INDEX = 1; 
// Tweak the TOTAL attribute to change how many items you want to mint in your collection.
const TOTAL = 15;

(async () => {
    const rarepress = new Rarepress();
    await rarepress.init({ network: "mainnet", key: `m'/44'/60'/0'/0/${INDEX}` });
    for(let i=0; i<TOTAL; i++) {
        
    }
})