export const severityMapping = {
    "CRITICAL": {
        text: "text-red-500",
        bg: "bg-red-500/40"
    },
    "HIGH": {
        text: "text-orange-500",
        bg: "bg-orange-500/40"
    },
    "MEDIUM": {
        text: "text-yellow-500",
        bg: "bg-yellow-500/45"
    },
    "LOW": {
        text: "text-green-500",
        bg: "bg-green-500/40"
    },
    "NONE": {
        text: "text-grey-500",
        bg: ""
    }
}

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}