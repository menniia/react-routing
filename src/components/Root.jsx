import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="sign-up">Sign Up</Link>
                    <Link to="articles">Articles</Link>
                    <Link to="categories">Categories</Link>
                    <Link to="profile">Profile</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Root;
