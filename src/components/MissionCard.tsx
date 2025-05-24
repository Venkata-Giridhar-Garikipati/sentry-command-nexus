
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users } from "lucide-react"

interface MissionData {
  id: string
  name: string
  location: string
  startDate: string
  endDate: string
  status: "Planning" | "Active" | "Completed" | "On Hold"
  priority: "Low" | "Medium" | "High" | "Critical"
  personnel: number
  description: string
}

interface MissionCardProps {
  mission: MissionData
}

const getStatusColor = (status: MissionData["status"]) => {
  switch (status) {
    case "Planning":
      return "bg-blue-100 text-blue-800"
    case "Active":
      return "bg-green-100 text-green-800"
    case "Completed":
      return "bg-gray-100 text-gray-800"
    case "On Hold":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getPriorityColor = (priority: MissionData["priority"]) => {
  switch (priority) {
    case "Critical":
      return "bg-red-100 text-red-800"
    case "High":
      return "bg-orange-100 text-orange-800"
    case "Medium":
      return "bg-yellow-100 text-yellow-800"
    case "Low":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function MissionCard({ mission }: MissionCardProps) {
  return (
    <Card className="bg-white border-slate-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-slate-900">
            {mission.name}
          </CardTitle>
          <div className="flex space-x-2">
            <Badge className={getStatusColor(mission.status)}>
              {mission.status}
            </Badge>
            <Badge className={getPriorityColor(mission.priority)}>
              {mission.priority}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-slate-600">{mission.description}</p>
        
        <div className="flex items-center space-x-4 text-sm text-slate-500">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{mission.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{mission.personnel} personnel</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          <span>{mission.startDate} - {mission.endDate}</span>
        </div>
        
        <div className="pt-2">
          <Button variant="outline" size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
