import { Route, Routes } from './routes.type';
import productsRouter from '../products/products.routes';
export const routes: Routes = [
      new Route('/products',productsRouter),
]
