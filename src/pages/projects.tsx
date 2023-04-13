import RepoCard from "@/components/RepoCard"
import Navbar from "@/components/Navbar"

const projects = ({ data }: any) => {

    return (
        <div className='bg-gray-600 h-[100%]'>
            <Navbar isSticky={true} />
            <div className='flex flex-col h-[100%] text-white p-10'>
                <h1 className='text-7xl font-bold'>Programming</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    <div className="rounded-xl border p-5">
                        <h2 className="text-2xl font-bold">Programming Background</h2>
                        <p className="text-xl text-justify">Since the Elementary School, I have been code a program for SA-MP Gamemode. After encounter that, I was moving on to another programming languages such as C, C#, Java, Javascript, Python, and More!</p>
                    </div>
                    <div className="rounded-xl border p-5">
                        <h2 className="text-2xl font-bold">Programming Languages</h2>
                        <div className="grid grid-cols-2 text-xl">
                            <ol>
                                <li>- C</li>
                                <li>- C#</li>
                                <li>- Java</li>
                            </ol>
                            <ol>
                                <li>- Javascript</li>
                                <li>- Python</li>
                                <li>- Golang</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="border rounded-xl p-5 mt-5">
                    <h2 className="text-2xl font-bold">Programming Projects</h2>
                    <p className='text-xl'>There are several programming projects that I have been created and working on right now. These are several projects that I have been working on:</p>
                    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                        {data.map((repo: any, i: any) => (<RepoCard repo={repo} key={i} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/users/florentinuskev/repos?sort=pushed`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default projects