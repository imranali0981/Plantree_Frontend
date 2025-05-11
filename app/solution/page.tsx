import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Map, BarChart2, Droplets, Leaf, TreePine, Cpu, Database } from "lucide-react"
import AIAnalysisIllustration from "@/components/ai-analysis-illustration"

export default function SolutionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-50 dark:bg-green-900/10">
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
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Our Solution</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h1>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Plantree uses advanced AI algorithms to optimize tree plantation efforts for maximum environmental impact
              and sustainability.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-green-600 hover:bg-green-700 rounded-full px-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Link href="#demo">Try Our Solution</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Our Process</span>
            <h2 className="text-3xl font-bold mb-4">How Plantree Works</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full h-fit">
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

                <div className="flex gap-6">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full h-fit">
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

                <div className="flex gap-6">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full h-fit">
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

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
              <AIAnalysisIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
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
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Benefits</span>
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Increased Survival Rate</h3>
              <p className="text-muted-foreground">
                Our AI-driven recommendations increase tree survival rates by up to 60% compared to traditional
                approaches.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
                <Droplets className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Water Conservation</h3>
              <p className="text-muted-foreground">
                Optimize water usage with species selection and irrigation recommendations tailored to local rainfall
                patterns and soil conditions.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
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

      {/* Technology Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Technology</span>
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 transform transition-transform hover:scale-105">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full w-fit mb-6">
                <Cpu className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">
                Advanced machine learning algorithms analyze environmental data to provide optimal plantation
                recommendations.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 transform transition-transform hover:scale-105">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full w-fit mb-6">
                <Database className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Big Data Processing</h3>
              <p className="text-muted-foreground">
                Processing vast amounts of environmental data to create actionable insights for tree plantation
                initiatives.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 transform transition-transform hover:scale-105">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full w-fit mb-6">
                <Map className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Geospatial Analysis</h3>
              <p className="text-muted-foreground">
                Utilizing satellite imagery and geospatial data to identify optimal planting locations and monitor
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-green-50 dark:bg-green-900/10 relative overflow-hidden">
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Interactive Demo</span>
              <h2 className="text-3xl font-bold mb-4">Try Our Solution</h2>
              <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-8 shadow-xl border border-green-100 dark:border-green-900/30">
              <div className="aspect-video relative rounded-lg overflow-hidden mb-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <Cpu className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Dashboard</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Our interactive dashboard provides real-time insights and recommendations for your tree plantation
                    projects.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Experience how Plantree can transform your tree plantation initiatives with our interactive demo.
                </p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 rounded-full px-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
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
