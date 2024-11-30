import express from 'express';
const app = express();
// middleware
app.use(express.json());
// APIs
// app.get("/",(req:Request,res:Response)=>{res.send({message:"server is start"}))};
// app.get("/", (req: Request, res: Response) => {
//     res.json({ message: "server is start" });
//   });
// app.get("/",(req,res)=>res.send({message:"Server is start hii  "}))
//listain
const PORT = 4000;
const localhost = "ecommerce";
app.listen(PORT, () => {
    console.log(`express is start on http://${localhost}:${PORT}`);
});
