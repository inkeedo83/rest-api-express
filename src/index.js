import app from './app.js'
import { PORT } from './common/constants.js';


async function main() {
    try {
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

main();