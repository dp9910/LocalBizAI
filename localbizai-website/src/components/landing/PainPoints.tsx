"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { motion } from "framer-motion"
import { AlertTriangle, DollarSign, Target, Clock } from "lucide-react"

const painPoints = [
  {
    icon: Clock,
    title: "35+ Tools in One Article",
    description: "Just choosing takes weeks",
    stat: "35+",
    detail: "Average number of AI tools mentioned in business articles"
  },
  {
    icon: DollarSign,
    title: "$485 Average Repair Costs",
    description: "When AI code crashes your site",
    stat: "$485",
    detail: "Average cost to fix broken AI implementations"
  },
  {
    icon: Target,
    title: "97% See No Results",
    description: "Generic tools don't understand your business",
    stat: "97%",
    detail: "Of businesses using AI tools see no measurable improvement"
  },
  {
    icon: AlertTriangle,
    title: "48% Can't Choose",
    description: "Overwhelmed by endless options",
    stat: "48%",
    detail: "Of small business owners feel paralyzed by AI tool selection"
  }
]

export function PainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The AI Tool Chaos Killing Small Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While big corporations have dedicated AI teams, small businesses are drowning in complexity and seeing their investments fail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-danger/10 rounded-full flex items-center justify-center mb-4">
                    <point.icon className="w-8 h-8 text-danger" />
                  </div>
                  <div className="text-3xl font-bold text-danger mb-2">{point.stat}</div>
                  <CardTitle className="text-lg text-gray-900">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{point.description}</p>
                  <p className="text-sm text-gray-500">{point.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sound familiar?
            </h3>
            <p className="text-gray-600 text-lg">
              You're not alone. 73% of small businesses have tried and abandoned at least one AI tool in the past year.
              The problem isn't AI—it's the lack of guidance tailored to your specific business needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}