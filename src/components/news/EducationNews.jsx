import { useEffect,useState } from "react"


const EducationNews=()=>{
    const[news,setNews]=useState([])
   const  fetchTheNews= async()=>{
       try {
           let response = await fetch("https://news67.p.rapidapi.com/v2/topic-search?languages=%3CREQUIRED%3E&search=%3CREQUIRED%3E", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "news67.p.rapidapi.com",
                "x-rapidapi-key": "9284f03779msh0bce33a5a90af60p1e926fjsn8955d195eabe"
            }
        })
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