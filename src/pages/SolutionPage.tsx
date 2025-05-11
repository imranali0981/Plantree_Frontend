import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Brain, Map, BarChart2, Droplets, Leaf, TreePine } from "lucide-react"

export default function SolutionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Solution</h1>
            <p className="text-xl text-muted-foreground">
              Plantree uses advanced AI algorithms to optimize tree plantation efforts for maximum environmental impact
              and sustainability.
            </p>
            <Button asChild size="lg" className="mt-8 bg-green-600 hover:bg-green-700">
              <Link to="#demo">Try Our Solution</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How Plantree Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
                    <Brain className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
                    <p className="text-muted-foreground">
                      Our AI algorithms analyze satellite imagery, soil data, climate patterns, and local biodiversity
                      to create optimal tree plantation strategies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
                    <Map className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Regional Customization</h3>
                    <p className="text-muted-foreground">
                      Plantree provides region-specific recommendations for tree species, planting density, and
                      maintenance schedules based on local conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
                    <BarChart2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Impact Prediction</h3>
                    <p className="text-muted-foreground">
                      Our platform predicts the environmental impact of tree plantation initiatives, including carbon
                      sequestration, biodiversity enhancement, and soil health improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <img
                src="/ai-analysis.png"
                alt="AI-powered tree plantation analysis"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-fit mb-6">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Increased Survival Rate</h3>
              <p className="text-muted-foreground">
                Our AI-driven recommendations increase tree survival rates by up to 60% compared to traditional
                approaches.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-fit mb-6">
                <Droplets className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Water Conservation</h3>
              <p className="text-muted-foreground">
                Optimize water usage with species selection and irrigation recommendations tailored to local rainfall
                patterns and soil conditions.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-fit mb-6">
                <TreePine className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Biodiversity Enhancement</h3>
              <p className="text-muted-foreground">
                Promote local biodiversity by recommending native species that support local wildlife and ecosystem
                health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Try Our Solution</h2>

            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
                <img src="/demo-dashboard.png" alt="Plantree dashboard demo" className="h-full w-full object-cover" />
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Experience how Plantree can transform your tree plantation initiatives with our interactive demo.
                </p>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Launch Interactive Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
