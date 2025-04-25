import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock course data
const courses = [
  {
    id: 1,
    title: "Introduction to Data Science",
    description:
      "Learn the fundamentals of data science, including statistics, Python programming, and data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Beginner",
    duration: "8 weeks",
    price: "$49.99",
    category: "Data Science",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, and modern frameworks to build responsive and dynamic websites.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Intermediate",
    duration: "12 weeks",
    price: "$69.99",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    description: "Discover strategies for social media marketing, SEO, content creation, and analytics.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Beginner",
    duration: "6 weeks",
    price: "$39.99",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    description: "Explore the core concepts of machine learning, including algorithms, model training, and evaluation.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Advanced",
    duration: "10 weeks",
    price: "$79.99",
    category: "Data Science",
  },
  {
    id: 5,
    title: "UX/UI Design Principles",
    description:
      "Learn user experience and interface design principles to create intuitive and engaging digital products.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$59.99",
    category: "Design",
  },
  {
    id: 6,
    title: "Business Leadership",
    description: "Develop essential leadership skills for managing teams and driving organizational success.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Intermediate",
    duration: "6 weeks",
    price: "$49.99",
    category: "Business",
  },
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover a wide range of courses designed to help you master new skills, advance your career, and achieve your
          learning goals.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: any }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">{course.category}</Badge>
          <Badge variant="secondary">{course.level}</Badge>
        </div>
        <h3 className="text-xl font-semibold">{course.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{course.description}</p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Duration: {course.duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/courses/${course.id}`}>Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
