import { useEffect, useState } from "react"
import { api_domain } from "../utils/Utils"

export default function Home() {

    const logo_path = "/src/view/assets/score_plus_logo.svg"
    const x_icon = "/src/view/assets/x.png"
    const ig_icon = "/src/view/assets/instagram.png"

    const [cve_count, setCveCountMax] = useState(999999)
    const [cwe_count, setCweCountMax] = useState(999999)
    const [c_cve_count, setCveCount] = useState(123774) //starting value
    const [c_cwe_count, setCweCount] = useState(1) //starting value

    //Fetch CWE & CVE counts
    useEffect(() => {
        const getCweCount = async () => {
            try{
                const response = await fetch(api_domain + "/api/getcwecount")
                const data = await response.json()
                setCweCountMax(data.cweCount)
            }catch(e){
                console.log(e)
            }
        }

        const getCveCount = async () => {
            try{
                const response = await fetch(api_domain + "/api/getcvecount")
                const data = await response.json()
                setCveCountMax(data.cveCount)
            }catch(e){
                console.log(e)
            }
        }

        getCweCount();
        getCveCount();
    },[])

    //Update CVE counter
    useEffect(() => {
        const timeOutCVE = (increment, ms) => {
            setTimeout(() => {
                setCveCount(c_cve_count + increment)
            }, ms);
        }

        if(c_cve_count >= cve_count - 215 && c_cve_count < cve_count){
            timeOutCVE(7, 50);
        }else if(c_cve_count < cve_count){
            timeOutCVE(215, 2);
        }else{
            setCveCount(cve_count);
        }
    },[c_cve_count])

    //Update CWE counter
    useEffect(() => {
        const timeOutCWE = (increment, ms) => {
            setTimeout(() => {
                setCweCount(c_cwe_count + increment)
            }, ms);
        }

        if(c_cwe_count >= cwe_count - 17 && c_cwe_count < cwe_count){
            timeOutCWE(1, 125);
        }else if(c_cwe_count < cwe_count){
            timeOutCWE(13, 15);
        }else{
            setCweCount(cwe_count);
        }
    },[c_cwe_count])
    

    return(
        <div className="w-[100vw] h-[100vh] bg-primary-500 overflow-y-auto">
            <nav className="h-[7vh] w-full flex flex-row items-center px-6 py-4 gap-2 bg-primary-700 shadow-xl">
                <div className="flex-1">
                    <a href='/'>
                      <img
                        className="h-8 w-auto logo"
                        src={logo_path}
                        alt="Score+"
                      />
                    </a>
                </div>
                <a href="/app/dashboard">
                    <button className="btn py-1 px-2">Sign in</button>
                </a>
                <a href="#">
                    <button className="btn py-1 px-2" datatype="transparent">Sign up</button>
                </a>
            </nav>
            <main className="w-full flex flex-col text-white font-['Arial'] pb-6">
                <div className="font-bold flex flex-col items-center justify-center w-full h-[40vh] gap-2 | lg:h-[50vh] lg:gap-4">
                    <div className="drop-shadow-md text-6xl | lg:text-8xl">Evaluate your digital</div>
                    <div className="drop-shadow-md text-5xl flex gap-2 | lg:text-7xl">awareness with<div className="font-black text-secondary-400">SCORE+</div></div>
                    <div className="font-thin italic text-lg font-['Calibri'] text-primary-200">Start your automatic risk assessment evaluation today.</div>
                    <div className="pt-7">
                        <a href="/app/dashboard"><button className='drop-shadow-lg px-20 py-2 btn'>Start now</button></a>
                    </div>
                </div>

                <svg id="wave" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#131417" d="M0,50L80,56.7C160,63,320,77,480,76.7C640,77,800,63,960,61.7C1120,60,1280,70,1440,65C1600,60,1760,40,1920,38.3C2080,37,2240,53,2400,65C2560,77,2720,83,2880,78.3C3040,73,3200,57,3360,53.3C3520,50,3680,60,3840,61.7C4000,63,4160,57,4320,45C4480,33,4640,17,4800,10C4960,3,5120,7,5280,13.3C5440,20,5600,30,5760,28.3C5920,27,6080,13,6240,15C6400,17,6560,33,6720,40C6880,47,7040,43,7200,50C7360,57,7520,73,7680,78.3C7840,83,8000,77,8160,76.7C8320,77,8480,83,8640,78.3C8800,73,8960,57,9120,56.7C9280,57,9440,73,9600,76.7C9760,80,9920,70,10080,65C10240,60,10400,60,10560,55C10720,50,10880,40,11040,41.7C11200,43,11360,57,11440,63.3L11520,70L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
                </svg>

                <div className="flex flex-col items-center p-6 gap-4 bg-primary-700 shadow-xl">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-4xl text-secondary-400">Evaluation database</div>
                        <div className="font-thin italic text-lg font-['Calibri']">Out evaluation database systems and algorithms use the following data</div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-40 w-full h-[15vh]">
                        <div className="flex flex-col items-center text-xl p-4 w-[20vw] gap-2">
                            <div className="font-bold">CVE count:</div>
                            <div className="font-black text-5xl">{(c_cve_count/1000).toFixed(3)}</div>
                        </div>
                        <div className="flex flex-col items-center text-xl p-4 w-[20vw] gap-2">
                            <div className="font-bold">CWE count:</div>
                            <div className="font-black text-5xl">{(c_cwe_count>1000)?(c_cwe_count/1000).toFixed(3):c_cwe_count}</div>
                        </div>
                    </div>
                </div>

                <svg id="wave" className="rotate-180 pt-6" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#131417" d="M0,50L48,56.7C96,63,192,77,288,76.7C384,77,480,63,576,61.7C672,60,768,70,864,65C960,60,1056,40,1152,38.3C1248,37,1344,53,1440,65C1536,77,1632,83,1728,78.3C1824,73,1920,57,2016,53.3C2112,50,2208,60,2304,61.7C2400,63,2496,57,2592,45C2688,33,2784,17,2880,10C2976,3,3072,7,3168,13.3C3264,20,3360,30,3456,28.3C3552,27,3648,13,3744,15C3840,17,3936,33,4032,40C4128,47,4224,43,4320,50C4416,57,4512,73,4608,78.3C4704,83,4800,77,4896,76.7C4992,77,5088,83,5184,78.3C5280,73,5376,57,5472,56.7C5568,57,5664,73,5760,76.7C5856,80,5952,70,6048,65C6144,60,6240,60,6336,55C6432,50,6528,40,6624,41.7C6720,43,6816,57,6864,63.3L6912,70L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>

                <div className="flex gap-2 text-4xl self-center pb-8">
                    <div className="font-black text-secondary-400">SCORE+</div> 
                    Tools
                </div>
                <div className="h-[80vh] w-full flex flex-col items-center gap-4 pb-10">
                    <div className="h-[40vh] w-[75vw] flex flex-row items-center gap-4">

                        {/* DASHBOARD CARD */}
                        <div className="flex flex-col gap-4 w-full h-full p-4 gap-4">
                            <div className="flex gap-4 text-2xl font-bold items-center h-[4vh]">
                                <div className="rounded-full border border-blue-500 border-2 w-[4vw] h-full text-center leading-normal">1</div>
                                <div className="font-bold">DASHBOARD</div>
                            </div>
                            <div className="text-justify text-lg leading-tight font-['Calibri'] font-thin">
                                The 'Dashboard' functionality allows for quick access to recently evaluated data.<br/>
                                It allows to get an easy-to-read overview of the organisation status, integrated
                                with a detailed list of found CVEs, along with their mitigation techniques.
                                <br/><br/> An Analyst can also choose to check a given vulnerability as <b className="font-black">'solved'</b> to gain quick
                                knowledge of the impact on the overall system's evaluation.
                            </div>
                        </div>

                        {/* HISTORY CARD */}
                        <div className="flex flex-col gap-4 w-full h-full p-4 gap-4">
                            <div className="flex gap-4 text-2xl font-bold items-center h-[4vh]">
                                <div className="rounded-full border border-blue-500 border-2 w-[4vw] h-full text-center leading-normal">2</div>
                                <div className="font-bold">HISTORY</div>
                            </div>
                            <div className="text-justify text-lg leading-tight font-['Calibri'] font-thin">
                                The 'History' section allows for quick access to a complete database of every evaluation instance.
                                <br/><br/>It is an handy, easy-to-use, tool which enables analysts to look at the overall 
                                organisation's security awareness level, search for a given evaluation run and monitor the ongoing
                                trend.
                            </div>
                        </div>
                        
                    </div>
                    <div className="h-[40vh] w-[75vw] flex flex-row items-center gap-4">
                        
                        {/* SEARCH CARD */}
                        <div className="flex flex-col gap-4 w-full h-full p-4 gap-4">
                            <div className="flex gap-4 text-2xl font-bold items-center h-[4vh]">
                                <div className="rounded-full border border-blue-500 border-2 w-[4vw] h-full text-center leading-normal">3</div>
                                <div className="font-bold">CVE SEARCH</div>
                            </div>
                            <div className="text-justify text-lg leading-tight font-['Calibri'] font-thin">
                                The 'CVE Search' functionality enables analysts to conduct a quick search of a given vulnerability.
                                <br/>Analysts can then take advantage of the data shown on the platform, or conduct further research
                                simply accessing the supplied link.                                
                            </div>
                        </div>

                        {/* CONVERT CARD */}
                        <div className="flex flex-col gap-4 w-full h-full p-4 gap-4">
                            <div className="flex gap-4 text-2xl font-bold items-center h-[4vh]">
                                <div className="rounded-full border border-blue-500 border-2 w-[4vw] h-full text-center leading-normal">4</div>
                                <div className="font-bold">CVSS CONVERT</div>
                            </div>
                            <div className="text-justify text-lg leading-tight font-['Calibri'] font-thin">
                                The 'CVSS Convert' function enables for a quick, qualitative evaluation of a given CVSS Vector from
                                the current 3.1 version, in the upcoming 4.0 version.
                                <br/><br/>The conversion takes into account the different changes and tries to map the existing values
                                to the new schema following the 'best fit' approach.
                                <br/>The tool intends to be <b className="font-black">by no means</b> a 100% reliable conversion tool,
                                rather a support for an 'informated guess'.
                            </div>
                        </div>

                    </div>
                </div>

            </main>
            <footer className="h-[20vh] w-full bg-secondary-400 flex flex-row space-x-2 px-2 py-4 font-['Calibri'] font-thin">
                <div className="w-[17vw]">
                    <img
                        className="h-6 w-full"
                        src={logo_path}
                        alt="Score+"
                        />
                </div>
                <div className="flex-1 border-r-2 border-blue-900/70 text-md">
                    <ul className="pl-10">
                        <li><a href="#" className="text-primary-700">Get Started</a></li>
                        <li><a href="#" className="text-primary-700">Pricing</a></li>
                        <li><a href="#" className="text-primary-700">About us</a></li>
                        <li><a href="#" className="text-primary-700">Terms & Conditions</a></li>
                        <li><a href="#" className="text-primary-700">F.A.Q.</a></li>
                    </ul>
                </div>
                <div className="flex-1 border-r-2 border-blue-900/70 text-md">
                    <ul className="pl-7">
                        <li><a href="#" className="text-primary-700">Help Center</a></li>
                        <li><a href="#" className="text-primary-700">Contact</a></li>
                        <li><a href="#" className="text-primary-700">Privay</a></li>
                    </ul>
                </div>
                <div className="flex-1 text-md">
                    <ul className="pl-7 flex gap-2">
                        <li><a href="#"><img src={x_icon} className="h-8"/></a></li>
                        <li><a href="#"><img src={ig_icon} className="h-8"/></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}