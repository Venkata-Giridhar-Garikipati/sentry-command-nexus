import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { MissionCard } from "@/components/MissionCard"
import { StatCard } from "@/components/StatCard"
import { CreateMissionDialog } from "@/components/CreateMissionDialog"
import { MapPin, Calendar, Users, Target } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
  },
  {
    id: "M004",
    name: "Border Patrol Bravo",
    location: "Southern Border",
    startDate: "2024-01-20",
    endDate: "2024-03-20",
    status: "Active" as const,
    priority: "High" as const,
    personnel: 80,
    description: "Continuous border monitoring and security enforcement operations."
  },
  {
    id: "M005",
    name: "Equipment Recovery Charlie",
    location: "Forward Base Echo",
    startDate: "2024-02-05",
    endDate: "2024-02-10",
    status: "On Hold" as const,
    priority: "Low" as const,
    personnel: 25,
    description: "Recovery and transport of damaged equipment from forward positions."
  },
  {
    id: "M006",
    name: "Joint Training Exercise",
    location: "Multi-Base Operation",
    startDate: "2024-02-15",
    endDate: "2024-02-25",
    status: "Planning" as const,
    priority: "Critical" as const,
    personnel: 200,
    description: "Inter-service coordination training with allied forces."
  }
]

const Missions = () => {
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
                  <h1 className="text-2xl font-bold text-slate-900">Mission Operations</h1>
                  <p className="text-slate-600">Plan, execute, and track military missions</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Input 
                  placeholder="Search missions..." 
                  className="w-64"
                />
                <CreateMissionDialog />
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Mission Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Active Missions"
                value="8"
                icon={MapPin}
                trend="2 high priority"
                trendDirection="neutral"
              />
              <StatCard
                title="Planned Missions"
                value="5"
                icon={Calendar}
                trend="Next 30 days"
                trendDirection="up"
              />
              <StatCard
                title="Personnel Deployed"
                value="350"
                icon={Users}
                trend="28% of total"
                trendDirection="neutral"
              />
              <StatCard
                title="Success Rate"
                value="96%"
                icon={Target}
                trend="Last 12 months"
                trendDirection="up"
              />
            </div>

            {/* Mission Cards Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">All Missions</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Filter</Button>
                  <Button variant="outline" size="sm">Sort</Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockMissions.map((mission) => (
                  <MissionCard key={mission.id} mission={mission} />
                ))}
              </div>
            </div>

            {/* Mission Timeline */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span>Mission Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium text-green-800">Operation Thunder - Phase 2 Complete</p>
                      <p className="text-sm text-green-600">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium text-blue-800">Training Exercise Alpha - Equipment Check</p>
                      <p className="text-sm text-blue-600">6 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium text-yellow-800">Equipment Recovery Charlie - Delayed</p>
                      <p className="text-sm text-yellow-600">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Missions;
