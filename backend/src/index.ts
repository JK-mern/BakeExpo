import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import cors from 'cors'

const app = express();
app.use(express.json()); 
app.use(cors())
const prisma = new PrismaClient();

interface Body {
  FirstName: string;
  LastName: string;
  CompanyName: string;
  PhoneNumber: string;
  Address: string; 
}

app.post("/register", async (req: Request, res: Response) => {
  try {
    const body: Body = req.body;
    const result = await prisma.registerDetails.create({
      data: {
        FirstName: body.FirstName,
        LastName: body.LastName,
        CompanyName: body.CompanyName,
        PhoneNumber: body.PhoneNumber,
        Address: body.Address,
      },
    });

  
    res.status(201).json({ message: "Registration successful", data: result, status : true});
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect(); 
  }
});

app.listen(5000, () => {
  console.log("App is running on port 5000");
});
