
import  { useState , useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useNavigate , useParams } from 'react-router-dom';



export default function UpdateBooks() {
  const [title , setTitle] = useState('')
  const [author , setAuthor] = useState("")
  const [publishYear , setPublishYear] = useState("")
  const [loading , setLoading] = useState("false");
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5400/books/${id}`).then((response)=>{
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear)
      setTitle(response.data.title);
      setLoading(false);
    }).catch((error)=>{
      setLoading(false);
      alert("error occured");
      console.log(error);
    })
  },[])
  const handleEditBook = () =>{
    const data = {
      title , author , publishYear
    };
    setLoading(true);
    axios.put(`http://localhost:5400/books${id}` , data).then(()=>{
      setLoading(false);
      navigate("/")
    }).catch((error)=>{
      setLoading(false);
      alert("an error occured");
      console.log(error);
    })
  }

  // 41:07s


  return (
    <div className='p-4'>
      <BackButton>
        <h1 className='text-3xl my-4 '>Update Book</h1>
        {loading ? <Spinner/> : ""}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[6000px] p-4 mx-auto '>
          <div className="my-4">
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input type='text'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>

          <div className="my-4">
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input type='text'
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>

          <div className="my-4">
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input type='text'
            value={publishYear}
            onChange={(e)=>setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>save</button>
        </div>
      </BackButton>
    </div>
  )
}
