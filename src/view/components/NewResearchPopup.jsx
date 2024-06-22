import { XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '../utils/Utils'
import { redirect } from 'react-router-dom'
import { useState } from 'react'
import Alert from './Alert'

export default function NewResearchPopup(props) {

    const [cve, SetCVE] = useState('')

    // Alert states
    const [showAlert, setShowAlert] = useState(false)
    const [isError, setIsError] = useState(false)

    const start_research = async () => {
        if(cve != ''){
            location.href = '/app/newresearch?cveId=' + cve
        }else{
            console.log('Error during new research')
            setShowAlert(true)
            setIsError(true)

            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }
    }

    return (
        <>
            <div className={classNames((props.isOpen)?'block':'hidden','w-full h-[93vh] bottom-0 z-50 fixed flex items-center justify-center')}>
                <div className='rounded-xl border border-gray-800 border-2 w-[90%] h-[55%] bg-primary-500 drop-shadow-lg shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] flex flex-col p-14 justify-center items-center gap-4 relative | lg:w-[50vw]'>
                    <div className='w-14 h-14 absolute top-4 right-4 flex justify-center rounded-xl border-blue-500 ease-in-out duration-100 | hover:border hover:border-2 hover:cursor-pointer' onClick={() => {
                        props.setIsOpen(false)
                    }}>
                        <XMarkIcon className='h-8 self-center text-secondary-400'/>
                    </div>
                    <div className='text-white text-2xl font-bold'>START A NEW CVE EVALUATION</div>
                    <input title="Input CVE-ID" type="text" value={cve} onChange={(e) => SetCVE(e.target.value)} className="shadow-inner rounded-md flex-1 h-max p-2 pl-5 w-full border border-blue-500 ease-in-out duration-100 | hover:border-4" placeholder="e.g.: CVE-2021-44228" />
                    <div className='text-white text-xl'>OR</div>
                    <div className='w-full h-[15vh] shadow shadow-inner flex flex-col items-center justify-center bg-white rounded-md border border-blue-500 ease-in-out duration-100 p-4 gap-2 | hover:border-4'>
                        <div>Drag & Drop file</div>
                        <div>OR</div>
                        <label for='inputFile' className='btn p-3 rounded-md cursor-pointer'>Select File</label>
                        <input id='inputFile' type='file' className='hidden' disabled/>
                    </div>
                    <button title="Search CVE" className="w-[20vw] p-2 rounded flex justify-center btn text-lg | lg:w-[10vw]" onClick={() => {
                        start_research()
                    }}>
                        START RESEARCH
                    </button>
                </div>
            </div>
            <Alert msg="Error during new research!" show={showAlert} isError={isError}/>
        </>
    )

}