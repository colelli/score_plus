import { classNames } from "../utils/Utils";

export default function Alert(props) {
    return(
        <>
            <div className={classNames(props.show?'h-[8vh]':'h-0', "overflow-hidden w-full bottom-0 absolute left-0 z-50 fixed flex items-center justify-center ease-in-out duration-500 font-bold")}>
                {props.isError ?
                    // Error Alert
                    <div className={classNames(props.show?"h-[70%] w-fit max-w-[60%]":"", "min-w-[30%] justify-center rounded-md p-4 flex items-center bg-red-500 text-red-900")}>
                        {(props.msg!=null)?props.msg:"Default Alert"}
                    </div> :
                    // Normal Alert
                    <div className={classNames(props.show?"h-[70%] w-fit max-w-[60%]":"", "min-w-[30%] justify-center rounded-md p-4 flex items-center bg-green-500 text-green-900")}>
                    {(props.msg!=null)?props.msg:"Default Alert"}
                </div>
                }
            </div>
        </>
    )
}