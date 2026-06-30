import { BrowserRouter, Route, Routes } from "react-router"
import BaseLayout from "../layout/base.layout"
import MainSection from '../pages/MainSection'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLayout />}>
                    <Route index element={<MainSection/>} />            
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes