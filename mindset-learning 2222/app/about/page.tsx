import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Mindset Learning</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're on a mission to transform education through innovative learning experiences and cutting-edge technology.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Mindset Learning</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <FeatureItem text="Expert-led courses designed by industry professionals" />
            <FeatureItem text="AI-powered learning assistant for personalized support" />
            <FeatureItem text="Interactive and engaging learning experiences" />
            <FeatureItem text="Flexible learning options to fit your schedule" />
          </div>
          <div className="space-y-4">
            <FeatureItem text="Regular updates to keep content current and relevant" />
            <FeatureItem text="Community support from fellow learners" />
            <FeatureItem text="Practical projects and assessments" />
            <FeatureItem text="Certificates upon course completion" />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
      <p>{text}</p>
    </div>
  )
}
