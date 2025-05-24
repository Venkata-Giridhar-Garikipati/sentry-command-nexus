
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Edit, MoreHorizontal } from "lucide-react"

interface PersonnelData {
  id: string
  name: string
  rank: string
  unit: string
  status: "Active" | "On Leave" | "Deployed" | "Training"
  specialization: string
}

const mockPersonnel: PersonnelData[] = [
  {
    id: "001",
    name: "John Smith",
    rank: "Captain",
    unit: "Alpha Company",
    status: "Active",
    specialization: "Infantry"
  },
  {
    id: "002",
    name: "Sarah Johnson",
    rank: "Lieutenant",
    unit: "Bravo Company",
    status: "Deployed",
    specialization: "Communications"
  },
  {
    id: "003",
    name: "Michael Brown",
    rank: "Sergeant",
    unit: "Charlie Company",
    status: "Training",
    specialization: "Logistics"
  },
  {
    id: "004",
    name: "Emily Davis",
    rank: "Major",
    unit: "HQ Battalion",
    status: "Active",
    specialization: "Intelligence"
  },
  {
    id: "005",
    name: "Robert Wilson",
    rank: "Corporal",
    unit: "Alpha Company",
    status: "On Leave",
    specialization: "Medical"
  }
]

const getStatusBadgeVariant = (status: PersonnelData["status"]) => {
  switch (status) {
    case "Active":
      return "default"
    case "Deployed":
      return "destructive"
    case "On Leave":
      return "secondary"
    case "Training":
      return "outline"
    default:
      return "default"
  }
}

export function PersonnelTable() {
  return (
    <div className="rounded-md border border-slate-200 bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="font-semibold">ID</TableHead>
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Rank</TableHead>
            <TableHead className="font-semibold">Unit</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Specialization</TableHead>
            <TableHead className="text-right font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockPersonnel.map((person) => (
            <TableRow key={person.id} className="hover:bg-slate-50">
              <TableCell className="font-medium">{person.id}</TableCell>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.rank}</TableCell>
              <TableCell>{person.unit}</TableCell>
              <TableCell>
                <Badge variant={getStatusBadgeVariant(person.status)}>
                  {person.status}
                </Badge>
              </TableCell>
              <TableCell>{person.specialization}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
