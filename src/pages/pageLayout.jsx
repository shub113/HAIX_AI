import { Outlet } from "react-router-dom";

export function PageLayout() {
    return (
        <div className='bg-slate-300 min-h-screen '>
            <Outlet />
        </div>
    );
}
