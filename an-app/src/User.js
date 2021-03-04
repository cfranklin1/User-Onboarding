import React from 'react';


export default function User(props) {
   const {user} = props


    if (!user) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return(
        <div className='user-container'>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            
            {
                !!user.termsofservice && !!user.termsofservice.length &&
                <div>
                    Terms of Service:
                    <ul>
                        {user.termsofservice.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>

            }
        </div>
    )
}