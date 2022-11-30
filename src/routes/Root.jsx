import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <header className='header'>
                <Link className="logo" href="/">home</Link>
                <nav>
                    <Link to="/new">new</Link>
                    <a href="https://github.com/ohriya">github</a>
                    <Link to="/about">about</Link>
                </nav>
            </header>

            <div className="container">

                <Outlet/>
            </div>




        </>
    );
}