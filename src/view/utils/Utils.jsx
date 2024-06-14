export const severityMapping = {
    "CRITICAL": {
        text: "text-red-500",
        bg: "bg-red-500/40",
        fill: "fill-red-500"
    },
    "HIGH": {
        text: "text-orange-500",
        bg: "bg-orange-500/40",
        fill: "fill-orange-500"
    },
    "MEDIUM": {
        text: "text-yellow-500",
        bg: "bg-yellow-500/45",
        fill: "fill-yellow-500"
    },
    "LOW": {
        text: "text-green-500",
        bg: "bg-green-500/40",
        fill: "fill-green-500"
    },
    "NONE": {
        text: "text-grey-500",
        bg: "",
        fill: "fill-grey-500",
    }
}

export const cweExploitabilityMapping = {
    "HIGH": {
        text: "text-red-500",
        bg: "bg-red-500/40",
        fill: "fill-red-500"
    },
    "MEDIUM": {
        text: "text-yellow-500",
        bg: "bg-yellow-500/45",
        fill: "fill-yellow-500"
    },
    "LOW": {
        text: "text-green-500",
        bg: "bg-green-500/40",
        fill: "fill-green-500"
    }
}

export const api_domain = 'http://127.0.0.1:7777'

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function camelCaseToString(string){
    if(Object.prototype.toString.call(string).match('[object String]')){
        return string.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){return str.toUpperCase();})
    }
    return console.error("Parameter not of type 'String'");
}
