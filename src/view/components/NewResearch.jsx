import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '../utils/Utils'

export default function NewResearch(props) {
    return (
        <>
            <div className={classNames((props.isOpen)?'block':'hidden','w-full h-[93vh] bottom-0 z-50 fixed flex items-center justify-center')}>
                <div className='rounded-xl border border-gray-800 border-2 w-[90%] h-[55%] bg-primary-500 drop-shadow-lg shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] flex flex-col p-14 justify-center items-center gap-4 relative | lg:w-[50vw]'>
                    <div className='w-14 h-14 absolute top-4 right-4 flex justify-center rounded-xl border-blue-500 | hover:border hover:cursor-pointer' onClick={() => {
                        props.setIsOpen(false)
                    }}>
                        <XMarkIcon className='h-8 self-center text-secondary-400'/>
                    </div>
                    <div className='text-white text-2xl'>START A NEW CVE EVALUATION</div>
                    <div className='w-full h-min flex flex-row items-center gap-4'>
                        <input title="Input CVE-ID" type="text" className="shadow-inner rounded-md flex-1 h-16 p-2 pl-5" placeholder="e.g.: CVE-2021-44228" />
                        <button title="Search CVE" className="h-16 w-[10vw] p-2 rounded flex justify-center btn" onClick={() => {
                            
                        }}>
                            <MagnifyingGlassIcon className="h-8 self-center" />
                        </button>
                    </div>
                    <div className='text-white text-2xl'>OR</div>
                    <div className='w-full h-full shadow shadow-inner flex flex-col items-center justify-center bg-white rounded-md border border-blue-500 ease-in-out duration-100 p-4 gap-2 | hover:border-4'>
                        <div>Drag & Drop file</div>
                        <div>OR</div>
                        <label for='inputFile' className='btn p-3 rounded-md cursor-pointer'>Select File</label>
                        <input id='inputFile' type='file' className='hidden'/>
                    </div>
                </div>
            </div>
        </>
    )

}