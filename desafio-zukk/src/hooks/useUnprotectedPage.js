import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToRegisteredCustomers } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToRegisteredCustomers(history)
    }
  }, [history])
}

export default useUnprotectedPage