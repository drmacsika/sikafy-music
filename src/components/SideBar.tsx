import React from 'react'
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    HeartIcon,
    RssIcon,
    PlusCircleIcon,
} from '@heroicons/react/outline'

const SideBar: React.FC = () => {
    return (
        <>
            <section className='text-gray-500 p-5 text-sm border-r border-gray-900'>
                <div className='space-y-4'>
                    {/* Upper Main Navigation Buttons */}
                    <button className='flex items-center space-x-2 hover:text-white'>
                        <HomeIcon className='h-5 w-5' />
                        <p>Home</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-white'>
                        <SearchIcon className='h-5 w-5' />
                        <p>Search</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-white'>
                        <LibraryIcon className='h-5 w-5' />
                        <p>Your Library</p>
                    </button>
                    <hr className='border-t-[0.2px] border-gray-900' />
                    
                </div>
            </section>
        </>
    )
}

export default SideBar
