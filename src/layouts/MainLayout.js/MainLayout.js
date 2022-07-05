import React from 'react'
import MainFooter from '../../components/Main.Footer'
import MainHeader from '../../components/Main.Header'
import Home from '../../pages/Home'

const MainLayout = () => {
    return (
        <>
            <div class="hero_area">
                <MainHeader />
                <Home />
                <MainFooter/>
            </div>
        </>
    )
}

export default MainLayout