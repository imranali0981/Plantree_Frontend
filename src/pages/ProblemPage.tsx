import { Card, CardContent } from "../components/ui/card"
import { Axe, Thermometer, CloudRain, AlertTriangle } from "lucide-react"

export default function ProblemPage() {
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
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">The Challenge</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Problem We're Solving</h1>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Deforestation and improper tree plantation efforts are leading to environmental degradation and
              inefficient use of resources.
            </p>
          </div>
        </div>
      </section>

      {/* Key Problems Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Key Issues</span>
              <h2 className="text-3xl font-bold mb-6">Key Challenges</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tree plantation efforts often fail due to a lack of data-driven decision making and regional analysis.
                Here are the key challenges we're addressing:
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full h-fit">
                    <Axe className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Deforestation</h3>
                    <p className="text-muted-foreground">
                      Global deforestation continues at an alarming rate, with 10 million hectares of forest lost
                      annually, contributing to climate change and biodiversity loss.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-4 rounded-full h-fit">
                    <Thermometer className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Climate Change</h3>
                    <p className="text-muted-foreground">
                      Rising global temperatures are altering ecosystems and making traditional tree plantation
                      approaches less effective in many regions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-full h-fit">
                    <CloudRain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Water Scarcity</h3>
                    <p className="text-muted-foreground">
                      Inefficient tree plantation efforts can waste precious water resources, especially in regions
                      already facing water scarcity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-orange-100 dark:bg-orange-900/20 p-4 rounded-full h-fit">
                    <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inefficient Resource Allocation</h3>
                    <p className="text-muted-foreground">
                      Many tree plantation initiatives fail due to poor species selection, improper planting techniques,
                      and inadequate maintenance planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1615411640812-41516c8c04d1?q=80&w=1974&auto=format&fit=crop"
                alt="Deforestation impact"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
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
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">The Impact</span>
            <h2 className="text-3xl font-bold mb-4">The Impact of Poor Tree Plantation</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-red-600 dark:text-red-400 mb-4">40%</p>
                  <h3 className="text-xl font-medium mb-2">Plantation Failure Rate</h3>
                  <p className="text-muted-foreground">
                    Nearly 40% of tree plantation efforts fail due to improper species selection and planting
                    techniques.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-4">30%</p>
                  <h3 className="text-xl font-medium mb-2">Water Waste</h3>
                  <p className="text-muted-foreground">
                    Inefficient irrigation and species selection leads to approximately 30% water waste in tree
                    plantation projects.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">3x</p>
                  <h3 className="text-xl font-medium mb-2">Potential Impact</h3>
                  <p className="text-muted-foreground">
                    Data-driven tree plantation can have up to 3 times the environmental impact of traditional
                    approaches.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
