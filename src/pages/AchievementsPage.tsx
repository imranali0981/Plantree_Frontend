import { Card, CardContent } from "../components/ui/card"
import { Award, Users, TreePine, Globe } from "lucide-react"

const achievements = [
  {
    title: "Regional Impact Award",
    organization: "Global Forestry Initiative",
    year: 2023,
    description:
      "Recognized for outstanding contribution to regional tree plantation efforts and environmental impact.",
    icon: Award,
  },
  {
    title: "1 Million Trees Milestone",
    organization: "Internal Achievement",
    year: 2023,
    description: "Successfully supported the plantation of over 1 million trees across various regions.",
    icon: TreePine,
  },
  {
    title: "Community Engagement Excellence",
    organization: "Sustainable Development Council",
    year: 2022,
    description: "Awarded for exceptional community engagement in tree plantation initiatives.",
    icon: Users,
  },
  {
    title: "Innovation in Climate Action",
    organization: "Tech for Planet",
    year: 2022,
    description: "Recognized for innovative use of AI technology in climate action and environmental conservation.",
    icon: Globe,
  },
]

const impactStories = [
  {
    title: "Restoring the Green Belt",
    location: "Eastern Highlands",
    image: "/case-study-1.png",
    description:
      "Helped local communities restore degraded land through strategic tree plantation, resulting in improved soil health and water retention.",
  },
  {
    title: "Urban Forest Initiative",
    location: "Metropolitan City",
    image: "/case-study-2.png",
    description:
      "Supported city planners in creating urban forests that improve air quality and provide green spaces for residents.",
  },
  {
    title: "Watershed Protection",
    location: "River Valley Region",
    image: "/case-study-3.png",
    description:
      "Implemented strategic tree plantation along watersheds to reduce erosion and improve water quality for downstream communities.",
  },
]

export default function AchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Achievements</h1>
            <p className="text-xl text-muted-foreground">
              Celebrating the impact of Plantree's AI-powered tree plantation initiatives around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recognition & Milestones</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full h-fit">
                      <achievement.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.organization} | {achievement.year}
                      </p>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm text-center">
              <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">1M+</p>
              <p className="text-lg font-medium">Trees Planted</p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm text-center">
              <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">50K</p>
              <p className="text-lg font-medium">Tons of CO₂ Sequestered</p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm text-center">
              <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">200+</p>
              <p className="text-lg font-medium">Communities Supported</p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg p-8 shadow-sm text-center">
              <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">25</p>
              <p className="text-lg font-medium">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Impact Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">{story.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{story.location}</p>
                  <p className="text-muted-foreground">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50 dark:bg-green-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Partners Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-card p-8">
              <CardContent className="p-0">
                <p className="text-lg italic mb-6">
                  "Plantree's AI-powered recommendations have transformed our reforestation efforts. We've seen a 40%
                  increase in tree survival rates and significant improvements in biodiversity."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <img src="/testimonial-1.png" alt="Testimonial" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">Dr. Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Environmental Conservation Institute</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-card p-8">
              <CardContent className="p-0">
                <p className="text-lg italic mb-6">
                  "As a city planner, Plantree has been invaluable in helping us create sustainable urban forests. The
                  data-driven approach ensures we plant the right trees in the right places."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <img src="/testimonial-2.png" alt="Testimonial" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Metropolitan Urban Planning Department</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
