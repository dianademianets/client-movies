import React, {FC} from 'react';

import './userPage.css'

const RegisterPage: FC = () => {

    return (
        <div className='container'>
            <div className='form_auth'>
                <div className='form_auth__h1'>
                    <h1>Register</h1>
                </div>
                <form>
                    <div className='form-outline mb-4'>
                        <label className='form-label'>First Name</label>
                        <input type='firstName' className='form-control'/>

                    </div>
                    <div className='form-outline mb-4'>
                        <label className='form-label'>Last Name</label>
                        <input type='lastName' className='form-control'/>

                    </div>

                    <div className='form-outline mb-4'>
                        <label className='form-label'>Email address</label>
                        <input type='email' className='form-control'/>

                    </div>
                    <div className='form-outline mb-4'>
                        <label className='form-label'>Password</label>
                        <input type='password' className='form-control'/>

                    </div>

                    <button type='button' className='btn btn-primary btn-block mb-4'>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default RegisterPage;
