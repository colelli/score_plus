import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { api_domain } from "../utils/Utils"
import Alert from "../components/Alert"
import NoData from "../components/NoData"

export default function NewResearch() {

    const [isLoading, SetIsLoading] = useState(true)

    // Alert states
    const [showAlert, setShowAlert] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetch_data = async (cveId) => {
            try{
                const response = await fetch(api_domain + "/api/addhistory?cveId=" + cveId)
                const data = await response.json()
                if(data.success){
                    setIsError(false)
                    setShowAlert(true)
                    setTimeout(() => {
                        location.href = '/dashboard'
                    }, 3000)
                }else{
                    fetch_failed()
                }
            }catch(e){
                console.log(e)
                fetch_failed()
            }
        }

        const fetch_failed = () => {
            SetIsLoading(false) 
            setTimeout(() => {
            location.href = '/dashboard'
            }, 3000)
        }

        const cveId = location.href.split('?')[1].split('=')[1]
        console.log('ciao')
        fetch_data(cveId)
    },[])

    return(
        <>
            {/*Loading placeholder*/}
            <div className="w-full h-full flex items-center justify-center">
                {isLoading && <ArrowPathIcon className="h-32 w-32 rotate-center text-secondary-400 place-self-center" />}
                {!isLoading && <NoData/>}
                <Alert msg="Analysis correctly added to history!" show={showAlert} isError={isError}/>
            </div>
        </>
    )

}