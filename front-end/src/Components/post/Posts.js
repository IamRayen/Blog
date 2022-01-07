import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import sanityClient from "../../Client"

const AllPosts = () => {
    const [postsData, setpostsData] = useState(null)
    useEffect(async() => {
    try {
        const data = await sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
        )
        setpostsData(data)
    } catch (error) {
        console.log(error)
    }},[])
    return (
        <div>
            <h1>Blog !</h1>
            <h3>welcome to my blog posts page!</h3>
            <div>
                {postsData && postsData.map((post,index) =>(
                    <Link to={"/"+post.slug.current} key={post.slug.current}>
                        <span>
                            <img src={post.mainImage.asset.url} alt="mainImage" />
                        </span>
                        <span>
                            <h2>{post.title}</h2>
                        </span>
                    </Link>
                    
                ))}
            </div>

        </div>
    )
}

export default AllPosts
