import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Globe, Droplets, TreePine, Database, Cpu } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function UpdatedHome() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(5)"
            >
              <path d="M0 50h100M50 0v100M25 25h50v50h-50z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="25" cy="25" r="5" fill="currentColor" />
              <circle cx="75" cy="25" r="5" fill="currentColor" />
              <circle cx="25" cy="75" r="5" fill="currentColor" />
              <circle cx="75" cy="75" r="5" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Plantree Works</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform analyzes regional data to optimize tree plantation for maximum environmental
              impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-8 shadow-sm border border-green-100 dark:border-green-900/30 transform transition-transform hover:scale-105">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
                <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Regional Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes soil conditions, climate patterns, and local ecosystems to determine optimal tree
                species and planting locations.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-8 shadow-sm border border-green-100 dark:border-green-900/30 transform transition-transform hover:scale-105">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact Prediction</h3>
              <p className="text-muted-foreground">
                Predict the environmental impact of tree plantation initiatives, including carbon sequestration,
                biodiversity enhancement, and soil health improvement.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-8 shadow-sm border border-green-100 dark:border-green-900/30 transform transition-transform hover:scale-105">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-fit mb-6">
                <Droplets className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Resource Optimization</h3>
              <p className="text-muted-foreground">
                Optimize water usage, maintenance schedules, and resource allocation for sustainable and efficient tree
                plantation projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 dark:bg-green-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tree-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 L60 30 L90 30 L65 50 L75 80 L50 60 L25 80 L35 50 L10 30 L40 30 Z" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tree-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">500K+</p>
              <p className="text-lg">Trees Planted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">25K</p>
              <p className="text-lg">Tons of CO₂ Sequestered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">100+</p>
              <p className="text-lg">Communities Supported</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">30%</p>
              <p className="text-lg">Water Conservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Our Technology</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Tree Plantation</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge artificial intelligence with environmental science to revolutionize tree
              plantation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Circuit Board Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="tech-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M0 50h100M50 0v100M25 25h50v50h-50z" fill="none" stroke="white" strokeWidth="1" />
                        <circle cx="25" cy="25" r="5" fill="white" />
                        <circle cx="75" cy="25" r="5" fill="white" />
                        <circle cx="25" cy="75" r="5" fill="white" />
                        <circle cx="75" cy="75" r="5" fill="white" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#tech-pattern)" />
                    </svg>
                  </div>

                  {/* Tree Silhouettes */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2">
                    <svg
                      className="absolute bottom-0 w-full"
                      viewBox="0 0 1200 300"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0,300 L50,300 L50,200 L30,180 L50,160 L70,180 L50,200 L50,300 L100,300 L100,250 L80,230 L100,210 L120,230 L100,250 L100,300 L150,300 L150,220 L130,200 L150,180 L170,200 L150,220 L150,300 L200,300 L200,180 L180,160 L200,140 L220,160 L200,180 L200,300 L250,300 L250,230 L230,210 L250,190 L270,210 L250,230 L250,300 L300,300 L300,200 L280,180 L300,160 L320,180 L300,200 L300,300 L350,300 L350,250 L330,230 L350,210 L370,230 L350,250 L350,300 L400,300 L400,220 L380,200 L400,180 L420,200 L400,220 L400,300 L450,300 L450,180 L430,160 L450,140 L470,160 L450,180 L450,300 L500,300 L500,230 L480,210 L500,190 L520,210 L500,230 L500,300 L550,300 L550,200 L530,180 L550,160 L570,180 L550,200 L550,300 L600,300 L600,250 L580,230 L600,210 L620,230 L600,250 L600,300 L650,300 L650,220 L630,200 L650,180 L670,200 L650,220 L650,300 L700,300 L700,180 L680,160 L700,140 L720,160 L700,180 L700,300 L750,300 L750,230 L730,210 L750,190 L770,210 L750,230 L750,300 L800,300 L800,200 L780,180 L800,160 L820,180 L800,200 L800,300 L850,300 L850,250 L830,230 L850,210 L870,230 L850,250 L850,300 L900,300 L900,220 L880,200 L900,180 L920,200 L900,220 L900,300 L950,300 L950,180 L930,160 L950,140 L970,160 L950,180 L950,300 L1000,300 L1000,230 L980,210 L1000,190 L1020,210 L1000,230 L1000,300 L1050,300 L1050,200 L1030,180 L1050,160 L1070,180 L1050,200 L1050,300 L1100,300 L1100,250 L1080,230 L1100,210 L1120,230 L1100,250 L1100,300 L1150,300 L1150,220 L1130,200 L1150,180 L1170,200 L1150,220 L1150,300 L1200,300 L1200,300 L0,300 Z"
                        fill="rgba(255,255,255,0.3)"
                      />
                    </svg>
                  </div>

                  {/* Data Visualization Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Cpu className="h-16 w-16 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-2xl font-bold">AI-Powered Analysis</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">
                Why Choose Plantree
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable Impact Through Technology</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines cutting-edge AI technology with environmental science to create sustainable tree
                plantation solutions that make a real difference.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mt-1">
                    <Cpu className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">AI-Driven Analysis</h3>
                    <p className="text-muted-foreground">
                      Our algorithms process satellite imagery, soil data, and climate patterns to create optimal
                      planting strategies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mt-1">
                    <Database className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Comprehensive Data</h3>
                    <p className="text-muted-foreground">
                      We maintain an extensive database of tree species, regional conditions, and environmental factors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mt-1">
                    <TreePine className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Biodiversity Focus</h3>
                    <p className="text-muted-foreground">
                      Our recommendations prioritize native species that support local ecosystems and wildlife.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Join Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in creating a greener, more sustainable future through AI-powered tree plantation initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 rounded-full px-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Link href="/solution">Explore Our Solution</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full px-8 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
