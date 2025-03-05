import { Router } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
//import { authMiddleware } from "../middleware";
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'


const router = Router();
const prismaClient = new PrismaClient();
const JWT_SECRET= "bytx123"


/*router.get("/presignedUrl", authMiddleware, async (req, res) => {
    
    const userId = req.userId;

    const { url, fields } = await createPresignedPost(s3Client, {
        Bucket: 'hkirat-cms',
        Key: `fiver/${userId}/${Math.random()}/image.jpg`,
        Conditions: [
          ['content-length-range', 0, 5 * 1024 * 1024] 
        ],
        Expires: 3600
    })

    res.json({
        preSignedUrl: url,
        fields
    })
    
})

router.post("/signin", async(req, res) => {
    
    const user= await prismaClient.user.upsert
   

});

export default router;*/