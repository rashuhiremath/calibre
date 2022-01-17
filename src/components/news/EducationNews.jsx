import { useEffect,useState } from "react"


const EducationNews=()=>{
    const[news,setNews]=useState([])
   const  fetchTheNews= async()=>{
       try {
           let response = await fetch("https://newsdata.io/api/1/news?apikey=pub_36729379e349e083b7d02f316e601840d93a&q=education%20and%20research&country=de&language=en&category=technology ")
           
        let data = await response.json()
        console.log(data)
       } catch (error) {
           console.log(error)
       }
   }
   useEffect(()=>{
       fetchTheNews()
   },[])

   return(
       <></>
   )
}
export default EducationNews