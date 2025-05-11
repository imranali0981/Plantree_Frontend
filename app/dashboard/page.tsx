import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cpu, Database, BarChart2, TreePine, LineChart } from "lucide-react"
import DashboardIllustration from "@/components/dashboard-illustration"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-green-50 dark:bg-green-900/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#16a34a"
              d="M42.8,-65.2C56.9,-56.3,70.8,-46.6,77.9,-33.1C85,-19.6,85.3,-2.3,81.6,13.5C77.9,29.3,70.2,43.6,58.9,54.8C47.6,66,32.7,74.1,16.6,77.8C0.5,81.5,-16.8,80.8,-32.5,75.1C-48.2,69.4,-62.3,58.7,-70.6,44.6C-78.9,30.5,-81.4,13,-78.8,-3.1C-76.2,-19.2,-68.5,-33.9,-57.7,-44.3C-46.9,-54.7,-33,-60.8,-19.3,-69.5C-5.6,-78.2,7.9,-89.5,21.3,-87.5C34.7,-85.5,48,-74.1,42.8,-65.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Analytics Platform</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dashboard</h1>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground mb-8">
              Access real-time insights and analytics for your tree plantation projects.
            </p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 rounded-full px-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Analytics</span>
            <h2 className="text-3xl font-bold mb-4">Dashboard Features</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive dashboard provides powerful tools to monitor and optimize your tree plantation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 transform transition-transform hover:scale-105">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full w-fit mb-6">
                <Cpu className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Recommendations</h3>
              <p className="text-muted-foreground">
                Get personalized recommendations for tree species, planting locations, and maintenance schedules.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 transform transition-transform hover:scale-105">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full w-fit mb-6">
                <Database className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Visualization</h3>
              <p className="text-muted-foreground">
                Interactive charts and graphs to visualize your plantation data and environmental impact.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 transform transition-transform hover:scale-105">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full w-fit mb-6">
                <BarChart2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Tracking</h3>
              <p className="text-muted-foreground">
                Monitor the growth and health of your trees with real-time tracking and alerts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <DashboardIllustration />
            </div>

            <div>
              <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Coming Soon</span>
              <h2 className="text-3xl font-bold mb-6">Advanced Analytics Dashboard</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive dashboard is currently under development. Soon you'll be able to access powerful
                analytics and insights to optimize your tree plantation projects.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
                    <TreePine className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tree Growth Monitoring</h3>
                    <p className="text-muted-foreground">
                      Track the growth and health of your trees with detailed metrics and visualizations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
                    <LineChart className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
                    <p className="text-muted-foreground">
                      Measure your carbon sequestration, biodiversity impact, and other environmental metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
