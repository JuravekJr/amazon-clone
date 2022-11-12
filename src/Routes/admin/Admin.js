import React, { useState } from 'react'
import "./Admin.css"
import {auth, db} from "../../server/firebase"

function Admin() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [type, setType] = useState("watch")
    const [price, setPrice] = useState(0)

    const signOut = ()=>{
        auth.signOut()
    }

    const addProduct = ()=>{ 
        db.collection(type).add({
            img:image,
            name: name,
            price: price
        })
        setName("")
        setImage("")
        setPrice("")
    }

  return (
    <div className='admin'>
        <h1>Admin</h1>
        <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='name' />
        <input value={image} onChange={e=>setImage(e.target.value)} type="text" placeholder='image' />
        <input value={price} onChange={e=>setPrice(e.target.value)} type="number" placeholder='price' />
        <select onChange={(e)=>setType(e.target.value)} >
            <option value="watch">Watch</option>
            <option value="phones">Phones</option>
        </select>
        <button onClick={addProduct}>Add Product</button>

        <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Admin