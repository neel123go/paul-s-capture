import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../Firebase.init';

const CheckOut = () => {
    const { checkoutId } = useParams();
    const [user] = useAuthState(auth);
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const address = e.target.homeAddress.value;
        const phoneNumber = e.target.phoneNumber.value;

        if (address === '' || phoneNumber === '') {
            setError('Field must not be empty');
        } else {
            setSubmit(true);
            setError('');
        }
    }

    return (
        <div>
            {
                submit ? <p className='fs-3 text-center pt-5 text-primary' style={{ height: '70vh' }}>Thank you for the booking.</p>
                    :
                    <div className='container mx-auto border border-danger rounded-3 p-md-5 p-3 my-5 form-container'>
                        <form onSubmit={handleSubmit}>
                            <h2 className='mb-4'>Please Purchase</h2>
                            <p className='text-danger'>{error}</p>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input value={user?.displayName} readOnly type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input value={user?.email} readOnly type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" autoComplete='off' name='homeAddress' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input type="number" name='phoneNumber' className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
            }
        </div>
    );
};

export default CheckOut;