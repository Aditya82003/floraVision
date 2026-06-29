import { Outlet } from "react-router"
import NavBar from "../components/navBar"


const BaseLayout = () => {
    return (
        <div className="w-full bg-[rgba(27,35,22,1)]">
            <header className="absolute top-0 z-50 w-full bg-transparent"><NavBar/></header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default BaseLayout