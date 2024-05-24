import { ExclamationTriangleIcon, PlusIcon, MinusIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"
import NoData from "../components/NoData"
import InfoBox from "../components/InfoBox"
import { classNames, severityMapping, api_domain } from "../utils/Utils"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { render } from "react-dom"

const description = "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default. From version 2.16.0 (along with 2.12.2, 2.12.3, and 2.3.1), this functionality has been completely removed. Note that this vulnerability is specific to log4j-core and does not affect log4net, log4cxx, or other Apache Logging Services projects."

export default function Dashboard() {

    const [result, SetResult] = useState({})
    const [overallScore, SetOverallScore] = useState(0.0)
    const [isLoading, SetIsLoading] = useState(true)

    // Alert states
    const [showAlert, setShowAlert] = useState(false)
    const [isError, setIsError] = useState(false)

    const get_dashboard = async () => {
        SetIsLoading(true)
        try{
            const response = await fetch(api_domain + "/api/getdashboard")
            const data = await response.json()
            console.log(response)
            console.log(data)

            SetResult(data)
            SetOverallScore(data.score.toFixed(1))
        }catch{
            notify_error();
        }
        SetIsLoading(false)
    }

    const notify_error = () => {
        console.warn("Error during data fetch!")
        setShowAlert(true)
        setIsError(true)

        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    }

    useEffect(() => {
        get_dashboard()
    }, [])

    let values = [];
    const update_values = async () => {
        let checkboxes = document.querySelectorAll('input[name="cve"]:checked');
        values = [];
        checkboxes.forEach(checkbox => {
            values.push(checkbox.id)
        })
        try{
            const newScore = await fetch(api_domain + '/api/updatedashboard',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({
                    list: values
                })
            })
            const data = await newScore.json()
            console.log(data)
            SetOverallScore(data.newScore.toFixed(1))
        }catch{
            notify_error();
        }
    }

    const toggleCollapsible = (cveId) => {
        let item = document.querySelector('div[id="collapsible-' + cveId + '"]')
        let target = document.querySelector('div[id="' + cveId + '"]')

        if(item.hasAttribute('data-visible')){
            item.setAttribute('show', 'false')
            render(<>
                <div className="flex-1 font-bold">Mitigations</div>
                <PlusIcon className="h-5"/>
            </>, target)
        }else{
            item.setAttribute('show', 'true')
            render(<>
                <div className="flex-1 font-bold">Mitigations</div>
                <MinusIcon className="h-5"/>
            </>, target)
        }
        item.toggleAttribute('data-visible')
    }

    return (
        <div className={classNames(isLoading?'h-full':'h-full', 'w-full flex flex-col gap-5 p-5 items-center justify-center')}>
            {/*Loading placeholder*/}
            {isLoading && <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400" />}

            {Object.keys(result).length != 0 &&
                <>
                    <div className="w-full flex justify-center drop-shadow-[7px_7px_10px_rgba(0,0,0,0.35)] text-secondary-100 font-black text-md | sm:text-6xl">DASHBOARD</div>
                    <div className="flex flex-1 gap-5 flex-col lg:flex-row">
                        
                        {/*Dashboard Summary Card*/}
                        <div className="h-min shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] text-white rounded-md flex flex-col items-center justify-center gap-10 p-4 | sm:w-full sm:flex-row | lg:flex-col lg:py-10 lg:w-[20vw]">
                            <div id='last-score' className="font-bold text-8xl">
                                {overallScore}
                            </div>
                            <ul className="flex flex-col self-start">
                                <b className="text-secondary-100">Vulnerabilities</b>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className={classNames(severityMapping['CRITICAL'].fill,"h-5")} />
                                    Critical: <b>{result.criticalVuln}</b>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className={classNames(severityMapping['HIGH'].fill,"h-5")} />
                                    High: <b>{result.highVuln}</b>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className={classNames(severityMapping['MEDIUM'].fill,"h-5")} />
                                    Medium: <b>{result.mediumVuln}</b>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className={classNames(severityMapping['LOW'].fill,"h-5")} />
                                    Low: <b>{result.lowVuln}</b>
                                </li>
                            </ul>
                            <ul className="flex flex-col self-start">
                                <b className="text-secondary-100">Weaknesses</b>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className={classNames(severityMapping['CRITICAL'].fill,"h-5")} />
                                    Primary: <b>{result.primaryWeak}</b>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className={classNames(severityMapping['MEDIUM'].fill,"h-5")} />
                                    Secondary: <b>{result.secondaryWeak}</b>
                                </li>
                            </ul>
                        </div>

                        {/*Dashboard Table*/}
                        <div className="h-[80vh] max-h-full text-secondary-100 items-start p-1 flex flex-1 rounded-md bg-primary-400 overflow-y-auto | sm:w-full | lg:w-auto">
                            <table className="table-fixed w-full border-collapse text-center">
                                <thead className="h-[4vh]">
                                    <tr>
                                        <th className="border-b border-r border-blue-300 p-2 pb-4 w-[15vw] | lg:w-[8vw]">CVE-ID</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[20vw] | lg:w-[30vw]">Description</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[9vw] | sm:text-balance | lg:w-[6vw]">Base Score</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[9vw] | sm:text-balance | lg:w-[6vw]">Impact Score</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[9vw] | sm:text-balance | lg:w-[6vw]">Severity Score</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[4vw] | lg:w-[2vw]"></th>
                                        <th className="border-b border-l border-blue-300 p-2 pb-4 w-[4vw] | lg:w-[3vw]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.cveList.map(
                                        (cve, index) =>
                                            <>
                                                <tr className="h-[9vh]" onClick={() => {console.log("show mitigations")}}>
                                                    {/*TO-DO: Add data fetch*/}
                                                    <td className={classNames((index != result.cveList.length-1)?"border-b":"","border-r border-blue-300 p-2")}>
                                                        <a href={"https://nvd.nist.gov/vuln/detail/" + cve.id} target="_blank" rel="noopener noreferrer">{cve.id}</a>
                                                    </td>
                                                    <td className={classNames((index != result.cveList.length-1)?"border-b":"","border-x border-blue-300 p-2")}>
                                                        <div className="text-left line-clamp-3" title={cve.desc}>
                                                            {cve.desc}
                                                        </div>
                                                    </td>
                                                    <td className={classNames((index != result.cveList.length-1)?"border-b":"","border-x border-blue-300 p-2")}>{cve.baseScore}</td>
                                                    <td className={classNames((index != result.cveList.length-1)?"border-b":"","border-x border-blue-300 p-2")}>{cve.impactScore}</td>
                                                    <td className={classNames((index != result.cveList.length-1)?"border-b":"","border-x border-blue-300 p-2")}>{cve.severity}</td>
                                                    <td className={classNames((index != result.cveList.length-1)?"border-b":"","border-x border-blue-300 p-2 text-4xl")}>
                                                        <ExclamationTriangleIcon className={classNames(severityMapping[String(cve.severity).toUpperCase()].fill,"h-5")} />
                                                    </td>
                                                    <td className={classNames((index != result.cveList.length-1)?"border-b":"","border-l border-blue-300 p-2")}>
                                                        <input type="checkbox" name='cve' className="w-6 h-6" onChange={() => {
                                                            update_values()
                                                        }} id={cve.id}/>
                                                    </td>
                                                </tr>
                                                <div className="h-min w-[73.7vw] bg-primary-500 text-left text-gray-400 pt-2 px-2 mb-2 | lg:w-[61.7vw]">
                                                        <div className="flex flex-row items-center pb-2 | hover:cursor-pointer" id={cve.id} onClick={(e) => {
                                                            toggleCollapsible(e.currentTarget.id)
                                                        }}>
                                                            <div className="flex-1 font-bold">Mitigations</div>
                                                            <PlusIcon className="h-5"/>
                                                        </div>
                                                        <div className='collapsible ease-in-out duration-300 overflow-auto' id={'collapsible-' + cve.id} show='false'>
                                                            
                                                            {/* Mitigations infoboxes */}
                                                            {cve.cwes.length != 0 && cve.cwes.map (
                                                                (cwe) => 
                                                                    {return Object.keys(cwe).length != 0 && 
                                                                        <div className="w-full h-full pr-2">
                                                                            <div className="text-2xl text-white font-bold pb-6">{cwe.id} - {cwe.name}</div>
                                                                                {cwe.mitigations.map(
                                                                                    (mit) =>
                                                                                        <div className="flex flex-col gap-6">
                                                                                                {Object.entries(mit).map(
                                                                                                (entry) => {
                                                                                                    if(entry[1] != null){
                                                                                                        return <InfoBox boxTitle={entry[0]} text={entry[1]} />
                                                                                                    }
                                                                                                }
                                                                                            )}
                                                                                        </div>
                                                                                )}
                                                                        </div>
                                                                    }
                                                            )}

                                                        </div>
                                                </div>
                                            </>
                                    )}                                  
                                </tbody>
                            </table>
                        </div>

                    </div>
                </>}

            {Object.keys(result).length == 0 && !isLoading &&
                <>
                    <NoData></NoData>
                </>}

        </div>
    )
}