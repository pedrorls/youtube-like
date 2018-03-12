import React from 'react';
import VideosListItem from './video_list_details';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return(
            <VideosListItem
                onVideoSelect={props.onVideoSelect}
                key={ video.etag } 
                video={ video } 
            />
        );
    })
    return(
        <ul className='col-lg-5 col-md-4 col-sm-12 list-group'>
            { videoItems }
        </ul>
    );
}

export default VideoList;