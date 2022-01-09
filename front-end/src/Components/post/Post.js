import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../Client";
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)

const urlFor = (source) => {
    return builder.image(source)
}

const Post = () => {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();
    useEffect(async () => {
        try {
            const data = await sanityClient.fetch(
                `*[slug.current == $slug]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },
                    body,
                    "name": author ->name,
                    "authorImage": author -> image
                }`,
                { slug }
            );
            setPostData(data[0]);
        } catch (error) {
            console.log(error);
        }
    }, [slug]);

    if (!postData) return <div>Loading...</div>
    return (
        <div><div>
            <h1>{postData.title}</h1>
            <div><img src={urlFor(postData.mainImage)} alt="mainimg" /></div>
            </div>
            <div>
                <BlockContent
                blocks={postData.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
                />
            </div>
        </div>
    );
};

export default Post;
