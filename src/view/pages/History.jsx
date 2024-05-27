import { ArrowPathIcon, ArrowTopRightOnSquareIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import NoData from "../components/NoData"
import { classNames, severityMapping } from "../utils/Utils"
import { api_domain } from "../utils/Utils"
import Alert from "../components/Alert"

export default function History() {

    const [result, SetResult] = useState({})
    const [isLoading, SetLoading] = useState(true)
    const [firstLoad, SetFirstLoad] = useState(true)

    // automatically update search
    const [idToSearch, SetIdToSearch] = useState('')
    useEffect(() => {
        read_data()
    }, [idToSearch])

    const read_data = async () => {
        if(firstLoad) SetLoading(true)
        try{
            if(idToSearch != ''){
                const response = await fetch(api_domain + "/api/gethistory?keyword="+idToSearch)
                const data = await response.json()
                SetResult({ history: data })
            }else{
                const response = await fetch(api_domain + "/api/gethistory")
                const data = await response.json()
                SetResult({ history: data })
            }
        }catch{
            console.warn("Error during data fetch!")
            setShowAlert(true)
            setIsError(true)

            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }
        if(firstLoad){
            SetLoading(false)
            SetFirstLoad(false)
        }
    }

    // Alert states
    const [showAlert, setShowAlert] = useState(false)
    const [isError, setIsError] = useState(false)

    return (
        <div className="h-full w-full flex flex-col gap-5 p-5 justify-center">
            {/*Loading placeholder*/}
            {isLoading && <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400 place-self-center" />}

            {/*Result has been fetched*/}
            {Object.keys(result).length != 0 &&
                <>
                    <div className="w-full flex justify-center drop-shadow-[7px_7px_10px_rgba(0,0,0,0.35)] text-secondary-100 font-black text-md | sm:text-6xl">HISTORY</div>
                    <div className="flex gap-3 items-center drop-shadow-md">
                        <MagnifyingGlassIcon className="h-6 text-white" />
                        <input type="text" placeholder="Search..." className="p-1 pl-3 w-min rounded bg-primary-400 text-white" onChange={e => SetIdToSearch(e.target.value)}/>
                    </div>
                    <div className="rounded-lg w-full h-full overflow-auto bg-primary-400 text-secondary-100 drop-shadow-md">
                        {!isLoading &&
                            <table className="table-fixed w-full border-collapse text-center">
                                <thead className="h-[4vh]">
                                    <tr>
                                        <th className="border-b border-r border-blue-300 p-2 pb-4 w-[8vw] | lg:w-[8vw]">Run ID</th>
                                        <th className="border-b border-r border-blue-300 p-2 pb-4 w-[10vw] | lg:w-[8vw]">Date</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[8vw]">Score</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[15vw] | sm:text-balance | lg:w-[7vw]"># Vulnerabilities</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[12vw] | sm:text-balance | lg:w-[7vw]"># Weaknesses</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[8vw] | sm:text-balance | lg:w-[7vw]">State</th>
                                        <th className="border-b border-l border-blue-300 p-2 pb-4 w-[4vw] | lg:w-[2vw]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.history.map(
                                        (entry, index) =>
                                            <>
                                                <tr className={classNames((severityMapping[entry.state.toUpperCase()]).bg, "h-[6vh]")}>
                                                    {/*TO-DO: Add data fetch*/}
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-r border-blue-300 p-2")}>{entry.id}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-r border-blue-300 p-2")}>{new Date(entry.date).toLocaleDateString()}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-x border-blue-300 p-2")}>{entry.score}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-x border-blue-300 p-2")}>{entry.cveCount}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-x border-blue-300 p-2")}>{entry.cweCount}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-x border-blue-300 p-2")}>{entry.state}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-l border-blue-300 p-2 text-secondary-400")}><ArrowTopRightOnSquareIcon className="h-5" /></td>
                                                </tr>
                                            </>
                                    )}
                                </tbody>
                            </table>
                        }
                    </div>
                </>}

            {/*Result has not been fetched or an error occurred*/}
            {Object.keys(result).length == 0 && !isLoading &&
                <>
                    <NoData msg={<>Error during data fetch.<br/>Data might not be available.</>}/>
                </>}
            <Alert msg="Error during data fetch!" show={showAlert} isError={isError}/>
        </div>
    )
}