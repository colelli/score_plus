import { ExclamationTriangleIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

    const [result, SetResult] = useState({ critic_cve_number: 10, score: 10.0, })

    useEffect

    return (
        <div className="h-full w-full flex flex-col gap-5 p-5">
            {Object.keys(result).length != 0 &&
                <>
                    <div className="w-full flex justify-center drop-shadow-2xl text-secondary-100 font-black text-md | sm:text-6xl">DASHBOARD</div>
                    <div className="h-px flex flex-1 gap-5 flex-col lg:flex-row">
                        <div className="h-min shadow-[0_7px_10px_3px_rgba(0,0,0,0.3)] text-white rounded-md flex flex-col items-center justify-center gap-10 p-4 | sm:w-full sm:flex-row | lg:flex-col lg:py-10 lg:w-[20vw]">
                            <div id='last-score' className="font-bold text-8xl">
                                {result.score.toFixed(1)}
                            </div>
                            <ul className="flex flex-col self-start">
                                <b className="text-secondary-100">Vulnerabilities</b>
                                <li className="flex flex-row gap-2 items-center">
                                    <ExclamationTriangleIcon className="h-5 fill-red-500" />
                                    Critic: <b>{result.critic_cve_number}</b>
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
                        <div className="flex flex-1 rounded-md bg-slate-700 overflow-auto | sm:w-full | lg:w-auto">
                            <div className="h-[200vh]"></div>
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