import express from 'express';
import path from 'path';
import cors from 'cors';
import {serve} from 'inngest/express';

import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';

const app = express();

//const __dirname = path.resolve();

//middlewares

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));

// app.use("/api/inngest", serve({
//     client:"inngest",
//     functions,
//     eventKey: ENV.INNGEST_EVENT_KEY,
//     signingKey: ENV.INNGEST_SIGNING_KEY,
// }));

const PORT = ENV.PORT || 3000;



app.get("/help", (req, res) => {
    res.json({
        message: "Help Api Message"
    })
})


// // For Production
// if (ENV.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));

//     app.get("/{*any}", (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     })
// }

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on localhost:${PORT}`)
        })
    }
    catch(error){
        console.log("Error starting server",error);

    }
}
startServer();
