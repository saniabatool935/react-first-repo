import { Route } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"

export const AppRoute=(
    <Route element={<App/>} errorElement={<h1>error</h1>} >
            <Route path="/" element={<Home/>}/> 
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
</Route>

)