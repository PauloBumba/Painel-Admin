import { BrowserRouter as Router ,  Routes , Route } from "react-router-dom"
import { Main } from "../Layout/main"
import { Index } from "../Pages"
import { Profile } from "../Pages/perfil"

export const AppRouter = ()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route element ={<Main/>}>
                    <Route index element ={<Index/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}