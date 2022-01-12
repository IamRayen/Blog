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
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                }}
            >
                {postsData &&
                    postsData.map((post, index) => (
                        <Link
                            class="text-decoration-none"
                            to={"/post/" + post.slug.current}
                            key={post.slug.current}
                        >
                            <Card style={{ width: "14rem",height:"450px" }}>
                                <Card.Img
                                    style={{height:"200px"}}
                                    variant="top"
                                    src={post.mainImage.asset.url}
                                        alt="noimg"
                                />
                                <Card.Body>
                                    <Card.Title class="text-dark fw-bold fs-4">{post.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default AllPosts;
