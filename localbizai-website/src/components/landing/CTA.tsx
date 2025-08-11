"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Stop Fighting Tomorrow's War with Yesterday's Weapons
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your competitors are already using AI. The question isn't whether to adopt AI—it's whether 
            to do it right or waste money on tools that don't work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 h-full">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Free AI Readiness Assessment</h3>
              <p className="text-gray-300 mb-6">
                Get a personalized report on exactly which AI tools will work for your specific business. 
                No generic recommendations—just actionable insights.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>5-minute business assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Custom AI strategy report</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>ROI projections for your business</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>No commitment required</span>
                </li>
              </ul>
              <Button asChild variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/assessment">
                  Start Free Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-lg p-8 h-full">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Start Your Guided Journey</h3>
              <p className="text-blue-100 mb-6">
                Ready to implement AI that actually works? Join hundreds of small businesses 
                already seeing real results with LocalBizAI.
              </p>
              <ul className="space-y-3 mb-8 text-blue-100">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span>30-day money-back guarantee</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span>Human expert support included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span>No setup fees or hidden costs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span>Cancel anytime</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-gray-100">
                <Link href="/auth/signup">
                  Get Started Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Over 500 small businesses trust LocalBizAI to guide their AI implementation. 
            Join them and stop wasting money on AI tools that don't deliver.
          </p>
        </motion.div>
      </div>
    </section>
  )
}