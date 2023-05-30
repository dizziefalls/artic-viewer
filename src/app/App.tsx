import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from '../common/Header'

export default function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
