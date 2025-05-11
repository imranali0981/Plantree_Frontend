import { Target, TreePine, Users, BarChart, Globe, Database } from "lucide-react"
import TreePlantingIllustration from "@/components/tree-planting-illustration"

export default function ObjectivesPage() {
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
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Our Goals</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Objectives</h1>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Plantree aims to revolutionize tree plantation efforts through AI-driven insights and regional
              optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Main Objectives Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Our Mission</span>
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Plantree, our mission is to enhance the effectiveness and sustainability of tree plantation
                initiatives worldwide through data-driven insights and AI-powered recommendations.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full h-fit">
                    <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optimize Tree Plantation</h3>
                    <p className="text-muted-foreground">
                      Increase the success rate of tree plantation initiatives by providing data-driven recommendations
                      for species selection, planting techniques, and maintenance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full h-fit">
                    <TreePine className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enhance Environmental Impact</h3>
                    <p className="text-muted-foreground">
                      Maximize the positive environmental impact of tree plantation efforts, including carbon
                      sequestration, biodiversity support, and soil health improvement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full h-fit">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Empower Communities</h3>
                    <p className="text-muted-foreground">
                      Provide communities, organizations, and governments with the tools and knowledge to implement
                      effective tree plantation programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <TreePlantingIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
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
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Strategy</span>
            <h2 className="text-3xl font-bold mb-4">Strategic Objectives</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
                <BarChart className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Develop and refine AI algorithms that analyze environmental data to provide actionable insights for tree
                plantation initiatives.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
                <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Expand our platform to support tree plantation initiatives in diverse regions and ecosystems worldwide.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
                <Database className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Knowledge Repository</h3>
              <p className="text-muted-foreground">
                Build a comprehensive database of tree species, planting techniques, and environmental impact data to
                inform future initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Roadmap</span>
            <h2 className="text-3xl font-bold mb-4">Our Roadmap</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="relative pl-10 border-l-2 border-green-600 dark:border-green-400">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600 dark:bg-green-400"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phase 1: Platform Development</h3>
                  <p className="text-muted-foreground mb-2">2023 - 2024</p>
                  <p className="text-muted-foreground">
                    Develop and launch the core Plantree platform with AI-powered analysis and recommendation
                    capabilities.
                  </p>
                </div>
              </div>

              <div className="relative pl-10 border-l-2 border-green-600 dark:border-green-400">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600 dark:bg-green-400"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phase 2: Regional Expansion</h3>
                  <p className="text-muted-foreground mb-2">2024 - 2025</p>
                  <p className="text-muted-foreground">
                    Expand our database and algorithms to support tree plantation initiatives in diverse regions and
                    ecosystems.
                  </p>
                </div>
              </div>

              <div className="relative pl-10 border-l-2 border-green-600 dark:border-green-400">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600 dark:bg-green-400"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phase 3: Community Engagement</h3>
                  <p className="text-muted-foreground mb-2">2025 - 2026</p>
                  <p className="text-muted-foreground">
                    Develop tools and resources to engage communities and organizations in tree plantation initiatives.
                  </p>
                </div>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600 dark:bg-green-400"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phase 4: Global Impact</h3>
                  <p className="text-muted-foreground mb-2">2026 and beyond</p>
                  <p className="text-muted-foreground">
                    Scale our platform to support global tree plantation initiatives and contribute to international
                    climate goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
