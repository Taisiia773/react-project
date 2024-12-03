import { Post } from "../post/Post"

export function PostList(){
    const posts = [
        {
            name: "post1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic optio minima eum blanditiis deserunt laudantium doloribus deleniti nobis ducimus minus quam qui, aliquam, provident eius amet dignissimos facere! Quos?",
            img: "https://static.ukrinform.com/photos/2013_06/1371661320_2.jpg",
            author: "author12",
            id: 1
        },
        {
            name: "post2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic optio minima eum blanditiis deserunt laudantium doloribus deleniti nobis ducimus minus quam qui, aliquam, provident eius amet dignissimos facere! Quos?",
            img: "https://i.obozrevatel.com/2018/4/20/kotochkikniga163261.jpg?size=1944x924",
            author: "divavavav",
            id: 2
        },
        {
            name: "post3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic optio minima eum blanditiis deserunt laudantium doloribus deleniti nobis ducimus minus quam qui, aliquam, provident eius amet dignissimos facere! Quos?",
            img: "https://static.ukrinform.com/photos/2013_06/thumb_files/630_360_1371657284-foto-instagramcom.jpg",
            author: "saodpiosiduf",
            id: 3
        },
    ]
    return (
        <div className="posts">
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