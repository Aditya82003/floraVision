import { BrowserRouter, Route, Routes } from "react-router"
import BaseLayout from "../layout/base.layout"
import HeroSection from '../pages/HeroSection'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLayout />}>
                    <Route index element={<HeroSection/>} />            
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes