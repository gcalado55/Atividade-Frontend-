import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='bg-white shadow-md py-4 px-8 flex justify-between itens-center'>
      <Link to='/' className='text-x1 font-bold text-blue-600'>
        Store
      </Link>

      <nav className='flex gap-6'>
        <Link to='/' className='text-x1 font-bold text-blue-600'>Home</Link>
        <Link to='/' className='text-x1 font-bold text-blue-600'>Cart</Link>
      </nav>
    </header> 
  );   
}
