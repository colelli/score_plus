import { ExclamationTriangleIcon, PlusIcon, MinusIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"
import NoData from "../components/NoData"
import InfoBox from "../components/InfoBox"
import { classNames, severityMapping, api_domain } from "../utils/Utils"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { render } from "react-dom"

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
                    list: values,
                    mode: modes.indexOf(selectedRadioBtn)
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

    // Radio button menu
    const modes = ['Basic', 'Impact based', 'Exploitability based', 'Severity based', 'CWE based']
    const [selectedRadioBtn, SetSelectedRadioBtn] = useState(modes[2])
    useEffect(() => {
        update_values()
    }, [selectedRadioBtn])

    return (
        <div className={classNames(isLoading?'h-full':'h-min', 'max-h-full w-full flex flex-col gap-5 p-5 items-center justify-center')}>
            {/*Loading placeholder*/}
            {isLoading && <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400" />}

            {Object.keys(result).length != 0 &&
                <>
                    <div className="w-full flex justify-center drop-shadow-[7px_7px_10px_rgba(0,0,0,0.35)] text-secondary-100 font-black text-md | sm:text-6xl">DASHBOARD</div>
                    <div className="flex flex-1 gap-5 flex-col lg:flex-row overflow-y-auto">
                        
                        {/*Dashboard Summary Card*/}
                        <div className="flex flex-col gap-4">
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
                            <div className="h-min w-full shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] text-white rounded-md flex flex-col items-center justify-center gap-2 p-4 | sm:w-full | lg:flex-col lg:py-6 lg:w-[20vw]">
                                <div className='font-bold text-secondary-100 w-full p-0' title='Score Calculation Modes'>SCORE CALC. MODES</div>
                                <div className="flex flex-row gap-6 w-full | lg:flex-col lg:gap-2">
                                    {modes.map(
                                        (mode) =>
                                        <div className="flex gap-1 w-max h-6 items-center">
                                            <input type="radio" value={mode} name='mode' checked={mode == selectedRadioBtn} onChange={() => SetSelectedRadioBtn(mode)}/>
                                            <label className={(mode == selectedRadioBtn)?'text-secondary-400 font-bold':''}>{mode}</label>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/*Dashboard Table*/}
                        <div className="h-[80vh] max-h-full text-secondary-100 items-start p-1 flex flex-1 rounded-md bg-primary-400 overflow-y-auto overflow-x-hidden | sm:w-full | lg:w-auto">
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