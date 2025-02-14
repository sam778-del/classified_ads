import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

export default function MessagesPage() {
  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px]">
        {/* Conversations List */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Messages</h2>
          </div>
          <div className="divide-y overflow-auto h-[calc(800px-65px)]">
            {Array.from({ length: 10 }).map((_, i) => (
              <button key={i} className="w-full p-4 flex items-start gap-4 hover:bg-accent text-left">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <p className="font-medium">User {i + 1}</p>
                    <span className="text-xs text-muted-foreground">2h ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">Latest message preview goes here...</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="border rounded-lg overflow-hidden md:col-span-2">
          <div className="p-4 border-b flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>

          <div className="h-[calc(800px-65px-70px)] overflow-auto p-4 space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    i % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm">
                    This is a sample message that might be quite long and wrap to multiple lines.
                  </p>
                  <p className="text-xs mt-1 opacity-70">2:30 PM</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <form className="flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

