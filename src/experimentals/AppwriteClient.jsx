import React from 'react'


const AppwriteClient = () => {
    const client = new Client();

    client
      .setEndpoint('https://truenas.mybespokestaff.com:86/v1')
      .setProject('64d9b69830942a9d584f');

      
  return (
    <div>
        <div className="flex flex-col">
            <h1>Appwrite Client Login</h1>
            <form className="flex flex-col">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default AppwriteClient