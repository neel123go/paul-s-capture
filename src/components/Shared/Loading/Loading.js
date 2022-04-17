import React from 'react';
import LoadingImg from '../../../images/loading/loading.gif';

const Loading = () => {
    return (
        <div className='w-50 mx-auto'>
            <img className='mt-5' src={LoadingImg} alt="" />
        </div>
    );
};

export default Loading;