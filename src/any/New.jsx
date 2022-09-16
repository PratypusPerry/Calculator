import React,{useState} from 'react'

const New = () => {
    const [search, setsearch] = useState("")
  return (
    <>
        <nav>
            <h1 className='navHead'>How You Doin'?</h1>
            <div className='searchB'>
            <input type='text' placeholder='Search Anything' className='searchBar' value={search} onChange={(e)=>{setsearch(e.target.value)}}></input>
            <button className='searBtn'>Search</button>
            </div>
            <ul className='navigationTools'>
                <li><a href='#'>Home</a></li>
                <li className='mainComp'>
                <a href='#'>About</a>
                <ul className='navDrop'>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
                </li>
                <li className='mainComp'><a href='#'>Away</a></li>
                <li className='mainComp'><a href='#'>Some</a></li>
            </ul>
        </nav>
    </>
  )
}

export default New