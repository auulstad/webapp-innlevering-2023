//Sjekk notis i README filen. 
import Head from 'next/head'
import { Navigation } from "@/components/Navigation";
import axios from 'axios'
import { useEffect, useState } from 'react';


const ToDo = () => {

  const [toDo, setToDo] = useState([]); 

  const getToDos = async () => {
    const response = await axios.get('/api/todo')
    try {
      if (response?.data?.success) {
          setToDo(response.data.data)
      }
    } catch (error) {
        console.log(error?.response?.data);
    }

    console.log(response)
  } 

  useEffect (() => {
    getToDos()
  }, [])

  

  return (
    <div>
      <Head>
        <title>ToDo-List</title>
      </Head>
      <Navigation/>
      <h1>ToDo - List for i dag</h1>
      <section>
        {JSON.stringify(toDo)}
      </section>
    </div>
  )
}

export default ToDo