
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function CreateUnitDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    commander: "",
    location: "",
    description: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log("Creating unit:", formData)
    
    toast({
      title: "Unit Created",
      description: `${formData.name} has been created successfully.`,
    })
    
    setFormData({
      name: "",
      type: "",
      commander: "",
      location: "",
      description: ""
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          <Shield className="h-4 w-4 mr-2" />
          Create Unit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Unit</DialogTitle>
          <DialogDescription>
            Enter the details for the new military unit.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unitName" className="text-right">
                Unit Name
              </Label>
              <Input
                id="unitName"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="col-span-3"
                placeholder="e.g., Echo Company"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select unit type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Infantry">Infantry</SelectItem>
                  <SelectItem value="Armored">Armored</SelectItem>
                  <SelectItem value="Artillery">Artillery</SelectItem>
                  <SelectItem value="Support">Support</SelectItem>
                  <SelectItem value="Special Forces">Special Forces</SelectItem>
                  <SelectItem value="Medical">Medical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="commander" className="text-right">
                Commander
              </Label>
              <Input
                id="commander"
                value={formData.commander}
                onChange={(e) => setFormData({...formData, commander: e.target.value})}
                className="col-span-3"
                placeholder="e.g., Col. Anderson"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="col-span-3"
                placeholder="e.g., Base Echo"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="col-span-3"
                placeholder="Unit description and purpose"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Unit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
