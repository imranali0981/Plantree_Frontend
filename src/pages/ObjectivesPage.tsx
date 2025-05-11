import { Target, TreePine, Users, BarChart, Globe, Database } from "lucide-react"

export default function ObjectivesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Objectives</h1>
            <p className="text-xl text-muted-foreground">
              Plantree aims to revolutionize tree plantation efforts through AI-driven insights and regional
              optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Main Objectives Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Plantree, our mission is to enhance the effectiveness and sustainability of tree plantation
                initiatives worldwide through data-driven insights and AI-powered recommendations.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
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

                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
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

                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
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

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src="/tree-planting.png" alt="Tree planting initiative" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section className="py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Strategic Objectives</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-fit mb-6">
                <BarChart className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Develop and refine AI algorithms that analyze environmental data to provide actionable insights for tree
                plantation initiatives.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-fit mb-6">
                <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Expand our platform to support tree plantation initiatives in diverse regions and ecosystems worldwide.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full w-fit mb-6">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Roadmap</h2>

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
