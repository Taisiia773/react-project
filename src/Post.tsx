interface IPosttProps{
    name: string,
    description: string,
    img: string,
    author: string
}

export function Post(props: IPosttProps){
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.img} alt={props.name} />
            <p>{props.author}</p>
        </div>
    )
}