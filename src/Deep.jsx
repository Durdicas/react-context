import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import Deeper from './Deeper'

const Deep = () => {
  const nekakavTekst = useContext(AuthContext)
  return (
    <>
        <div>Deep</div>
        {/*<p>Value of context is: {nekakavTekst}</p>*/}
        <Deeper />
    </>
  )
}

export default Deep