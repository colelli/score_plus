import { ExclamationTriangleIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const description = "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default. From version 2.16.0 (along with 2.12.2, 2.12.3, and 2.3.1), this functionality has been completely removed. Note that this vulnerability is specific to log4j-core and does not affect log4net, log4cxx, or other Apache Logging Services projects."

export default function Dashboard() {

    const [result, SetResult] = useState({ critical_cve_number: 10, score: 10.0, cve_list: [1]})

    useEffect

    return (
        <div className="h-full w-full flex flex-col gap-5 p-5">
            {Object.keys(result).length != 0 &&
                <>
                    <div className="w-full flex justify-center drop-shadow-2xl text-secondary-100 font-black text-md | sm:text-6xl">DASHBOARD</div>
                    <div className="h-px flex flex-1 gap-5 flex-col lg:flex-row">
                        
                        {/*Dashboard Summary Card*/}
                        <div className="h-min shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] text-white rounded-md flex flex-col items-center justify-center gap-10 p-4 | sm:w-full sm:flex-row | lg:flex-col lg:py-10 lg:w-[20vw]">
                            <div id='last-score' className="font-bold text-8xl">
                                {result.score.toFixed(1)}
                            </div>
                            <ul className="flex flex-col self-start">
                                <b className="text-secondary-100">Vulnerabilities</b>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className="h-5 fill-red-500" />
                                    Critical: <b>{result.critical_cve_number}</b>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className="h-5 fill-yellow-400" />
                                    Medium: <b>{result.medium_cve_number}</b>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className="h-5 fill-green-400" />
                                    Low: <b>{result.low_cve_number}</b>
                                </li>
                            </ul>
                            <ul className="flex flex-col self-start">
                                <b className="text-secondary-100">Weaknesses</b>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className="h-5 fill-red-500" />
                                    Primary:
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className="h-5 fill-yellow-400" />
                                    Secondary:
                                </li>
                            </ul>
                        </div>

                        {/*Dashboard Table*/}
                        <div className="text-secondary-100 items-start p-1 flex flex-1 rounded-md bg-primary-400 overflow-auto | sm:w-full | lg:w-auto">
                            <table className="table-fixed w-full border-collapse text-center">
                                <thead className="h-[4vh]">
                                    <tr>
                                        <th className="border-b border-r border-blue-300 p-2 pb-4 w-[14vw] | lg:w-[7vw]">CVE-ID</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4">Description</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[9vw] | sm:text-balance | lg:w-[7vw]">Base Score</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[9vw] | sm:text-balance | lg:w-[7vw]">Impact Score</th>
                                        <th className="border-b border-x border-blue-300 p-2 pb-4 w-[9vw] | sm:text-balance | lg:w-[7vw]">Severity Score</th>
                                        <th className="border-b border-l border-blue-300 p-2 pb-4 w-[4vw] p-2 pb-4 | lg:w-[2vw]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.cve_list.map(
                                        (cve) =>
                                        <tr className="h-[9vh]">
                                            {/*TO-DO: Add data fetch*/}
                                            <td className="border-b border-r border-blue-300">CVE-2021-44228</td>
                                            <td className="border-b border-x border-blue-300">
                                                <div className="text-left line-clamp-3" title={description}>
                                                    {description}
                                                </div>
                                            </td>
                                            <td className="border-b border-x border-blue-300">9.0</td>
                                            <td className="border-b border-x border-blue-300">3.9</td>
                                            <td className="border-b border-x border-blue-300">Critical</td>
                                            <td className="border-b border-l border-blue-300 text-red-500 text-4xl">&#9679;</td>
                                        </tr>
                                    )}                                  
                                </tbody>
                            </table>
                        </div>

                    </div>
                </>}

            {Object.keys(result).length == 0 &&
                <>
                    <div>
                        ciao
                    </div>
                </>}

        </div>
    )
}