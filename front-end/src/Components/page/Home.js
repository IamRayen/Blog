import React from "react";
import AllPosts from "../post/Posts";
import Signup from "../user/Signup";
import { useSelector } from "react-redux";

function Home() {
    const isLogged = useSelector(state => state.creds)
    return (
        <div>
        <section
            style={{
                backgroundColor: "#4267b2",
                minHeight:"90vh",
                maxWidth:"100%",
            }}
        >
            <div class="container-xl pt-4">
                <div class="row justify-content-center">
                    <div
                        class="col-md-5 text-center text-md-start "
                        style={{ color: "white" }}
                    >
                        <div class="mb-4">
                            <h1 class="display-1 fw-bold">
                                Welcome to our Blog!
                            </h1>
                        </div>
                        <div class="shadow-lg p-4">
                            <p class="display-6 pb-2 ps-3 shadow-lg">
                                Here you can learn Web development in a{" "}
                                <span class="fw-bold">simpler</span> way.
                            </p>
                        </div>
                    </div>
                    {isLogged ? <div class="col p-5 container-lg display-2 text-center" style={{color:"white"}}>We are glad to have you here Developer!<i class="bi bi-check-lg"></i></div>:<div class="col p-5 container-lg ">
                        <Signup />
                    </div>}
                    
                </div>
                <div class="Row text-center mt-5">
                        <h1>Check out Our posts</h1>
                        <h1><i class="bi bi-arrow-down-circle-fill "></i></h1>
                    </div>
            </div>
        </section>
        <section
        style={{
            backgroundColor: "white",
            minHeight:"90vh",
            width:"100%",
        }}>
            <div class="container-lg">
            <h1 class="m-4">Recent</h1>
            <AllPosts/>
            </div>
          
        </section>
        </div>

    );
}

export default Home;
