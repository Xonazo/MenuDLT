import {Route, Routes} from 'react-router-dom';
import Home from "./src/Home"
import Menu from "./src/pages/menu"
import Footer from "./src/components/Footer"

import NavBar from './src/components/NavBar';
const RouterApp = () => {
    return (
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
        </>
    )
}

export default RouterApp;