import {useState , useEffect} from 'react'

const useFetch = (url) => {
  const [data , setData] = useState('')
  const [isLoading , setIsLoading] = useState(true)
  const [error , setError] = useState(false)

  useEffect (()=>{
    fetch(url)
    .then ( res => {
      if(!res.ok) {throw Error ('colud not fetch data')}
      return res.json()
    })
    .then (data => {
      setData(data)
      setIsLoading(false)
      setError(null)
    })
    .catch( err => {
      setIsLoading(false)
      setError(err.message)
    })
  } , [url])
  return { data , isLoading , error}
}

export default useFetch
