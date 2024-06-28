import { ExclamationTriangleIcon, PlusIcon, MinusIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"
import NoData from "../components/NoData"
import InfoBox from "../components/InfoBox"
import { classNames, severityMapping, cweExploitabilityMapping, api_domain } from "../utils/Utils"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { render } from "react-dom"

export default function Dashboard() {

    const [result, SetResult] = useState({})
    const [resultCWEs, SetResultCWEs] = useState({})
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

            //retrieve cwe data
            var dict = {}
            for(var i=0; i < data.cveList.length; i++){
                var icwes = data.cveList[i].cwes
                for(var j=0; j < icwes.length; j++){
                    if(!(icwes[j] in dict)){
                        var d = await retrieve_cwe(icwes[j])
                        if(d != {}){
                            dict[icwes[j]] = d
                        }
                    }
                }
            }

            SetResult(data)
            SetResultCWEs(dict)
            SetOverallScore(data.score.toFixed(1))
        }catch{
            notify_error();
        }
        SetIsLoading(false)
    }

    const retrieve_cwe = async (cwe) => {
        try{
            const response = await fetch(api_domain + "/api/getcwe?cweId="+cwe)
            const data = await response.json()
            return data
        }catch(e){
            console.log(e)
        }
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

    //checkboxes and updating logic
    let solvedCWEs = [];
    let values = [];
    const update_values_cve = async (e) => {
        //Get all checked CVE boxes
        let checkedBoxes = document.querySelectorAll('input[name="cve"]:checked');
        let checkedIds = []
        checkedBoxes.forEach(val => checkedIds.push(val.id))

        //Get all CVE boxes, excluded the disabled ones
        let allBoxes = document.querySelectorAll('input[name="cve"]:not(:disabled)');
        solvedCWEs = [];
        checkedBoxes.forEach(box => {

            //check if unchecked for ignore list
            let ignoreMe = [];
            if(!e.target.checked){
                result.cveList.forEach(cve => {
                    //cycle through all cves
                    if(cve.id == e.target.id && checkedIds.every(val => val != e.target.id)){
                        cve.cwes.forEach(cwe => {
                            ignoreMe.push(cwe)
                        })
                    }
                })
            }

            //cycle through every checked box
            result.cveList.forEach(cve => {
                //cycle through all cves
                if(cve.id == box.id){
                    cve.cwes.forEach(cwe => {
                        if(!ignoreMe.includes(cwe)){
                            solvedCWEs.push(cwe)
                        }
                    })
                }
            })

        })

        values = []
        allBoxes.forEach(checkbox => {
            checkbox.checked = false;
            result.cveList.forEach(cve => {
                if(cve.id == checkbox.id){
                    if(cve.cwes.every(val => solvedCWEs.includes(val))){
                        checkbox.checked = true;
                        values.push(checkbox.id);
                    }else{
                        checkbox.checked = false;
                        values.filter(val => val != checkbox.id);
                    }
                }
            })
        })

        update_values();

    }

    const update_values_cwe = async (e) => {
        //Get alla checked CWE boxes
        let checkedBoxes = document.querySelectorAll('input[name="cwe"]:checked');
        solvedCWEs = []
        checkedBoxes.forEach(val => solvedCWEs.push(val.id))

        values = []
        result.cveList.forEach(cve => {
            if(cve.cwes.every(cwe => solvedCWEs.includes(cwe)) && cve.cwes.length != 0){
                values.push(cve.id);
            }else{
                values.filter(val => val != cve.id);
            }
        })

        update_values();

    }

    const update_values = async () => {
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
            SetOverallScore(data.newScore.toFixed(1))
        }catch{
            notify_error();
        }
    }

    // Radio button menu
    const modes = ['Basic', 'Impact', 'Exploitability', 'Severity', 'CWE', 'Assets']
    const [selectedRadioBtn, SetSelectedRadioBtn] = useState(modes[2])
    useEffect(() => {
        update_values_cve()
    }, [selectedRadioBtn])

    // Table mode
    const [isCVETableStyle, SetIsCVETableStyle] = useState(true)

    return (
        <div className={classNames(isLoading?'h-full':'h-min', 'max-h-full w-full flex flex-col gap-5 p-5 items-center justify-center')}>
            {/*Loading placeholder*/}
            {isLoading && <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400" />}

            {Object.keys(result).length != 0 && !isLoading &&
                <>
                    <div className="w-full flex justify-center drop-shadow-[7px_7px_10px_rgba(0,0,0,0.35)] text-secondary-100 font-black text-md | sm:text-6xl">DASHBOARD</div>
                    <div className="w-full flex flex-1 gap-5 flex-col lg:flex-row overflow-hidden">
                        
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
                                        <div className="flex gap-1 w-max h-6 items-center" onClick={() => SetSelectedRadioBtn(mode)}>
                                            <input className='hover:cursor-pointer' type="radio" value={mode} name='mode' checked={mode == selectedRadioBtn} onChange={() => SetSelectedRadioBtn(mode)}/>
                                            <label className={classNames((mode == selectedRadioBtn)?'text-secondary-400 font-bold':'','hover:cursor-pointer')}>{mode}</label>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                                    
                        <div className="flex flex-col gap-4 w-full overflow-auto">
                            {/*Table Mode Toggle*/}
                            <label className="py-1 inline-flex items-center cursor-pointer self-end">
                                <span className="me-3 text-sm font-medium text-white">CVE</span>
                                <input type="checkbox" value="" className="sr-only peer" onChange={() => SetIsCVETableStyle(!isCVETableStyle)}/>
                                <div class="relative w-11 h-6 bg-primary-300 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500" />
                                <span className="ms-3 text-sm font-medium text-white">CWE</span>
                            </label>

                            {/*Dashboard Table*/}
                            <div className="h-[80vh] max-h-full text-secondary-100 items-start p-1 flex flex-1 rounded-md bg-primary-400 overflow-y-auto overflow-x-hidden | sm:w-full | lg:w-auto">
                                {isCVETableStyle && <CVETable result={result} update_values={update_values_cve} resultCWEs={resultCWEs}/>}
                                {!isCVETableStyle && <CWETable result={result} update_values={update_values_cwe} resultCWEs={resultCWEs}/>}
                            </div>
                        </div>
                
                    </div>
                </>}

            {Object.keys(result).length == 0 && !isLoading &&
                <>
                    <NoData/>
                </>}

        </div>
    )
}

function CVETable(props){

    //mitigations
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
    const checkMitigations = (data) => {
        if(data.cwes.length == 0){
            return false;
        }else{
            return true;
        }
    }

    return(
        <>
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
                    {props.result.cveList.map(
                        (cve, index) =>
                            <>
                                <tr className="h-[9vh]">
                                    {/*TO-DO: Add data fetch*/}
                                    <td className="border-t border-r border-blue-300 p-2">
                                        <a href={"https://nvd.nist.gov/vuln/detail/" + cve.id} target="_blank" rel="noopener noreferrer" className="hover:!text-blue-400">{cve.id}</a>
                                    </td>
                                    <td className="border-t border-x border-blue-300 p-2">
                                        <div className="text-left line-clamp-3" title={cve.desc}>
                                            {cve.desc}
                                        </div>
                                    </td>
                                    <td className="border-t border-x border-blue-300 p-2">{cve.baseScore}</td>
                                    <td className="border-t border-x border-blue-300 p-2">{cve.impactScore}</td>
                                    <td className="border-t border-x border-blue-300 p-2">{cve.severity}</td>
                                    <td className="border-t border-x border-blue-300 p-2 text-4xl">
                                        <ExclamationTriangleIcon className={classNames(severityMapping[String(cve.severity).toUpperCase()].fill,"h-5")} />
                                    </td>
                                    <td className="border-t border-l border-blue-300 p-2">
                                        <input type="checkbox" name='cve' className="w-6 h-6" onChange={(e) => {
                                            props.update_values(e)
                                        }} id={cve.id} disabled={(cve.cwes.length == 0)?true:false}/>
                                    </td>
                                </tr>
                                {checkMitigations(cve) &&
                                    <div className="h-min w-[73.7vw] bg-primary-500 text-left text-gray-400 pt-2 px-2 mb-2 | lg:w-[61.7vw]">
                                        <div className="flex flex-row items-center pb-2 | hover:cursor-pointer" id={cve.id} onClick={(e) => {
                                            toggleCollapsible(e.currentTarget.id)
                                        }}>
                                            <div className="flex-1 font-bold">Mitigations</div>
                                            <PlusIcon className="h-5"/>
                                        </div>
                                        <div className='collapsible ease-in-out duration-300 overflow-auto' id={'collapsible-' + cve.id} show='false'>
                                            
                                            {/* Mitigations infoboxes */}
                                            {cve.cwes.length != 0 && cve.cwes.map(
                                                (cwe) => 
                                                    {return cwe != null && 
                                                        <div className="w-full h-full pr-2">
                                                            <div className="text-2xl text-white font-bold pb-6">{props.resultCWEs[cwe].id} - {(props.resultCWEs[cwe]).name}</div>
                                                                {Object.keys(props.resultCWEs[cwe]).length != 0 && props.resultCWEs[cwe].mitigations.map(
                                                                    (mit) =>
                                                                        <div className="flex flex-col gap-6">
                                                                                {Object.entries(mit).map(
                                                                                (entry) => {
                                                                                    if(entry[1] != null && entry[1] != ""){
                                                                                        return <InfoBox boxTitle={entry[0]} text={entry[1]} format={true}/>
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
                                }
                                {!checkMitigations(cve) &&
                                    <div className="h-min w-[73.7vw] bg-red-500 text-left text-white pt-2 px-2 mb-2 | lg:w-[61.7vw]">
                                        <div className="flex flex-row items-center pb-2 | hover:cursor-pointer" id={cve.id}>
                                            <div className="flex-1 font-bold">No Available Mitigations</div>
                                        </div>
                                    </div>
                                }
                            </>
                    )}                                  
                </tbody>
            </table>
        </>
    )
}

function CWETable(props){
    
    //vulnerabilities
    const toggleCollapsible = (cweId) => {
        let item = document.querySelector('div[id="collapsible-' + cweId + '"]')
        let target = document.querySelector('div[id="' + cweId + '"]')

        if(item.hasAttribute('data-visible')){
            item.setAttribute('show', 'false')
            render(<>
                <div className="flex-1 font-bold">Vulnerabilties</div>
                <PlusIcon className="h-5"/>
            </>, target)
        }else{
            item.setAttribute('show', 'true')
            render(<>
                <div className="flex-1 font-bold">Vulnerabilties</div>
                <MinusIcon className="h-5"/>
            </>, target)
        }
        item.toggleAttribute('data-visible')
    }

    const [cweList, SetCWEList] = useState([])
    useEffect(() => {
        var list = Object.keys(props.resultCWEs)
        list = list.filter(val => Object.keys(props.resultCWEs[val]).length != 0)
        SetCWEList(list)
    },[])

    return(
        <>
            <table className="table-fixed w-full border-collapse text-center">
                <thead className="h-[4vh]">
                    <tr>
                        <th className="border-b border-r border-blue-300 p-2 pb-4 w-[10vw] | lg:w-[8vw]">CWE-ID</th>
                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[20vw] | sm:text-balance | lg:w-[15vw]">Name</th>
                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[30vw] | lg:w-[30vw]">Description</th>
                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[4vw] | lg:w-[2vw]"></th>
                        <th className="border-b border-l border-blue-300 p-2 pb-4 w-[4vw] | lg:w-[3vw]"></th>
                    </tr>
                </thead>
                <tbody>

                    {cweList.map(
                        (cwe, index) =>
                            {return Object.keys(cwe).length != 0 &&
                                <>
                                    <tr className="h-[9vh]">
                                        <td className="border-t border-r border-blue-300 p-2 text-white">
                                            <a href={"https://cwe.mitre.org/data/definitions/"+(props.resultCWEs[cwe].id).split('-')[1]+".html"} target="_blank" rel="noopener noreferrer" className="hover:!text-blue-400">{props.resultCWEs[cwe].id}</a>
                                        </td>
                                        <td className="border-t border-x border-blue-300 p-2">
                                            <div className="text-left line-clamp-1" title={props.resultCWEs[cwe].name}>
                                                {props.resultCWEs[cwe].name}
                                            </div>
                                        </td>
                                        <td className="border-t border-x border-blue-300 p-2">
                                            <div className="text-left line-clamp-3" title={props.resultCWEs[cwe].short_description}>
                                                {props.resultCWEs[cwe].short_description}
                                            </div>
                                        </td>
                                        <td className="border-t border-x border-blue-300 p-2">
                                            <ExclamationTriangleIcon className={classNames((props.resultCWEs[cwe].exploitability == null)?'fill-grey-500':cweExploitabilityMapping[String(props.resultCWEs[cwe].exploitability).toUpperCase()].fill,"h-5")} />
                                        </td>
                                        <td className="border-t border-l border-blue-300 p-2">
                                            <input type="checkbox" name="cwe" className="w-6 h-6" onChange={(e) => {
                                            props.update_values(e)}} id={props.resultCWEs[cwe].id}/>
                                        </td>
                                    </tr>
                                    <div className="h-min w-[73.7vw] bg-primary-500 text-left text-gray-400 pt-2 px-2 mb-2 | lg:w-[61.7vw]">
                                        <div className="flex flex-row items-center pb-2 | hover:cursor-pointer" id={props.resultCWEs[cwe].id} onClick={(e) => {
                                            toggleCollapsible(e.currentTarget.id)
                                        }}>
                                            <div className="flex-1 font-bold">Vulnerabilities</div>
                                            <PlusIcon className="h-5"/>
                                        </div>
                                        <div className='collapsible ease-in-out duration-300 overflow-auto' id={'collapsible-' + props.resultCWEs[cwe].id} show='false'>
                                            
                                            {/* Vulnerabilities infoboxes */}
                                            {props.result.cveList.map(
                                                cve => {
                                                    return cve.cwes.map(
                                                        entry => {return entry.id == cwe.id &&
                                                            <div className="py-2 rounded | hover:bg-blue-400 hover:!text-white hover:cursor-pointer" onClick={() => location.href = '/app/search?cveId=' + cve.id}>
                                                                <InfoBox boxTitle={cve.id} text={cve.desc} format={false} />
                                                            </div>
                                                    })
                                                }
                                            )}

                                        </div>
                                    </div>
                                </>
                            }
                    )}

                </tbody>
            </table>
        </>
    )
}