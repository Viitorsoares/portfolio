import { Card } from "@/components/ui/card"

interface AboutProfileCardProps {
    label: string
    value: string
}

export function AboutProfileCard({ label, value }: AboutProfileCardProps) {
    return (
        <Card className="w-full h-full flex flex-row items-center justify-between gap-2 rounded-sm px-3 py-2.5 bg-background text-main-text md:flex-col md:items-start md:justify-center md:gap-1 md:px-4 md:py-3">
            <span className="text-sm sm:text-base">{label}</span>
            <span className="text-sm sm:text-base text-main-green text-right md:text-left">{value}</span>
        </Card>
    )
}
