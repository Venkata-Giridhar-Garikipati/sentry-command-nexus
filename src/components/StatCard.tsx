
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: string
  trendDirection?: "up" | "down" | "neutral"
  className?: string
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendDirection = "neutral",
  className = ""
}: StatCardProps) {
  const trendColors = {
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-slate-600"
  }

  return (
    <Card className={`bg-white shadow-sm border-slate-200 ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
        <Icon className="h-5 w-5 text-slate-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        {trend && (
          <p className={`text-xs ${trendColors[trendDirection]} mt-1`}>
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
