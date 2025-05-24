import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { StatCard } from "@/components/StatCard"
import { AddEquipmentDialog } from "@/components/AddEquipmentDialog"
import { Package, Wrench, AlertTriangle, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const mockEquipment = [
  {
    id: "E001",
    name: "M4A1 Carbine",
    category: "Small Arms",
    quantity: 250,
    operational: 245,
    status: "Operational"
  },
  {
    id: "E002",
    name: "HMMWV",
    category: "Vehicles",
    quantity: 25,
    operational: 22,
    status: "Maintenance"
  },
  {
    id: "E003",
    name: "Radio System AN/PRC-152",
    category: "Communications",
    quantity: 50,
    operational: 48,
    status: "Operational"
  },
  {
    id: "E004",
    name: "Night Vision Goggles",
    category: "Optics",
    quantity: 100,
    operational: 95,
    status: "Operational"
  },
  {
    id: "E005",
    name: "Body Armor",
    category: "Protection",
    quantity: 300,
    operational: 285,
    status: "Maintenance"
  }
]

const Equipment = () => {
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
                  <h1 className="text-2xl font-bold text-slate-900">Equipment Management</h1>
                  <p className="text-slate-600">Track and maintain military equipment inventory</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Input 
                  placeholder="Search equipment..." 
                  className="w-64"
                />
                <AddEquipmentDialog />
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Equipment Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Items"
                value="3,891"
                icon={Package}
                trend="+45 this month"
                trendDirection="up"
              />
              <StatCard
                title="Operational"
                value="3,815"
                icon={CheckCircle}
                trend="98% operational"
                trendDirection="up"
              />
              <StatCard
                title="Under Maintenance"
                value="56"
                icon={Wrench}
                trend="1.4% of total"
                trendDirection="neutral"
              />
              <StatCard
                title="Critical Issues"
                value="20"
                icon={AlertTriangle}
                trend="Needs attention"
                trendDirection="down"
              />
            </div>

            {/* Equipment Table */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle>Equipment Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Total Quantity</TableHead>
                      <TableHead>Operational</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEquipment.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.operational}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === 'Operational' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Wrench className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Maintenance Schedule */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wrench className="h-5 w-5 text-orange-500" />
                  <span>Upcoming Maintenance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div>
                      <p className="font-medium text-orange-800">Vehicle Fleet Inspection</p>
                      <p className="text-sm text-orange-600">Due: Tomorrow</p>
                    </div>
                    <Button variant="outline" size="sm">Schedule</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div>
                      <p className="font-medium text-yellow-800">Communications Equipment Check</p>
                      <p className="text-sm text-yellow-600">Due: Next Week</p>
                    </div>
                    <Button variant="outline" size="sm">Schedule</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <p className="font-medium text-blue-800">Weapons Maintenance</p>
                      <p className="text-sm text-blue-600">Due: Next Month</p>
                    </div>
                    <Button variant="outline" size="sm">Schedule</Button>
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

export default Equipment;
