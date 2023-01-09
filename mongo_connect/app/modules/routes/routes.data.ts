import { Route, Routes } from './routes.type';
import dummyRouter from '../dummy/dummy.routes';
export const routes: Routes = [
    new Route('/dummy',dummyRouter)
]
