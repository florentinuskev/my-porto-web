import Link from 'next/link'

const Navbar = ({ isSticky }: any) => {
    return (
        <div className={`w-full flex flex-1 flex-row top-0 text-white p-5 items-center border-b-2 bg-gray-600 ${isSticky ? 'sticky' : 'fixed'
            }`}>
            <h1 className='mr-auto ml-5 text-3xl items-center font-bold'>Kevin Gavino</h1>
            <div className='flex flex-row ml-auto mr-5 justify-between items-center'>
                <Link href='/' className='mx-2'><p>Home</p></Link>
                <Link href='/projects' className='mx-2'><p>Programming</p></Link>
                <Link href='/pvgraphy' className='mx-2'><p>Photo and Videography</p></Link>
            </div>
        </div>
    )
}

export default Navbar