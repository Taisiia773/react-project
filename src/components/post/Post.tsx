import { useState } from "react"
import "./Post.css"

interface IPosttProps{
    name: string,
    description: string,
    img: string,
    author: string
}

export function Post(props: IPosttProps){
    const [amount, setAmount] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    function addOneLike() {
        setAmount(amount + 1)
        setIsLiked(true)
    }
    function removeOneLike() {
        setAmount(amount - 1)
        setIsLiked(false)
    }
    return(
        <div className="post">
            <div className="author-container">
                <p className="author">{props.author}</p>
            </div>

            <div className="image-container">
                <img className="post-image" src={props.img} alt={props.name} />
            </div>

            <div className="info-container">
                <div className="likes-container">
                    <p className="like-text">Likes: {amount}</p>
                    <button className="like" onClick={removeOneLike} disabled={amount === 0}>
                        -
                    </button>
                    <button className="dislike" onClick={addOneLike} disabled={isLiked}>
                        +
                    </button>
                </div>
                <h2 className="name">{props.name}</h2>
                <p className="description">{props.description}</p>
            </div>
        <hr />
        </div>
    )
}