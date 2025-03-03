import { Router } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";


const router = Router();
const prismaClient = new PrismaClient();
const JWT_SECRET= "bytx123"

router.post("/signin", async(req, res) => {
    
    const user= await prismaClient.user.upsert
   

});

export default router;