import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { workerMiddleware } from "../middleware";


const router = Router();
const TOTAL_SUBMISSIONS = 100;
const prismaClient = new PrismaClient();

prismaClient.$transaction(
    async (prisma) => {
      // Code running in a transaction...
    },
    {
      maxWait: 5000, // default: 2000
      timeout: 10000, // default: 5000
    }
)


router.get("/nextTask", workerMiddleware, async (req, res) => {
  // @ts-ignore
  const userId: string = req.userId;

  const task = await getNextTask(Number(userId));

  if (!task) {
      res.status(411).json({   
          message: "No more tasks left for you to review"
      })
  } else {
      res.json({   
          task
      })
  }
})
router.post("/signin", async(req, res) => {

});

export default router;