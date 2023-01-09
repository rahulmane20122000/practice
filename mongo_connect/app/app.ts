import express from 'express';
import { registerRoutes } from './modules/routes/routes.register';
import { connectToMongo } from './connection/mongo.connect';

export const startServer = async () => {


    try {
        const app = express();
        const { PORT } = process.env;
        await connectToMongo();
        registerRoutes(app);
        app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}