import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Client } from '@notionhq/client';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

const notion = new Client({
    auth: process.env.NOTION_API_KEY
});

// create task
app.post("/api/create-task", async (req, res) => {
    const { task, priority } = req.body;

    if (!task || !priority) {
        return res.status(400).json({ success: false, error: "Missing fields." });
    }

    try {
        const response = await notion.pages.create({
            parent: { database_id: process.env.NOTION_DATABASE_ID },
            properties: {
                "Task Name": {
                    title: [{ text: { content: task } }]
                },
                "Priority": {
                    select: { name: priority }
                },
                "Status": {
                    select: { name: "To Do" }
                }
            }
        });

        res.json({ success: true, data: response });
    } catch (error) {
        console.error(error.body || error);
        res.status(500).json({
            success: false,
            error: error.body?.message || error.message || "Notion API failed."
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
