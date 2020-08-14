import React, {useState, useEffect} from 'react';
import postService from "../services/post";
import Post from './Post';
import {swalError} from "../utils/swal";

export default function Posts(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => reload())();
    }, [props.searchKeyword]);

    const reload = async () => {
        await postService.getPostsFromImFollowing(props.searchKeyword || "")
            .then(result => {
                if (result.error) {
                    swalError(result.error);
                    return;
                }

                setData(result.data);
            });
    }

    const renderPosts = () =>
        data.map(post => <Post reload={reload} key={post._id} post={post} />);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                <h4 className="m-4">Feed From I'm Following</h4>
                    {data.length > 0 && renderPosts() || <div style={{margin: '20px'}}>No posts found.</div>}
                </div>
            </div>
        </div>
    );
}