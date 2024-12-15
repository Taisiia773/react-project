import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Post } from "../post/Post"
import "./PostList.css"

const posts = [
    {
        title: "post1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic optio minima eum blanditiis deserunt laudantium doloribus deleniti nobis ducimus minus quam qui, aliquam, provident eius amet dignissimos facere! Quos?",
        image: "https://static.ukrinform.com/photos/2013_06/1371661320_2.jpg",
        author: "author12",
        id: 1,
        category: "Cats"
    },
    {
        title: "post2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic optio minima eum blanditiis deserunt laudantium doloribus deleniti nobis ducimus minus quam qui, aliquam, provident eius amet dignissimos facere! Quos?",
        image: "https://i.obozrevatel.com/2018/4/20/kotochkikniga163261.jpg?size=1944x924",
        author: "divavavav",
        id: 2,
        category: "Smart"
    },
    {
        title: "post3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic optio minima eum blanditiis deserunt laudantium doloribus deleniti nobis ducimus minus quam qui, aliquam, provident eius amet dignissimos facere! Quos?",
        image: "https://static.ukrinform.com/photos/2013_06/thumb_files/630_360_1371657284-foto-instagramcom.jpg",
        author: "saodpiosiduf",
        id: 3,
        category: "Technologies"
    },
]

export function PostList(){
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [filteredPosts, setFilteredPosts] = useState(posts)

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("https://fakestoreapi.com/products")
            const posts = await response.json()
            setFilteredPosts(posts)
            console.log(posts)
        }
        fetchPosts()
    }, [])


    useEffect(() => {
        console.log(selectedCategory)
        if (selectedCategory === "All") {
            setFilteredPosts(posts)
        } else {
            const filtered = posts.filter((post) => {
                return post.category === selectedCategory
            })
            setFilteredPosts(filtered)
        }
    }, [selectedCategory])

    return (
        <div className="posts">
            <div className="filter">
                <p>Filters:</p>
                <select className="SelectCategories" onChange={(event) => {
                    const selectedValue = event.target.value
                    setSelectedCategory(selectedValue)
                }}>
                    <option value="All">All</option>
                    <option value="Technologies">Technologies</option>
                    <option value="Smart">Smart</option>
                    <option value="Cats">Cats</option>
                </select>
            </div>

            
            {filteredPosts.map((post) => {
                return <Link to='/post/:{post.id}'>
                            <Post 
                                name={post.title}
                                description={post.description}
                                img={post.image}
                                author={post.author}
                                key={post.id}
                            ></Post>
                        </Link>
            })}
        </div>
    )
}

