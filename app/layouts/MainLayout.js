"use client"
import TopMenu from "./includes/TopMenu.js"
import MainHeader from "./includes/MainHeader.js"

export default function MainLayout({ children }){
    return(<>
        <div id="Mainlayout" className='min-w-[1050px] max-w-[1300px] mx-auto'>
            <div>
                <TopMenu/>
                <MainHeader/>
            </div>
        </div>
    </>)
}