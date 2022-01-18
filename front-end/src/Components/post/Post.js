import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../Client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import {Button} from "react-bootstrap"

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
    return builder.image(source);
};

const Post = () => {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();
    useEffect(async () => {
        try {
            const data = await sanityClient.fetch(
                `*[slug.current == $slug]{
                    title,
                    intro,
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

    if (!postData) return <div>Loading...</div>;
    return (
        <div class="container-lg pt-5 border">
            <div class="container-lg border shadow rounded">
                <div class="row">
                    <div class="col-6">
                        <h1 class="display-4 fw-bold">{postData.title}</h1>
                        <h3 class="display-6">{postData.intro}</h3>
                    </div>
                    <div class="col-6">
                        <img
                            src={urlFor(postData.mainImage)}
                            alt="mainimg"
                            style={{ width: "500px" }}
                        />
                    </div>
                </div>
            </div>
            <div
                class="container-sm border mt-5 rounded"
                style={{ maxWidth: "900px" }}
            >
                <BlockContent
                    blocks={postData.body}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                />
            </div>
            <div class="container-lg border mt-5 mb-5">
                
                        <label for="exampleFormControlTextarea1">
                            Add a Comment:
                        </label>
                        <textarea
                            class="form-control mb-2"
                            id="exampleFormControlTextarea1"
                        ></textarea>
                        <Button>add</Button>
            </div>
        </div>
    );
};

export default Post;
