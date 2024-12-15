import { Layout } from "./layout/Layout"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { PostList } from "./postList/PostList"
import { PostPage } from "./postPage/PostPage"


export function AppComponent(){

    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostList></PostList>}></Route>
                    <Route path = "/post/:id" element = {<PostPage></PostPage>}> </Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}