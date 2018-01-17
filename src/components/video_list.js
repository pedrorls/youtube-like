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
        <ul className='col-md-5 list-group'>
            { videoItems }
        </ul>
    );
}

export default VideoList;