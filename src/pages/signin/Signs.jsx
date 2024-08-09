import React from 'react'
import { Link } from 'react-router-dom'

const Signs = () => {
  return (
    <section className='form'>
      <h1>Sign In To Your Account</h1>
      <form action="Post">
        <input type="text" name='' placeholder='Email Address' required />
        <input type="text" name='name' placeholder='Passoword' required />
       <Link to ="/dashboard"><button>Sign In</button></Link>
        <p>Dont have an account? <span><a href="">Create one now</a></span></p>
      </form>
      
      
    </section>
  )
}

export default Signs
