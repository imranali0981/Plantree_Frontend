import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Dr. Emma Wilson",
    role: "Founder & CEO",
    bio: "Environmental scientist with 15+ years of experience in forestry and ecosystem restoration. Passionate about using technology to solve environmental challenges.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "David Chen",
    role: "Chief Technology Officer",
    bio: "AI specialist with a background in environmental data analysis. Led the development of Plantree's core algorithms and prediction models.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Dr. Sophia Patel",
    role: "Head of Research",
    bio: "Botanist specializing in forest ecosystems and biodiversity. Leads Plantree's research initiatives and species database development.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export default function TeamPage() {
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
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Meet Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Meet the passionate experts behind Plantree who are dedicated to revolutionizing tree plantation through
              AI and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-xl border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <div className="text-white text-8xl font-bold opacity-30">{member.name.charAt(0)}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4 mb-2">
                        <Link
                          href={member.social.linkedin}
                          className="text-white hover:text-green-400 transition-colors duration-200"
                        >
                          <Linkedin size={20} />
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="text-white hover:text-green-400 transition-colors duration-200"
                        >
                          <Twitter size={20} />
                        </Link>
                        <Link
                          href={member.social.github}
                          className="text-white hover:text-green-400 transition-colors duration-200"
                        >
                          <Github size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6 pb-8 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
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
            <span className="inline-block text-green-600 dark:text-green-400 font-medium mb-2">Careers</span>
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for passionate individuals who share our vision of using technology to create a more
              sustainable future.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
