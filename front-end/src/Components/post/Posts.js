import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import sanityClient from "../../Client";

const AllPosts = () => {
    const [postsData, setpostsData] = useState(null);
    useEffect(async () => {
        try {
            const data = await sanityClient.fetch(
                `*[_type == "post"]{
                title,
                slug,
                intro,
                publishedAt,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
            );
            setpostsData(data);
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div class="container-lg">
            {postsData &&
                postsData
                .sort((x,y)=>{
                    const date1 = new Date(x.publishedAt)
                    const date2 = new Date(y.publishedAt)
                    return date2-date1
                })
                    .map((post, index) => (
                        <Link
                            class="text-decoration-none"
                            to={"/post/" + post.slug.current}
                            key={post.slug.current}
                        >
                            <div class="container-lg mb-3">
                                <div class="row g-0">
                                    <div class="col-md-2">
                                        <img
                                            src={post.mainImage.asset.url}
                                            alt="noimg"
                                            class="img-fluid rounded-start"
                                        />
                                    </div>
                                    <div class="col-md-10">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {post.title}
                                            </h5>
                                            <p class="card-text">
                                                {post.intro}
                                            </p>
                                            <p class="card-text">
                                                <small class="text-muted">
                                                    {post.publishedAt}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
        </div>
    );
};

export default AllPosts;
