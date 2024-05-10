import { useState } from "react"
import { useTimeoutFn } from "react-use"
import { classNames, camelCaseToString, temp, severityMapping, api_domain } from "../utils/Utils"
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import NoData from "../components/nodata/NoData"
import InfoBox from "../components/infobox/InfoBox"
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid"
import Alert from "../components/Alert"

export default function Convert() {

    const [original, SetOriginal] = useState({})
    const [result, SetResult] = useState({})
    const [isLoading, SetIsLoading] = useState(false)
    const [fetchedData, SetFetchedData] = useState(false)
    const [isDescVisible, SetDescVisible] = useState(true)

    const [vectorString, SetVectorString] = useState('')
    const convert_cvss = async () => {
        SetIsLoading(true)
        try{
            const v4Response = await fetch(api_domain + "/api/convertcvss?vector=" + vectorString)
            const v4Data = await v4Response.json()
            console.log(v4Data)

            const originalRresponse = await fetch(api_domain + "/api/cvssdata?vector=" + vectorString)
            const originalData = await originalRresponse.json()
            console.log(originalData)

            // Set results
            SetResult(v4Data)
            SetOriginal(originalData)
        }catch{
            console.warn("Error during data fetch!")
            setShowAlert(true)
            setIsError(true)

            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }
        SetFetchedData(true)
        SetDescVisible(false)
        SetIsLoading(false)
    }

    // Alert states
    const [showAlert, setShowAlert] = useState(false)
    const [isError, setIsError] = useState(false)

    return (
        <div className="h-full w-full flex flex-col p-5 gap-4">
            <div className="w-full flex justify-center drop-shadow-[7px_7px_10px_rgba(0,0,0,0.35)] text-secondary-100 font-black text-md | sm:text-6xl">CONVERT</div>
            <div className="lg:flex lg:flex-row lg:gap-5 lg:items-center">
                <div className={classNames(isDescVisible ? "" : "hidden", "rounded-lg shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] h-min w-full text-white p-4 text-justify text-lg | lg:w-[30vw]")}>
                    The convert function of the App allows users to obtain an approximated conversion to the new version 4.0 standard of the
                    inputted CVSS version 3.1 or version 2.0 Vector String. <br />
                    This approximated conversion, documented in detail in the thesis material, is useful in the analysis and establishment
                    of an informed-guess and comparison.
                </div>
                <div className="flex flex-row gap-5 rounded mt-4 items-center | lg:mt-0 lg:gap-2 lg:flex-1">
                    <input title="Input CVE-ID" type="text" className="rounded-md flex-1 p-2 pl-5" placeholder="e.g.: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H" value={vectorString} onChange={(e) => SetVectorString(e.target.value)}/>
                    <button title="Search CVE" className="h-min w-[10vw] p-2 rounded flex justify-center btn" onClick={() => {
                        convert_cvss()
                    }}>
                        <MagnifyingGlassIcon className="h-6" />
                    </button>
                </div>
            </div>
            <div className="h-full w-full flex flex-row gap-10 overflow-auto text-white justify-center">
                {isLoading ? <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400 place-self-center" /> : <Conversion fetchedData={fetchedData} originalResult={original} v4Result={result} />}
            </div>
            <Alert msg="Error during CVSS conversion!" show={showAlert} isError={isError}/>
        </div>
    )
}

function Conversion(props) {

    //Original CVSS
    const [originalResult, SetOriginalResult] = useState(props.originalResult)
    const originalToArray = (Object.keys(originalResult).length > 0)? Object.entries(originalResult): null
    //const dataOriginal = (originalToArray != null)? (originalToArray[0] == "3.1" ? originalToArray.slice(1, originalToArray.length - 3) : originalToArray.slice(1, originalToArray.length - 2)) : null
    
    //Converted CVSS
    const [v4Result, SetV4Result] = useState(props.v4Result)
    const dataV4 = (Object.keys(v4Result).length > 0)? Object.entries(v4Result.cvssMetricV4[0]?.cvssData) : null

    return (
        <>
            {props.fetchedData == true &&
                <>
                    {(Object.keys(originalResult).length != 0 && Object.keys(v4Result).length != 0) &&
                        <>
                            <div className="hidden w-[20vw] flex-1 flex-col gap-5 | lg:flex">

                                {/* CVSS 2.0/3.1 CARD */}
                                <div className="w-full h-min rounded-lg bg-primary-700 shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] p-4 flex flex-col text-xl">
                                    <div className="flex flex-row">
                                        <div className="flex-1 items-center">
                                            <b className="text-2xl">CVSS VERSION {originalResult.version}</b>
                                            <div>Base Score: <b>{(originalResult.baseScore).toFixed(1)}</b></div>
                                            <div>Severity: <b>{originalResult.baseSeverity}</b></div>
                                        </div>
                                        <ExclamationTriangleIcon className={classNames(severityMapping[originalResult.baseSeverity].text,"h-28")} />
                                    </div>
                                </div>

                                {/* CVSS 4.0 CARD */}
                                <div className="w-full h-min rounded-lg bg-primary-700 shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] p-4 flex flex-col text-xl">
                                    <div className="flex flex-row">
                                        <div className="flex-1 items-center">
                                            <b className="text-2xl">CVSS VERSION 4.0</b>
                                            <div>Base Score: <b>{(v4Result.cvssMetricV4[0].cvssData.version).toFixed(1)}</b></div>
                                            <div>Severity: <b>{v4Result.cvssMetricV4[0].cvssData.baseSeverity}</b></div>
                                        </div>
                                        <ExclamationTriangleIcon className={classNames(severityMapping[dataV4[dataV4.length - 1][1]].text,"h-28")} />
                                    </div>
                                </div>

                            </div>
                            <div className="h-full w-full rounded-lg overflow-auto bg-primary-700 | lg:w-fit">
                                <div className="flex flex-col h-full w-[35vw] gap-2 | lg:w-[25vw]">
                                    <div className="text-secondary-400 font-bold text-xl sticky top-0 bg-primary-700 text-center drop-shadow-[0_2px_15px_rgba(255,255,2555,0.07)]">Original CVSS</div>
                                    <div className="h-full overflow-auto p-2">
                                        {originalToArray.map(
                                            (entry) =>
                                                <InfoBox boxTitle={camelCaseToString(entry[0])} text={entry[1]} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-full overflow-auto rounded-lg bg-primary-700 | lg:w-fit">
                                <div className="flex flex-col h-full w-[35vw] gap-2 | lg:w-[25vw]">
                                    <div className="text-secondary-400 font-bold text-xl sticky top-0 bg-primary-700 text-center drop-shadow-[0_2px_15px_rgba(255,255,2555,0.07)]">Version 4.0 CVSS</div>
                                    <div className="h-full overflow-auto p-2">
                                        {dataV4.map(
                                            (entry) =>
                                                <InfoBox boxTitle={camelCaseToString(entry[0])} text={entry[1]} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {(Object.keys(originalResult).length == 0 || Object.keys(v4Result).length == 0) &&
                        <NoData msg="Process failed during CVSS conversion." />
                    }
                </>
            }
            {props.fetchedData == false &&
                <></>
            }
        </>
    )
}