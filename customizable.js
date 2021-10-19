const { createAvatar } = require('@dicebear/avatars');
const style = require('@dicebear/open-peeps');
// const style = require('@dicebear/adventurer'); // optional secondary
const Rarepress = require('rarepress');

// Simply increment the INDEX value to mint collections from a new address every time.
const INDEX = 1; 
// Tweak the TOTAL attribute to change how many items you want to mint in your collection.
const TOTAL = 15;

(async () => {
    // initialize Rarepress
    const rarepress = new Rarepress();
    await rarepress.init({ network: "mainnet", key: `m'/44'/60'/0'/0/${INDEX}` });
    for(let i=0; i<TOTAL; i++) {
        // Algorithmically generate 1000 of these SVG avatars.
        let svg = createAvatar(style, { seed: i.toString() });
        let cid = await rarepress.fs.add(Buffer.from(svg))
        // Tokenize each SVG image as NFTs.
        let token = await rarepress.token.create({
            metadata: {
                name: `${i}`,
                description: `${i}.svg`, 
                image: `/ipfs/${cid}`
            }
        })
        
        await rarepress.fs.push(cid)
        await rarepress.fs.push(token.uri)
        let sent = await rarepress.token.send(token)

        //Publish the NFTs to an NFT marketplace (https://rarible.com)
        console.log(`[${i}] published: https://rarible.com/token/${sent.id}`);
    }
})