import React, { useEffect, useState } from 'react';
import { IPosts } from '../models';
import axios, { AxiosError } from 'axios';

export function usePosts() {
    const [posts, setPosts] = useState<IPosts[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchPosts() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts/1/comments');
            setPosts(response.data)
            setLoading(false)
        } catch(e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return {posts, loading, error}
}