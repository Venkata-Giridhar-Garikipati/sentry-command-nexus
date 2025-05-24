import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { StatCard } from "@/components/StatCard"
import { CreateUnitDialog } from "@/components/CreateUnitDialog"
import { Shield, Users, MapPin, Award } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockUnits = [
  {
    id: "U001",
    name: "Alpha Company",
    type: "Infantry",
    commander: "Col. Smith",
    personnel: 150,
    location: "Base Alpha",
    status: "Active",
    readiness: 98
  },
  {
    id: "U002", 
    name: "Bravo Company",
    type: "Armored",
    commander: "Maj. Johnson",
    personnel: 120,
    location: "Base Bravo",
    status: "Training",
    readiness: 85
  },
  {
    id: "U003",
    name: "Charlie Company", 
    type: "Support",
    commander: "Capt. Williams",
    personnel: 80,
    location: "Base Charlie",
    status: "Deployed",
    readiness: 72
  }
]

const Units = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="border-b border-slate-200 bg-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="text-slate-600 hover:text-slate-900" />
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Unit Management</h1>
                  <p className="text-slate-600">Manage military units and formations</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Input 
                  placeholder="Search units..." 
                  className="w-64"
                />
                <CreateUnitDialog />
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Unit Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Units"
                value="24"
                icon={Shield}
                trend="+2 this quarter"
                trendDirection="up"
              />
              <StatCard
                title="Personnel"
                value="1,247"
                icon={Users}
                trend="Across all units"
                trendDirection="neutral"
              />
              <StatCard
                title="Deployed Units"
                value="8"
                icon={MapPin}
                trend="33% deployment"
                trendDirection="neutral"
              />
              <StatCard
                title="Avg Readiness"
                value="85%"
                icon={Award}
                trend="+5% this month"
                trendDirection="up"
              />
            </div>

            {/* Units Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockUnits.map((unit) => (
                <Card key={unit.id} className="bg-white border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold text-slate-900">
                        {unit.name}
                      </CardTitle>
                      <Badge variant={unit.status === 'Active' ? 'default' : unit.status === 'Deployed' ? 'destructive' : 'secondary'}>
                        {unit.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Type:</span>
                        <span className="font-medium">{unit.type}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Commander:</span>
                        <span className="font-medium">{unit.commander}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Personnel:</span>
                        <span className="font-medium">{unit.personnel}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Location:</span>
                        <span className="font-medium">{unit.location}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600">Readiness:</span>
                        <span className="font-semibold">{unit.readiness}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            unit.readiness >= 90 ? 'bg-green-500' : 
                            unit.readiness >= 75 ? 'bg-blue-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${unit.readiness}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Units;
