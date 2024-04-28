export default function InfoBox(params) {
    return (
        <div className="flex flex-col pt-2 h-min h-max-[20vh] | lg:pt-0">
            <div className="border-b border-blue-300 font-bold text-lg" title={params.boxTitle}>{params.boxTitle}</div>
            <div className="text-justify pt-1 line-clamp-6" title={params.text}>{params.text}</div>
        </div>
    )
}