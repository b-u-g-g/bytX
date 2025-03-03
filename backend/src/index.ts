import express from "express";
import userRouter from "./routers/user"
import workerRouter from "./routers/worker"
const app = express();

app.use(express.json());
// postgresql://neondb_owner:npg_MUr3Fo8RsKTf@ep-falling-tree-a8qtsj0c-pooler.eastus2.azure.neon.tech/neondb?sslmode=require



import cors from "cors";




app.use(cors())

app.use("/v1/user", userRouter);
app.use("/v1/worker", workerRouter);

app.listen(3000)
