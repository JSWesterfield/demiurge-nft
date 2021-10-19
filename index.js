const { createAvatar } = require('@dicebear/avatars');
const style = require('@dicebear/open-peeps');
const Rarepress = require('rarepress');
(async () => {
    const rarepress = new Rarepress();
    await rarepress.init({ network: "mainnet" })
    for(let i= 0; i < 1000; i++ ) {
        // image to tokenize is the svg or created Avatar 
        let svg = createAvatar(style, {seed: i.toString() });
        // 
        let cid = await rarepress.fs.add(Buffer.from(svg))
        // tokenize the image
        let token = await rarepress.token.createAvatar({
            metadata: {
                name: `${1}`,
                description: `${i}.svg`,
                image: `/ipfs/${cid}`
            }
        })
    }
 })