

import { IExcludedPaths } from "../../utility/authorize";
import { authRouter } from "../auth/auth.routes";
import { rolesRouter } from "../roles/roles.routes";
import { userRouter } from "../user/user.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
  new Route('/auth', authRouter),
  new Route('/user', userRouter),
  new Route('/roles', rolesRouter)
];

export const excludedPaths: IExcludedPaths[] = [
  { path: '/auth/login', method: "POST" },
  { path: '/auth/change-password/', method: "PUT" },
]
