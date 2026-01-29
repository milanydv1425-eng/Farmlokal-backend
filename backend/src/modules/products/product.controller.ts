import { Request, Response } from "express";
import { getProducts } from "./product.service";

export const fetchProducts = async (req: Request, res: Response) => {
  const products = await getProducts(req.query);
  res.json(products);
};
