import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import NoData from "../components/NoData"
import InfoBox from "../components/InfoBox"
import { classNames, camelCaseToString, severityMapping, api_domain} from "../utils/Utils"
import Alert from "../components/Alert"

export default function Search(props) {

    const [isLoading, SetIsLoading] = useState(false)
    const [fetchedData, SetFetchedData] = useState(false)
    const [isDescVisible, SetDescVisible] = useState(true)
    const [cve_id, SetCveID] = useState('')
    const [result, SetResult] = useState({})

    // Alert states
    const [showAlert, setShowAlert] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const cveId = location.href.split('?')[1]?.split('=')[1]
        if(cveId != '' && cveId != null){
            search_data(cveId)
        }
    },[])

    const search_data = async (cveId) => {
        SetIsLoading(true)
        try{
            const response = await fetch(api_domain + "/api/getcve?cveId=" + cveId)
            const data = await response.json()

            SetFetchedData(true)
            SetDescVisible(false)
            SetResult(data)
        }catch{
            console.warn("Error during data fetch!")
            setShowAlert(true)
            setIsError(true)

            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }
        SetIsLoading(false)
    }

    return (
        <div className="h-full max-h-full w-full flex flex-col gap-5 p-5">
            <div className="w-full flex justify-center drop-shadow-[7px_7px_10px_rgba(0,0,0,0.35)] text-secondary-100 font-black text-md | sm:text-6xl">SEARCH</div>
            <div className="lg:flex lg:flex-row lg:gap-5 lg:items-center">
                <div className={classNames((isDescVisible?"":"hidden"),"rounded-lg shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] w-full text-white p-4 text-justify text-lg | lg:w-[30vw]")}>
                The search function of the App allows users to look-up a specific CVE by inputting its ID in the search bar below. <br /> 
                The system will fetch for any available data through the NVD (National Vulnerability Database), and print summarized, as well as full in-depth, results.   
                </div>
                <div className="flex flex-row gap-5 rounded mt-4 items-center | lg:mt-0 lg:gap-2 lg:flex-1">
                    <input title="Input CVE-ID" type="text" className="rounded-md flex-1 p-2 pl-5" placeholder="e.g.: CVE-2021-44228" value={cve_id} onChange={(e) => SetCveID(e.target.value)}/>
                    <button title="Search CVE" className="h-min w-[10vw] p-2 rounded flex justify-center btn" onClick={() => {
                        search_data(cve_id);
                    }}>
                        <MagnifyingGlassIcon className="h-6" />
                    </button>
                </div>
            </div>
            <div className={classNames(isLoading ? "justify-center" : "", "h-full overflow-auto w-full flex rounded")}>
                {isLoading ? <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400 place-self-center" /> : <CVEResult fetchedData={fetchedData} result={result}/>}
            </div>
            <Alert msg="Error during data fetch!" show={showAlert} isError={isError}/>
        </div>
    )
}

function CVEResult(params) {

    const result = params.result
    const getMetrics = () => {
        if(result.metrics.cvssMetricV31 != null){
            return result.metrics.cvssMetricV31[0]
        }else{
            return result.metrics.cvssMetricV2[0]
        }
    }
    const getSeverity = () => {
        if(result.metrics.cvssMetricV31 != null){
            return getMetrics()?.cvssData.baseSeverity
        }else{
            return getMetrics()?.baseSeverity
        }
    }    

    return (
        <>
            {params.fetchedData == true && <>
                {Object.keys(result).length != 0 &&
                    <div className="text-white h-full w-full flex flex-col gap-4 | lg:flex-row">
                        <div className="flex flex-row gap-4 items-center | lg:w-[30vw] lg:h-full lg:items-start lg:flex-col">
                            <div className="rounded flex flex-1 flex-col p-4 shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] bg-primary-700 | lg:w-full lg:flex-none lg:h-[20vh] lg:gap-1">
                                <b className="text-4xl pb-2">{result.id}</b>
                                <div>Base Score: <b>{getMetrics()?.cvssData.baseScore.toFixed(1)}</b></div>
                                <div>Severity: <b>{getSeverity()}</b></div>
                                <div>Last Update: <b>{result.lastModified.slice(0, 10)}</b></div>
                            </div>
                            <ExclamationTriangleIcon className={classNames((severityMapping[getSeverity()]).text, "h-32 mr-2 drop-shadow-xl | lg:h-64 lg:self-center")} />
                        </div>
                        <div className="rounded h-full w-full flex flex-col gap-4 overflow-auto">
                            {result.cisaVulnerabilityName != null &&
                                <InfoBox boxTitle="CISA Vulnerability Name" text={result.cisaVulnerabilityName} />
                            }
                            <InfoBox boxTitle="Description" text={result.descriptions[0].value} />
                            {result.cisaRequiredAction != null &&
                                <InfoBox boxTitle="CISA Required Action" text={result.cisaRequiredAction} />
                            }
                            <CVSSBox boxTitle="CVSS Metrics" cvssData={getMetrics()?.cvssData} />
                        </div>
                    </div>
                }
                {Object.keys(result).length == 0 &&
                    <NoData msg="No data has been found for the given CVE-ID" />
                }
            </>}
            {params.fetchedData == false &&
                <></>
            }
        </>
    )
}

function CVSSBox(params) {

    const dictToArray = Object.entries(params.cvssData)
    const data = params.cvssData.version == "3.1" ? dictToArray.slice(1, dictToArray.length - 3) : dictToArray.slice(1, dictToArray.length - 2)

    const getVersion = () => {
        return params.cvssData.version
    }

    const getVectorString = () => {
        if(getVersion() == '2.0'){
            return "CVSS:2.0/"+params.cvssData.vectorString
        }else{
            return params.cvssData.vectorString
        }
    }

    return (
        <div className="flex flex-col pt-2 h-min h-max-[20vh]">
            <div className="border-b border-blue-300 font-bold text-lg" title={params.boxTitle}>{params.boxTitle}</div>
            <table className="table-auto text-left">
                <tbody>
                    <tr><th>Vector String</th>
                        <td className={classNames((getVersion()=='3.1')?'hover:cursor-pointer hover:text-blue-400':'','font-bold')} onClick={() => {
                            if(getVersion()=='3.1'){
                                location.href = '/app/convert?cvss=' + getVectorString()
                            }
                        }}>{getVectorString()}</td>
                    </tr>
                    {data.map(
                        (entry) =>
                            <tr><th>{camelCaseToString(entry[0])}</th><td>{entry[1]}</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}