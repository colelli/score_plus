import { ArrowPathIcon, ArrowTopRightOnSquareIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import NoData from "../components/nodata/NoData"
import { classNames, severityMapping } from "../utils/Utils"
import { api_domain } from "../utils/Utils"

const description = "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default. From version 2.16.0 (along with 2.12.2, 2.12.3, and 2.3.1), this functionality has been completely removed. Note that this vulnerability is specific to log4j-core and does not affect log4net, log4cxx, or other Apache Logging Services projects."

export default function History() {

    const [result, SetResult] = useState({})
    const [isLoading, SetLoading] = useState(false)

    useEffect(() => {
        const read_data = async () => {
            SetLoading(true)
            const response = await fetch(api_domain + "/api/gethistory")
            const data = await response.json()
            SetResult({ history: data })
            SetLoading(false)
        }

        read_data();
    }, [])

    return (
        <div className="h-min max-h-full w-full flex flex-col gap-5 p-5">
            {Object.keys(result).length != 0 &&
                <>
                    <div className="w-full flex justify-center drop-shadow-[7px_7px_10px_rgba(0,0,0,0.35)] text-secondary-100 font-black text-md | sm:text-6xl">HISTORY</div>
                    <div className="flex gap-3 items-center drop-shadow-md">
                        <MagnifyingGlassIcon className="h-6 text-white" />
                        <input type="text" placeholder="Search..." className="p-1 pl-3 w-min rounded bg-primary-400 text-white" />
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
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-x border-blue-300 p-2")}>{entry.cve_count}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-x border-blue-300 p-2")}>{entry.cwe_count}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-x border-blue-300 p-2")}>{entry.state}</td>
                                                    <td className={classNames((index != result.history.length-1) ? "border-b" : "", "border-l border-blue-300 p-2 text-secondary-400")}><ArrowTopRightOnSquareIcon className="h-5" /></td>
                                                </tr>
                                            </>
                                    )}
                                </tbody>
                            </table>
                        }
                        {isLoading && <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400 place-self-center" />}
                    </div>
                </>}
            {Object.keys(result).length == 0 &&
                <>
                    <NoData/>
                </>}
        </div>
    )
}