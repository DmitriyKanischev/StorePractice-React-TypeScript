import React from "react";
import { usePosts } from "../hooks/PostsHooks";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/Error";
import { Post } from "../components/Post";
import { Navigation } from "../components/Navigation";

export function FeedbackPage() {
    const {posts, loading, error} = usePosts();
    
    return(
        <>
            <Navigation/>
            <h1 className="font-bold mb-4 text-5xl text-center text-cyan-500">Feedback from buyers:</h1>
            <div className='container mx-auto max-w-5xl flex flex-col pt-5'>
                { loading && <Loader/> }
                { error && <ErrorMessage error={error}/>}
                { posts.map(post => <Post post={post} key={post.id}/>) }
            </div>
        </>
    )
}