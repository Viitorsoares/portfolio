import { Card } from "@/components/ui/card"

interface AboutProfileCardProps {
    label: string
    value: string
}

export function AboutProfileCard({ label, value }: AboutProfileCardProps) {
    return (
        <Card className="w-full flex flex-row justify-between rounded-sm px-3 py-2.5 bg-background text-main-text">
            <span>{label}</span>
            <span>{value}</span>
        </Card>
    )
}
