const { createAvatar } = require('@dicebear/avatars');
const style = require('@dicebear/open-peeps');
const Rarepress = require('rarepress');
(async () => {
    const rarepress = new Rarepress();
    await rarepress.init({ network: "mainnet" })
    for(let i= 0; i < 1000; i++ ) {
        let svg = createAvatar(style, {seed: i.toString() });
        let cid = await rarepress.fs.add(Buffer.from(svg))
        let token = await rarepress.token.createAvatar({
            metadata: {
                name: `${1}`,
                description: `${i}.svg`,
                image: `/ipfs/${cid}`
            }
        })
    }
 })