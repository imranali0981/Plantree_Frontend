import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowRight, BarChart3, Globe, Droplets, Leaf } from "lucide-react"
import Slider from "../components/slider"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[90vh]">
        <Slider
          slides={[
            {
              image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1974&auto=format&fit=crop",
              title: "Smart Tree Plantation Solutions",
              description:
                "AI-powered assessment and prediction for sustainable tree plantation and environmental impact across regions.",
            },
            {
              image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop",
              title: "Optimize Environmental Impact",
              description:
                "Our AI algorithms analyze regional data to maximize the positive impact of tree plantation initiatives.",
            },
            {
              image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1770&auto=format&fit=crop",
              title: "Community-Driven Reforestation",
              description: "Empowering communities with data-driven insights for successful tree plantation projects.",
            },
          ]}
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 rounded-full px-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <Link to="/solution">
              Try Our Solution <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
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
      <section className="py-16 bg-green-600 dark:bg-green-800">
        <div className="container mx-auto px-4">
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
                <Link to="/solution">Explore Our Solution</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full px-8 transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                alt="Tree planting"
                className="h-full w-full object-cover"
              />
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
                    <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Data-Driven Decisions</h3>
                    <p className="text-muted-foreground">
                      Make informed plantation decisions based on scientific analysis and regional data.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mt-1">
                    <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Increased Survival Rates</h3>
                    <p className="text-muted-foreground">
                      Our recommendations lead to up to 60% higher tree survival rates.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mt-1">
                    <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Community Empowerment</h3>
                    <p className="text-muted-foreground">
                      We work with local communities to ensure long-term sustainability.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
