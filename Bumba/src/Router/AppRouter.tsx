import { BrowserRouter as Router ,  Routes , Route } from "react-router-dom"
import { Main } from "../Layout/main"
import { Index } from "../Pages"

export const AppRouter = ()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route element ={<Main/>}>
                    <Route index element ={<Index/>}/>
                   
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}