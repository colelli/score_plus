import { ComputerDesktopIcon, ClipboardIcon, MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { classNames } from '../utils/Utils';

const sidebar_items = [
    {name: 'Dashboard', href: '/dashboard', icon: <ComputerDesktopIcon className='h-6 w-6' aria-hidden='true'/>, id: 'dashboard'},
    {name: 'History', href: '/history', icon: <ClipboardIcon className='h-6 w-6' aria-hidden='true'/>, id: 'history'},
    {name: 'Search', href: '/search', icon: <MagnifyingGlassIcon className='h-6 w-6' aria-hidden='true'/>, id: 'search'},
    {name: 'Convert', href: '/convert', icon: <ArrowPathIcon className='h-6 w-6' aria-hidden='true'/>, id:'convert'}
]

export default function Sidebar(params) {
    return (
        <nav as='nav' className="bg-primary-700 h-full w-1/4 lg:w-2/12 min-w-48">
            <ul className='flex flex-col items-center pt-5 w-full gap-3'>
                {sidebar_items.map(
                    (item) => 
                    <a href={item.href} className={classNames(window.location.pathname == item.href ? 'bg-secondary-700 pointer-events-none current-item' : 'sidebar-item', 
                    'rounded w-[90%] h-[5vh] font-semibold flex items-center p-5')}>
                        <li className='flex gap-2'>
                            {item.icon}
                            {item.name}
                        </li>
                    </a>
                )}
            </ul>
        </nav>
    )
  }