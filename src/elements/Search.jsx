import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react"
import { useTimeoutFn } from "react-use"
import NoData from "./utils/NoData"
import InfoBox from "./utils/InfoBox"
import { classNames, camelCaseToString, temp, severityMapping } from "./utils/Utils"

export default function Search() {

    const [isLoading, SetIsLoading] = useState(false)
    const [fetchedData, SetFetchedData] = useState(false)
    const [isDescVisible, SetDescVisible] = useState(true)
    let [, , ResetIsLoading] = useTimeoutFn(() => SetIsLoading(false), 5000)

    return (
        <div className="h-full max-h-full w-full flex flex-col gap-5 p-5">
            <div className="w-full flex justify-center drop-shadow-[7px_7px_10px_rgba(0,0,0,0.35)] text-secondary-100 font-black text-md | sm:text-6xl">SEARCH</div>
            <div className="lg:flex lg:flex-row lg:gap-5 lg:items-center">
                <div className={classNames(isDescVisible ? "" : "hidden", "rounded-lg shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] h-min w-full text-white p-4 text-justify text-lg | lg:w-[30vw]")}>
                    The search function of the App allows users to look-up a specific CVE
                    by inputting its ID in the search bar below. <br /> The system will fetch for any available
                    data through the NVD (National Vulnerability Database), and print summarized, as well as full in-depth, results.
                </div>
                <div className="flex flex-row gap-5 rounded mt-4 items-center | lg:mt-0 lg:gap-2 lg:flex-1">
                    <input title="Input CVE-ID" type="text" className="rounded-md flex-1 p-2 pl-5" placeholder="e.g.: CVE-2021-44228" />
                    <button title="Search CVE" className="h-min w-[10vw] p-2 rounded flex justify-center btn" onClick={() => {
                        SetIsLoading(true)
                        SetDescVisible(false)
                        SetFetchedData(true)
                        ResetIsLoading()
                    }}>
                        <MagnifyingGlassIcon className="h-6" />
                    </button>
                </div>
            </div>
            <div className={classNames(isLoading ? "justify-center" : "", "h-full overflow-auto w-full flex rounded")}>
                {isLoading ? <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400 place-self-center" /> : <CVEResult fetchedData={fetchedData} />}
            </div>
        </div>
    )
}

function CVEResult(params) {

    const [result, SetResult] = useState(temp)

    return (
        <>
            {params.fetchedData == true && <>
                {Object.keys(result).length != 0 &&
                    <div className="text-white h-full w-full flex flex-col gap-4 | lg:flex-row">
                        <div className="flex flex-row gap-4 items-center | lg:w-[30vw] lg:h-full lg:items-start lg:flex-col">
                            <div className="rounded flex flex-1 flex-col p-4 shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] bg-primary-700 | lg:w-full lg:flex-none lg:h-[20vh] lg:gap-1">
                                <b className="text-4xl pb-2">{result.vulnerabilities[0].cve.id}</b>
                                <div>Base Score: <b>{result.vulnerabilities[0].cve.metrics.cvssMetricV31[0]?.cvssData.baseScore.toFixed(1)}</b></div>
                                <div>Severity: <b>{result.vulnerabilities[0].cve.metrics.cvssMetricV31[0]?.cvssData.baseSeverity}</b></div>
                                <div>Last Update: <b>{result.vulnerabilities[0].cve.lastModified.slice(0, 10)}</b></div>
                            </div>
                            <ExclamationTriangleIcon className={classNames((severityMapping[result.vulnerabilities[0].cve.metrics.cvssMetricV31[0]?.cvssData.baseSeverity]).text, "h-32 mr-2 drop-shadow-xl | lg:h-64 lg:self-center")} />
                        </div>
                        <div className="rounded h-full w-full flex flex-col gap-4 overflow-auto">
                            <InfoBox boxTitle="CISA Vulnerability Name" text={result.vulnerabilities[0].cve.cisaVulnerabilityName} />
                            <InfoBox boxTitle="Description" text={result.vulnerabilities[0].cve.descriptions[0].value} />
                            <InfoBox boxTitle="CISA Required Action" text={result.vulnerabilities[0].cve.cisaRequiredAction} />
                            <CVSSBox boxTitle="CVSS Metrics" cvssData={result.vulnerabilities[0].cve.metrics.cvssMetricV31[0].cvssData} />
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

    return (
        <div className="flex flex-col pt-2 h-min h-max-[20vh]">
            <div className="border-b border-blue-300 font-bold text-lg" title={params.boxTitle}>{params.boxTitle}</div>
            <table className="table-auto text-left">
                <tbody>
                    {data.map(
                        (entry) =>
                            <tr><th>{camelCaseToString(entry[0])}</th><td>{entry[1]}</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}