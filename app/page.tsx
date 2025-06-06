import { Button } from '@/components/ui/button'
import { BiSolidCat } from 'react-icons/bi'

function Home() {
  return (
    <>
      <div className='flex bg-dark p-10'>
        <BiSolidCat className='text-4xl text-light' />
        <h1 className='logo text-4xl text-light'>Elessia</h1>
      </div>
      <div className='p-10 mt-10'>
        <Button className='uppercase'>Login</Button>
      </div>
    </>
  )
}

export default Home
