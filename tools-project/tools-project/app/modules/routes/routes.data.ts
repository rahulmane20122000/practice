import { IExcludedPaths } from "../../utility/authorize";
import { AuthRouter } from "../auth/auth.routes";
import { DummyRouter } from "../dummy/dummy.routes";
import { ToolRouter } from "../tools/tools.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route("/dummy", DummyRouter),
    new Route("/tool", ToolRouter),
    new Route("/auth", AuthRouter)
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" }
]