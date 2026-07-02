import { Outlet } from "react-router"
import NavBar from "../components/navBar"
import Footer from "../components/ui/Footer"
import { useEffect, useState } from "react";


const BaseLayout = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="w-full bg-[rgba(27,35,22,1)]">
            <header
                className={`top-0 left-0 z-50 w-full transition-all duration-300 ${sticky
                        ? "fixed bg-white/10 backdrop-blur-md shadow-lg"
                        : "absolute bg-transparent"
                    }`}
            >
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default BaseLayout