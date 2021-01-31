import dotenv from 'dotenv';
import server from './server/index.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));