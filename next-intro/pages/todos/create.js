//Sjekk notis i README filen. 
import Head from 'next/head'
import { Navigation } from "@/components/Navigation";
import axios from 'axios'
import { useEffect, useState } from 'react';


const createToDo = () => {

  const [toDo, setToDo] = useState([]); 
  const [error, setError] = useState(null); 

  const handleOppgaveChange = (event) => {
    setQuestion(event.target.value)
  }


  const getToDos = async () => {
    const response = await axios.post('/api/todo')
    try {
      if (response?.data?.success) {
          setToDo(response.data.data)
      }
    } catch (err) {
        setError(err?.response?.data)
    }

    console.log(response)
  } 

  useEffect (() => {
    getToDos()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    await createToDo()
  }

  if (error) {
    return <p>Dette fungerer ikke, noe gikk galt: {error}</p>
  }
  

  return (
    <div>
      <Head>
        <title> Create To Do-List</title>
      </Head>
      <Navigation/>
      <h1>Lage to do listen for i dag</h1>
      <form style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
        <label htmlFor="question">Lag nytt spørsmål</label>
        <input
          oppgaveType="Type oppgave"
          type="text"
          name="question"
          value={question}
          onChange={handleOppgaveChange}
        />
        <button type="submit">Send</button>
      </form>
      <section>
        {JSON.stringify(toDo)}
      </section>
    </div>
  )
}

export default createToDo