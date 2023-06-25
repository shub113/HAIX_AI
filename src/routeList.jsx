import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PageLayout = lazy(() =>
    import("./pages/pageLayout").then((module) => ({ default: module.PageLayout }))
);
const NoPath = lazy(() => import("./pages/noPath").then((module) => ({ default: module.NoPath })));

export const RouteList = () => (
    <Routes>
        <Route path='/' element={<PageLayout />}>
            <Route path='*' element={<NoPath />} />
        </Route>
    </Routes>
);
