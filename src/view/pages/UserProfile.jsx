import { useEffect, useState } from "react"
import { api_domain, classNames } from "../utils/Utils"
import { ArrowTopRightOnSquareIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import Alert from "../components/Alert"
import NoData from "../components/NoData"

export default function UserProfile() {

    //Alert vars
    const [alertMsg, SetAlertMsg] = useState("")
    const [showAlert, SetShowAlert] = useState(false)
    const [isError, SetIsError] = useState(false)

    const [isLoading, SetIsLoading] = useState(true)
    const [assets, SetAssets] = useState([])
    useEffect(() => {
        const fetch_data = async () => {
            try{
                const response = await fetch(api_domain + "/api/getassets")
                const data = await response.json()
                SetAssets(data)
                SetIsLoading(false)
            }catch(e){
                console.log(e)
                SetIsLoading(false)
            }
        }

        fetch_data();
    }, [])

    const update_data = async () => {
        let assets = document.querySelectorAll('input[name="assetScore"]')
        let requestData = []
        assets.forEach(asset => {
            requestData.push({"id":asset.id, "score":parseFloat((asset.value != '')?asset.value:asset.placeholder)})
        })
        console.log(requestData)
        try{
            const response = await fetch(api_domain + '/api/updateassets',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({
                    assets: requestData
                })
            })
            const data = await response.json()
            console.log(data)

            //show alert
            SetAlertMsg("Assets saved correctly")
            SetShowAlert(true)
            SetIsError(false)
            Set

            setTimeout(() => {
                SetShowAlert(false)
            }, 3000);

        }catch(e){
            //show alert
            SetAlertMsg("An error occurred during asset save!")
            SetShowAlert(true)
            SetIsError(true)

            setTimeout(() => {
                SetShowAlert(false)
            }, 3000);
        }
    }

    return (
        <>                  
            <div className={classNames((isLoading)?'justify-center':'', "w-full h-full p-4 flex flex-col text-white")}>
                {/* Loading placeholder */}
                {isLoading && <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400 place-self-center" />}

                {/* Successful fetch */}    
                {!isLoading && assets.length != 0 && 
                    <div className="h-min w-full p-2 flex flex-col gap-4 shadow-inner">
                        <div className="text-secondary-400 font-bold text-3xl">Assets Settings</div>
                        <div className="h-min max-h-[50vh] overflow-auto">

                            {assets.map(
                                asset => 
                                    <>
                                        {/* Asset Item */}
                                        <div className="flex flex-row py-4 border-b items-center gap-2">
                                            <a href={"https://attack.mitre.org/assets/" + asset.id} target="_blank" rel="noopener noreferrer">
                                                <ArrowTopRightOnSquareIcon className="h-6 text-secondary-400"/>
                                            </a>
                                            <div className="flex-1 text-lg" title={asset.description}>{asset.name}</div>
                                            <input name='assetScore' id={asset.id} className="text-black text-right rounded w-[10vw]" type="number" step="any" min={0.00.toFixed(2)} max={10.00.toFixed(2)} placeholder={(asset.score).toFixed(2)}/>
                                        </div>
                                    </>
                            )}

                        </div>
                        <button className="!bg-green-400 btn w-min text-nowrap" onClick={() => update_data()}>Save Assets</button>
                    </div>
                }

                {/* Unsuccessful fetch */}
                {!isLoading && assets.length == 0 &&
                    <div className="h-full">
                        <NoData msg="Error during data fetch. Please check your connection or try again later."/>
                    </div>
                }
                <Alert msg={alertMsg} show={showAlert} isError={isError}/>
            </div>
        </>
    )
}