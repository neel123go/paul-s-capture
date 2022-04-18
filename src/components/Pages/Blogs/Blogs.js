import React from 'react';

const Blogs = () => {
    return (
        <div className='container p-4'>
            <h2 className='text-center text-danger my-md-5 my-1'>Questions Answer</h2>
            <div className='my-5'>
                <h3>Difference between authorization and authentication?</h3>
                <p className='text-secondary'>Authentication is about validating user credentials like Username, Email & Password to verify user identity. If a user enters the correct data, the system assumes the identity is valid and grants access. On the other side, Authorization is the process to determine whether the authenticated user has access to the resources. It checks users' rights to grant users access to resources such as databases, information, files, etc. Authentication is done before the authorization process, whereas the authorization process is done after the authentication process.</p>

                <h3 className='mt-5'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='text-secondary'>I use Firebase's Firebase Authentication which allows users to sign in to my website using one or more sign-in methods, including email addresses and password sign-in and federated identifiers such as Google sign-in and Facebook login. I also use Firebase for hosting my website. Firebase Hosting is production-grade web content hosting for developers. With a single command, I can quickly deploy websites and serve both static and dynamic content to a global CDN (content delivery network). I have many options for implementing authentication such as Purse, Back4app, AWS Amplify, Kuzal, Couchbase, etc.</p>

                <h3 className='mt-5'> What other services does firebase provide other than authentication?</h3>
                <p className='text-secondary pb-3'>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. There are many services that Firebase provides other than authentication, Most useful of them are: 1. Cloud Firestore, 2. Cloud Functions, 3. Hosting, 4. Cloud Storage, 5. Google Analytics, 6. Predictions, 7. Cloud Messaging, 8. Dynamic Links, 9. Remote Config etc.</p>
            </div>
        </div>
    );
};

export default Blogs;