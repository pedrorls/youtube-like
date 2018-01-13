import React from 'react';

const VideoListDetails = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={ imageUrl }/>    
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        <h4 className='detailsTitle'>{ video.snippet.title }</h4>
                        <span className='text-muted'>{ video.snippet.description }</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListDetails;