import { Card, CardContent } from "../components/ui/card"

const sdgGoals = [
  {
    number: 13,
    title: "Climate Action",
    description:
      "Plantree contributes to climate action by optimizing tree plantation for maximum carbon sequestration and climate resilience.",
    image: "/sdg-13.png",
  },
  {
    number: 15,
    title: "Life on Land",
    description:
      "Our platform promotes biodiversity and ecosystem health through strategic tree plantation and habitat restoration.",
    image: "/sdg-15.png",
  },
  {
    number: 6,
    title: "Clean Water and Sanitation",
    description:
      "Plantree helps improve water quality and reduce soil erosion through strategic tree plantation in watershed areas.",
    image: "/sdg-6.png",
  },
  {
    number: 11,
    title: "Sustainable Cities and Communities",
    description: "We support urban forestry initiatives to create greener, more sustainable urban environments.",
    image: "/sdg-11.png",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    description:
      "Plantree fosters partnerships between communities, organizations, and governments to achieve sustainable development goals.",
    image: "/sdg-17.png",
  },
]

export default function SDGsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Supporting Sustainable Development Goals</h1>
            <p className="text-xl text-muted-foreground">
              Plantree is committed to supporting the United Nations Sustainable Development Goals (SDGs) through our
              AI-powered tree plantation platform.
            </p>
          </div>
        </div>
      </section>

      {/* SDGs Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Contribution to SDGs</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Plantree, we believe that strategic tree plantation can contribute significantly to multiple
                Sustainable Development Goals. Our AI-powered platform is designed to maximize these contributions
                through data-driven insights and recommendations.
              </p>
              <p className="text-lg text-muted-foreground">
                By optimizing tree plantation for environmental impact, we help communities, organizations, and
                governments make meaningful progress toward these global goals.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/sdgs-overview.png"
                alt="Sustainable Development Goals"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key SDGs Section */}
      <section className="py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key SDGs We Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdgGoals.slice(0, 3).map((goal) => (
              <Card key={goal.number} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={goal.image || "/placeholder.svg"}
                    alt={`SDG ${goal.number}: ${goal.title}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">
                    SDG {goal.number}: {goal.title}
                  </h3>
                  <p className="text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {sdgGoals.slice(3).map((goal) => (
              <Card key={goal.number} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={goal.image || "/placeholder.svg"}
                    alt={`SDG ${goal.number}: ${goal.title}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">
                    SDG {goal.number}: {goal.title}
                  </h3>
                  <p className="text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact Metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
              <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">500K+</p>
              <p className="text-lg font-medium">Trees Planted</p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
              <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">25K</p>
              <p className="text-lg font-medium">Tons of CO₂ Sequestered</p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
              <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">100+</p>
              <p className="text-lg font-medium">Communities Supported</p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
              <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">30%</p>
              <p className="text-lg font-medium">Water Conservation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
