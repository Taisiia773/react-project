import { Layout } from "./layout/Layout"
import { Main } from "./main/Main"
import { Footer } from './footer/Footer'
import { Header } from "./header/Header"

export function AppComponent(){
    return (
        <div>
            <Layout>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Layout>
        </div>
    )
}