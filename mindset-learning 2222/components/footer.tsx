import type React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">Mindset</span>
              <span className="text-xl font-bold">Learning</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Transforming education through innovative learning experiences and AI-powered tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/courses">Courses</FooterLink>
              <FooterLink href="/chatbot">AI Assistant</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Mumbai Maharastra</li>

              <li>hridhyanghadi@gmail.com</li>
              <li>swatijawaji76@gmail.com</li>
              <li>99877 11301</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Mindset Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  )
}
