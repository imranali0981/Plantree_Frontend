import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            <p className="text-xl text-muted-foreground mb-8">
              This is a placeholder for the dashboard functionality. The actual dashboard will be implemented in future
              updates.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
