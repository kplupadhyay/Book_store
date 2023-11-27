import React  , {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate , useParams } from 'react-router-dom'


export default function DeleteBooks() {
  const [loading , setLoading] = useState(false);
  const Navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook = () =>{
    setLoading(true);
    axios.delete(`http://localhost:5400/books/${id}`).then(()=>{
      setLoading(false);
      Navigate("/")
    }).catch((error)=>{
      setLoading(false);
      alert("an error occured");
      console.log(error);
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/>: ""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[6000px] p-8 mx-auto'></div>
      <h3 className='text-2xl'>are you want to delete this book ?</h3>
      <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes,Delete..</button>
    </div>
  )
}
