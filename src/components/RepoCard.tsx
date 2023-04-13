const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs().format()
dayjs.extend(relativeTime)

import { FaGithub } from 'react-icons/fa';


const RepoCard = ({ repo }: any) => {
    return (
        <div className='h-[150px] md:h-[300px] lg:h-[200px] border rounded relative p-5 hover:cursor-pointer' onClick={() => { window.open(repo.html_url) }}>
            <h3 className='text-2xl font-bold'>{repo.name}</h3>
            <p className='text-lg'>{repo.description}</p>
            <div className='absolute bottom-3 right-0 flex flex-row w-[100%]'>
                <p className='text-gray-200 italic mr-auto ml-5'>Last Commited: {dayjs(repo.pushed_at).fromNow()}</p>
                <FaGithub size={30} className='ml-auto mr-5' />
            </div>

        </div>
    )
}

export default RepoCard