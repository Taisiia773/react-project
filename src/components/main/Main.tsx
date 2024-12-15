import './Main.css'
import { ReactNode } from 'react'

// import { PostList } from '../postList/PostList'
// export function Main() {
//     return (
//         <div className='container'>
//                 <PostList/>
//         </div>
//     )
// }

interface IMainProps{
    children?: ReactNode
}

export function Main(props: IMainProps) {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}