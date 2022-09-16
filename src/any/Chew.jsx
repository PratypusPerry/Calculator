import React,{useState} from 'react'
// import  ReactDOM from 'react'


const Chew = () => {
        const [first, setfirst] = useState("")
        const [second, setsecond] = useState("")
        const [Result, setresults] = useState("")
 return(<>
    <h1 className='Input'>Multiple Inputs</h1>
    <div className='Form'>

            <input type="text" placeholder='First Number' value={first} onChange={(e)=>{setfirst(e.target.value)}} id='f0rst'></input>
            <input type="text" placeholder='Second Number'  value={second} onChange={(e)=>{setsecond(e.target.value)}} id='s0end'></input>
            <br/>
            <button className='SumTwo' onClick={()=>{if(first!=="" && second!==""){setresults(`The Sum of ${first} and ${second} is ${parseInt(first)+parseInt(second)}`)}}}>Sum</button>
            <button className='SubTwo' onClick={()=>{if(first!=="" && second!==""){setresults(`The Difference between ${first} and ${second} is ${parseInt(first)-parseInt(second)}`)}}}>Sub</button>
            <button className='MulTwo' onClick={()=>{if(first!=="" && second!==""){setresults(`The product of ${first} and ${second} is ${parseInt(first)*parseInt(second)}`)}}}>Mul</button>
            <button className='DivTwo' onClick={()=>{if(first!=="" && second!==""){setresults(`The Quotient of ${first} and ${second} is ${parseInt(first)/parseInt(second)}`)}}}>Div</button>
        
    <div className='Results'>
        {Result}
        <br/>
        <button className='Reset' onClick={()=>{setfirst("");setsecond("");setresults("")}}>Reset</button>
    </div>
    </div>
        </>)
  
}

export default Chew