import React from 'react';
import Image1 from '../../../images/Albums/album-1.jpg';
import Image2 from '../../../images/Albums/album-2.jpg';
import Image3 from '../../../images/Albums/album-3.jpg';
import Image4 from '../../../images/Albums/album-4.jpg';
import Image5 from '../../../images/Albums/album-5.jpg';
import Image6 from '../../../images/Albums/album-6.jpg';
import Image7 from '../../../images/Albums/album-7.jpg';
import Image8 from '../../../images/Albums/album-8.jpg';
import './Albums.css';

const Albums = () => {
    return (
        <div>
            <h2 className='text-center fs-1 my-5 pt-5'>My <span className='text-danger album-title'>Albums</span></h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 container my-5 mx-auto p-3 p-md-0">
                <div className="col p-0">
                    <a href="https://ibb.co/album/pnWMJZ" target={`_blank`}>
                        <div className="card">
                            <img src={Image1} className="album-img" alt="..." />
                        </div>
                    </a>
                </div>
                <div className="col p-0">
                    <a href="https://ibb.co/album/tMt18J" target={`_blank`}>
                        <div className="card">
                            <img src={Image2} className="album-img" alt="..." />
                        </div>
                    </a>
                </div>
                <div className="col p-0">
                    <a href="https://ibb.co/album/QPwPpC" target={`_blank`}>
                        <div className="card">
                            <img src={Image3} className="album-img" alt="..." />
                        </div>
                    </a>
                </div>
                <div className="col p-0">
                    <a href="https://ibb.co/album/VxPbpS" target={`_blank`}>
                        <div className="card">
                            <img src={Image4} className="album-img" alt="..." />
                        </div>
                    </a>
                </div>
                <div className="col p-0">
                    <a href="https://ibb.co/album/yBGL46" target={`_blank`}>
                        <div className="card">
                            <img src={Image5} className="album-img" alt="..." />
                        </div>
                    </a>
                </div>
                <div className="col p-0">
                    <a href="https://ibb.co/album/cxbd7Q" target={`_blank`}>
                        <div className="card">
                            <img src={Image6} className="album-img" alt="..." />
                        </div>
                    </a>
                </div>
                <div className="col p-0">
                    <a href="https://ibb.co/album/m67WPM" target={`_blank`}>
                        <div className="card">
                            <img src={Image7} className="album-img" alt="..." />
                        </div>
                    </a>
                </div>
                <div className="col p-0">
                    <a href="https://ibb.co/album/LxpS62" target={`_blank`}>
                        <div className="card">
                            <img src={Image8} className="album-img" alt="..." />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Albums;