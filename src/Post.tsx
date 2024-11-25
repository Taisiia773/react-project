import { useState } from "react"

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
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.img} alt={props.name} />
            <p>{props.author}</p>

            <p>like: {amount}</p>
            <button onClick={removeOneLike} disabled={amount === 0}>
                -
            </button>
            <button onClick={addOneLike} disabled={isLiked}>
                +
            </button>
        </div>
    )
}