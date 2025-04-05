import { Outlet } from "react-router-dom"
import Header from "../Components/Header/header"

export const Main = ()=>{
    return(
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            
        </div>
    )
}