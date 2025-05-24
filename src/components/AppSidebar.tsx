
import { Shield, Users, Package, MapPin, BarChart3, Settings, Command } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
  },
  {
    title: "Personnel",
    url: "/personnel",
    icon: Users,
  },
  {
    title: "Units",
    url: "/units",
    icon: Shield,
  },
  {
    title: "Equipment",
    url: "/equipment",
    icon: Package,
  },
  {
    title: "Missions",
    url: "/missions",
    icon: MapPin,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-200 bg-slate-900">
      <SidebarHeader className="border-b border-slate-700 p-4">
        <div className="flex items-center space-x-2">
          <Command className="h-8 w-8 text-blue-400" />
          <div>
            <h2 className="text-lg font-bold text-white">MilOps</h2>
            <p className="text-xs text-slate-400">Command Center</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-slate-900">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wider px-4 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="text-slate-300 hover:bg-slate-800 hover:text-white data-[state=open]:bg-slate-800"
                  >
                    <a href={item.url} className="flex items-center space-x-3 px-4 py-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-slate-700 p-4">
        <div className="text-center">
          <p className="text-xs text-slate-500">Version 1.0</p>
          <p className="text-xs text-slate-500">© 2024 MilOps</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
