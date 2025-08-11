"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Search, Lightbulb, Wrench, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Business Discovery",
    description: "We learn YOUR business first",
    detail: "Deep dive into your industry, customers, and current processes to understand what AI can actually improve.",
    color: "bg-blue-500"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Custom Strategy",
    description: "AI creates your roadmap",
    detail: "Our AI analyzes your specific situation and creates a personalized implementation plan with clear ROI projections.",
    color: "bg-green-500"
  },
  {
    number: "03",
    icon: Wrench,
    title: "Guided Implementation",
    description: "No $485 repair bills",
    detail: "Step-by-step guidance with human experts available when you need them. No more broken implementations.",
    color: "bg-purple-500"
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Continuous Optimization",
    description: "Gets smarter every day",
    detail: "Your AI tools learn and adapt to your business, automatically optimizing performance and identifying new opportunities.",
    color: "bg-orange-500"
  }
]

export function Solution() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Guided Journey to AI Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike generic AI tools, we start with your business and build a solution that actually fits.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto ${step.color} rounded-full flex items-center justify-center mb-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-mono text-gray-500 mb-2">{step.number}</div>
                    <CardTitle className="text-xl text-gray-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-primary font-semibold mb-4">{step.description}</p>
                    <p className="text-gray-600">{step.detail}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The difference is guidance
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Other tools throw features at you and hope something sticks. We start with your business goals 
              and build AI solutions that actually move the needle.
            </p>
            <Button asChild size="lg">
              <Link href="/assessment">Start Your Free Assessment</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}