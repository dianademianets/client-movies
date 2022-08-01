import {FC} from 'react';

import './video.css'

let videoUrl;

const Video: FC<{ videoKey: string }> = ({videoKey}) => {

    videoUrl = `https://www.youtube.com/embed/${videoKey}`;

    return (
        <div>
            <iframe
                src={videoUrl}
                allow='autoplay; encrypted-media'
                title='video'
                className='video__wrap'
            />
        </div>
    );
};

export {Video};
