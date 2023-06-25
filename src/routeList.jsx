import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PageLayout = lazy(() =>
    import("./pages/pageLayout").then((module) => ({ default: module.PageLayout }))
);
const Home = lazy(() => import("./pages/home/home").then((module) => ({ default: module.Home })));
const NoPath = lazy(() => import("./pages/noPath").then((module) => ({ default: module.NoPath })));

export const RouteList = () => (
    <Routes>
        <Route path='/' element={<PageLayout />}>
            <Route index element={<Home />} />

            <Route path='*' element={<NoPath />} />
        </Route>
    </Routes>
);
