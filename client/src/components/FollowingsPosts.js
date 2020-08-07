import React, {useState, useEffect} from 'react';
import postService from "../services/post";
import Post from './Post';
import TopPosts from './TopPosts';
import {swalError, swalSuccess, swalInfo, swalForm, swalLoading} from "../utils/swal";
import session from '../services/session';
import Swal from 'sweetalert2';

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
        <div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <p className="h5" style={{marginTop: '15px'}}>Feed from I'm Following</p>
                    {data.length > 0 && renderPosts() || <div style={{margin: '20px'}}>No posts found.</div>}
                </div>
            </div>
        </div>
    );
}