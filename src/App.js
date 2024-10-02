import React,{useEffect,useState} from 'react'
import { AiOutlineSend } from "react-icons/ai";
const url = 'https://www.course-api.com/react-tabs-project'
const App = () => {
  const [Lodding, setLodding] = useState(true);
  const [load, setload] = useState([])
  const [value, setvalue] = useState(0)
const dataFatch = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  setload(data)
  setLodding(false)
}

useEffect(() => {
 
  dataFatch()

},[])

if(Lodding){
  return <h1>Lodding.......</h1>
}
const {order , title, dates , duties ,company} = load[value];
console.log(order);
  return (
    <main>
     <p className='exper'>Experience</p>
  <div className="allContent">
      <div className="catagory ">
        {load.map((e,i)=>{
         return(  <button className={`mt-10 p-2 rounded-md text-3xl flex flex-col ${i===value && 'active-btn'}`}  key={i} onClick={()=>setvalue(i)}>{e.company}</button>)

        })}
      </div>
   
      <div className="content">
        <h1 className=' font-bold text-4xl mb-5'>{title}</h1>
        <p className=' font-bold mb-2 bg-red-400 w-20 text-center rounded-md '>{company}</p>
        <p>{dates}</p>
        <div className="point">
          {duties.map((d,id)=>{
          return (<div key={id} className='job-desc' >
            <AiOutlineSend className=' inline text-rose-300 font-bold text-2xl ' />
           <p className='ml-4 inline'>{d}</p>
          </div>)
          })}
          <button className=' bg-red-600 ml-72 p-4 rounded-md text-white hover:bg-blue-700'>MORE INFO</button>
        </div>
      </div>
      </div>
    </main>
  )
}

export default App
