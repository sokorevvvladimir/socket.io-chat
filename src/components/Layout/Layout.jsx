import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Appbar from "../Appbar";

const Layout = () => { 
    return (
    <>
        <header>
            <Appbar/>
        </header>
        <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            
        </main>
        <footer>2022 &#169;</footer>
    </>
    )
};

export default Layout;