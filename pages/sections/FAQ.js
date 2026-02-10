import { useState } from 'react'

const faqs = [
  {
    question: "How much does a plumber cost in California?",
    answer: "California plumbing costs vary by region. Service calls typically range from $150-$400, with hourly rates between $100-$200. Emergency services often charge 1.5-2x standard rates. Los Angeles and San Francisco tend to be 20-30% higher than the national average. Always request a written estimate before work begins."
  },
  {
    question: "Are California plumbers required to be licensed?",
    answer: "Yes. California law requires a C-36 Plumbing Contractor license from the CSLB (Contractors State License Board) for any plumbing work exceeding $500 in materials and labor. You can verify licenses at cslb.ca.gov. Never hire unlicensed plumbers as it voids insurance protections."
  },
  {
    question: "What constitutes a plumbing emergency?",
    answer: "True plumbing emergencies include: burst pipes, sewage backups, gas leaks, no water supply, and major leaks causing property damage. For these situations, call a 24/7 emergency plumber immediately. Clogged drains or dripping faucets, while inconvenient, typically can wait for regular business hours."
  },
  {
    question: "How quickly can emergency plumbers arrive?",
    answer: "Most 24/7 emergency plumbers in California aim to arrive within 1-2 hours, depending on your location and their current workload. Companies like Core Plumbing and Roto-Rooter typically have faster response times in major metro areas. Always confirm ETA when calling."
  },
  {
    question: "Do California plumbers offer warranties?",
    answer: "Reputable California plumbers typically offer 1-year warranties on labor, with manufacturer warranties on parts (often 5-10 years for water heaters). Companies like American Plumbing Co. provide written warranties. Always get warranty terms in writing before work begins."
  },
  {
    question: "Can I DIY plumbing repairs in California?",
    answer: "Minor repairs like fixing a dripping faucet or unclogging a drain are generally fine for DIY. However, California requires permits for water heater installations, sewer line repairs, and repiping. DIY work on these can result in fines, failed inspections, and voided home insurance. When in doubt, hire a licensed professional."
  },
  {
    question: "How do I verify a plumbing license in California?",
    answer: "Visit the CSLB website (cslb.ca.gov) and use their 'Instant License Check' feature. You'll need the contractor's license number or business name. Verify that the license is 'Active' and check for any disciplinary actions. Also confirm they carry both liability insurance and workers' compensation."
  },
  {
    question: "What's the difference between commercial and residential plumbing?",
    answer: "Commercial plumbing involves larger-scale systems, industrial-grade fixtures, and complex code requirements. Residential plumbing focuses on homes and apartments. Some companies specialize in one area—Team Rooter and John's Plumbing excel at both, while others focus solely on residential. For commercial properties, always choose a contractor with specific commercial experience."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about hiring a plumber in California
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            Contact Our Research Team
          </button>
        </div>
      </div>
    </section>
  )
}