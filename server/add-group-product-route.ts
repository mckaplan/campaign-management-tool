import { Request, Response } from 'express';
import { AD_GROUP_PRODUCTS_DATA } from './add-group-product-data';



export function getProducts(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({payload : Object.values(AD_GROUP_PRODUCTS_DATA)});
  }, 1500);
}
