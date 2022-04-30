import app from './app.js';
import { sequelize } from './database/db.js';

// import './models/Project.js';
// import './models/Task.js';

async function main() {
  try {
    const port = process.env.PORT || 3001;
    await sequelize.sync({ force: false });
    // await sequelize.authenticate();
    console.log('Connection has been established successfully');
    app.listen(port, () =>
      console.log(`Server is listening on port http://localhost:${port}`)
    );
  } catch (err) {
    console.log(`Index Error:${err}`);
  }
}

main();
