
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { PersonnelTable } from "@/components/PersonnelTable"
import { StatCard } from "@/components/StatCard"
import { Users, UserPlus, UserCheck, UserX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Personnel = () => {
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
                  <h1 className="text-2xl font-bold text-slate-900">Personnel Management</h1>
                  <p className="text-slate-600">Manage military personnel and assignments</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Input 
                  placeholder="Search personnel..." 
                  className="w-64"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Personnel
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Personnel Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Personnel"
                value="1,247"
                icon={Users}
                trend="+12 this month"
                trendDirection="up"
              />
              <StatCard
                title="Active Duty"
                value="1,156"
                icon={UserCheck}
                trend="93% deployment rate"
                trendDirection="up"
              />
              <StatCard
                title="On Leave"
                value="67"
                icon={UserX}
                trend="5% of total"
                trendDirection="neutral"
              />
              <StatCard
                title="New Recruits"
                value="24"
                icon={UserPlus}
                trend="This quarter"
                trendDirection="up"
              />
            </div>

            {/* Personnel Table */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle>Personnel Directory</CardTitle>
              </CardHeader>
              <CardContent>
                <PersonnelTable />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Personnel;
