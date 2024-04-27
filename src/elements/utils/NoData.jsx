import { FaceFrownIcon } from "@heroicons/react/16/solid"

const defaultMsg = 'No data available, please start a new research'

export default function NoData(params) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="py-9 h-min shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] rounded-xl flex flex-col items-center justify-center h-[40vh] w-[50vw]">
                <FaceFrownIcon className="text-secondary-400 w-[20vw]" />
                <div className="text-primary-200 text-2xl px-6 text-center">
                    <b className="text-red-400 font-black">Error: </b>{(params.msg == '' || params.msg == null) ? defaultMsg : params.msg}
                </div>
            </div>
        </div>
    )
}