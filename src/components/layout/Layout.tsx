import { ReactNode } from "react"
import { Main } from "../main/Main"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { Outlet } from "react-router-dom"
import "./Layout.css"
interface ILayoutProps {
    children?: ReactNode
}


export function Layout(props:ILayoutProps){
    return(
        <div className="Layout">
            <Header></Header>
            <Main><Outlet></Outlet></Main>
            <Footer></Footer>
            {props.children}
        </div>

    )   
}