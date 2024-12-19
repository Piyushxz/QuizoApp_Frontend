import { Navbar,QuizCard } from "../../components/index"
import { useEffect,useState } from "react"
import axios from "axios"
import "./Home.css"


export const Home = () =>{
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        (async ()=>{
            try{
                const {data:{data}} = await axios.get("https://quizoapp-backend.onrender.com/categories")
                setCategories(data)
            }catch(err){
                console.log(err)
            }
        } )()
    },[])
    return(
        <>
        <Navbar/>
        <main className="main d-flex gap-md wrap align-center justify-center">
        {
            categories.map(category => <QuizCard category={category} key={category.id}></QuizCard>)
        }
        </main>
        </>
        
    )
}