import { Router } from "express";
import { PrismaClient } from "@prisma/client";


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

router.post("/signin", async(req, res) => {

});

export default router;