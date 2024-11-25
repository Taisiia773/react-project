import { Post } from "./Post"

export function PostList(){
    const posts = [
        {
            name: "post1",
            description: "cat byl vygnat iz doma(((",
            img: "https://static.ukrinform.com/photos/2013_06/1371661320_2.jpg",
            author: "abc1",
            id: 1
        },
        {
            name: "post2",
            description: "umnyj cat",
            img: "https://i.obozrevatel.com/2018/4/20/kotochkikniga163261.jpg?size=1944x924",
            author: "abc2",
            id: 2
        },
        {
            name: "post3",
            description: "haroshyj cat",
            img: "https://static.ukrinform.com/photos/2013_06/thumb_files/630_360_1371657284-foto-instagramcom.jpg",
            author: "abc3",
            id: 3
        },
    ]
    return (
        <div>
            {posts.map((post) => {
                return <Post 
                        name={post.name}
                        description={post.description}
                        img={post.img}
                        author={post.author}
                        key={post.id}
                        ></Post>
            })}
        </div>
    )
}