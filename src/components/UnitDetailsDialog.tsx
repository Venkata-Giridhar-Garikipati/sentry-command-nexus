
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin, User, Shield, Calendar, Activity } from "lucide-react"

interface Unit {
  id: string
  name: string
  type: string
  commander: string
  personnel: number
  location: string
  status: string
  readiness: number
}

interface UnitDetailsDialogProps {
  unit: Unit | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UnitDetailsDialog({ unit, open, onOpenChange }: UnitDetailsDialogProps) {
  if (!unit) return null

  const mockPersonnel = [
    { name: "Sgt. Thompson", role: "Squad Leader", status: "Active" },
    { name: "Cpl. Davis", role: "Medic", status: "Active" },
    { name: "Pvt. Wilson", role: "Rifleman", status: "On Leave" },
    { name: "Pvt. Brown", role: "Communications", status: "Active" },
  ]

  const mockEquipment = [
    { item: "M4A1 Rifles", quantity: 25, status: "Operational" },
    { item: "Humvees", quantity: 4, status: "Operational" },
    { item: "Radio Sets", quantity: 8, status: "Maintenance" },
    { item: "Body Armor", quantity: 30, status: "Operational" },
  ]

  const mockMissions = [
    { name: "Operation Shield", status: "Active", date: "2024-01-15" },
    { name: "Training Exercise Alpha", status: "Completed", date: "2024-01-10" },
    { name: "Border Patrol", status: "Scheduled", date: "2024-01-20" },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {unit.name} - Unit Details
          </DialogTitle>
          <DialogDescription>
            Comprehensive overview of unit information, personnel, and operations
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Unit Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Unit Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4" />
                  Type
                </div>
                <p className="font-medium">{unit.type}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  Commander
                </div>
                <p className="font-medium">{unit.commander}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  Location
                </div>
                <p className="font-medium">{unit.location}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Activity className="h-4 w-4" />
                  Status
                </div>
                <Badge variant={unit.status === 'Active' ? 'default' : unit.status === 'Deployed' ? 'destructive' : 'secondary'}>
                  {unit.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Readiness and Personnel Count */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Readiness Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{unit.readiness}%</span>
                    <Badge variant={unit.readiness >= 90 ? 'default' : unit.readiness >= 75 ? 'secondary' : 'destructive'}>
                      {unit.readiness >= 90 ? 'Excellent' : unit.readiness >= 75 ? 'Good' : 'Needs Attention'}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${
                        unit.readiness >= 90 ? 'bg-green-500' : 
                        unit.readiness >= 75 ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${unit.readiness}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Personnel Count
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <span className="text-2xl font-bold">{unit.personnel}</span>
                  <p className="text-gray-600">Total Personnel</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personnel List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Personnel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockPersonnel.map((person, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{person.name}</p>
                      <p className="text-sm text-gray-600">{person.role}</p>
                    </div>
                    <Badge variant={person.status === 'Active' ? 'default' : 'secondary'}>
                      {person.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Equipment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Equipment Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockEquipment.map((equipment, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{equipment.item}</p>
                      <p className="text-sm text-gray-600">Quantity: {equipment.quantity}</p>
                    </div>
                    <Badge variant={equipment.status === 'Operational' ? 'default' : 'secondary'}>
                      {equipment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Missions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Recent Missions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockMissions.map((mission, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{mission.name}</p>
                      <p className="text-sm text-gray-600">{mission.date}</p>
                    </div>
                    <Badge variant={
                      mission.status === 'Active' ? 'default' : 
                      mission.status === 'Completed' ? 'secondary' : 'outline'
                    }>
                      {mission.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
