
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { StatCard } from "@/components/StatCard"
import { PersonnelTable } from "@/components/PersonnelTable"
import { MissionCard } from "@/components/MissionCard"
import { Users, Shield, Package, MapPin, AlertTriangle, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mockMissions = [
  {
    id: "M001",
    name: "Operation Thunder",
    location: "Northern Sector",
    startDate: "2024-01-15",
    endDate: "2024-02-28",
    status: "Active" as const,
    priority: "High" as const,
    personnel: 45,
    description: "Strategic reconnaissance and border security operations in the northern sector."
  },
  {
    id: "M002",
    name: "Training Exercise Alpha",
    location: "Training Ground C",
    startDate: "2024-02-01",
    endDate: "2024-02-15",
    status: "Planning" as const,
    priority: "Medium" as const,
    personnel: 120,
    description: "Large-scale combat readiness training for multiple units."
  },
  {
    id: "M003",
    name: "Humanitarian Aid Delta",
    location: "Eastern Region",
    startDate: "2024-01-10",
    endDate: "2024-01-25",
    status: "Completed" as const,
    priority: "Critical" as const,
    personnel: 30,
    description: "Emergency relief operations following natural disaster in eastern region."
  }
]

const Index = () => {
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
                  <h1 className="text-2xl font-bold text-slate-900">Command Dashboard</h1>
                  <p className="text-slate-600">Military Operations Management System</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Alerts
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Quick Action
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Statistics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Personnel"
                value="1,247"
                icon={Users}
                trend="+12 this month"
                trendDirection="up"
              />
              <StatCard
                title="Active Units"
                value="24"
                icon={Shield}
                trend="3 deployed"
                trendDirection="neutral"
              />
              <StatCard
                title="Equipment Items"
                value="3,891"
                icon={Package}
                trend="98% operational"
                trendDirection="up"
              />
              <StatCard
                title="Active Missions"
                value="8"
                icon={MapPin}
                trend="2 high priority"
                trendDirection="neutral"
              />
            </div>

            {/* Current Missions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Current Missions</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockMissions.map((mission) => (
                  <MissionCard key={mission.id} mission={mission} />
                ))}
              </div>
            </div>

            {/* Personnel Overview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Personnel Overview</h2>
                <Button variant="outline" size="sm">Manage Personnel</Button>
              </div>
              <PersonnelTable />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span>Unit Readiness</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Alpha Company</span>
                      <span className="text-sm text-green-600 font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Bravo Company</span>
                      <span className="text-sm text-blue-600 font-semibold">85%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Charlie Company</span>
                      <span className="text-sm text-yellow-600 font-semibold">72%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <span>Alerts & Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-red-800">Equipment Maintenance Due</p>
                        <p className="text-xs text-red-600">Vehicle fleet requires scheduled maintenance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-yellow-800">Training Schedule Update</p>
                        <p className="text-xs text-yellow-600">New combat training scheduled for next week</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-blue-800">Personnel Update</p>
                        <p className="text-xs text-blue-600">5 new recruits assigned to Bravo Company</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
