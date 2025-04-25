import type React from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary text-white py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-start space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unlock Your Potential with Mindset Learning
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Transform your learning experience with our innovative courses and AI-powered tools designed to help you
              achieve your educational goals.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/courses">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block">
          <div className="w-full h-full bg-[url('/placeholder.svg?height=600&width=500')] bg-no-repeat bg-right-bottom bg-contain opacity-20"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Mindset Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of education to transform lives. Our platform combines cutting-edge technology
              with expert-crafted content to provide a learning experience like no other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10" />}
              title="Expert-Led Courses"
              description="Learn from industry professionals with courses designed to build practical skills."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10" />}
              title="AI Document Assistant"
              description="Upload your study materials and get instant answers to your questions."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Community Learning"
              description="Join a community of learners to share insights and grow together."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm">
      <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
