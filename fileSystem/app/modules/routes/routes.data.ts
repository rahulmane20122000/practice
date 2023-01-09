

import { IExcludedPaths } from "../../utility/authorize";
import { authRouter } from "../auth/auth.routes";
import { fileRouter } from "../file/file.routes";
import { userRouter } from "../user/user.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
  new Route('/auth',authRouter),
new Route('/user',userRouter),
new Route('/files',fileRouter)
];

export const excludedPaths: IExcludedPaths[] = [
  { path: '/auth/login', method: "POST" },
  { path: '/auth/change-password/', method: "PUT" },
]
