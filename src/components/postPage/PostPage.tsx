import { useParams } from "react-router-dom";


export function PostPage (){
    const params = useParams()
    return (
        <div className="post">
            <h1>Post:</h1>
            <p>Description:</p>
            <img src="" alt="img" />
            <h6>{params.id}</h6>   
        </div>
        
    )
}