export default function Guide() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            How to Choose the Best Plumbing Company in California
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Hiring a Licensed Plumber Matters</h3>
              <p className="text-gray-600 mb-4">
                California requires all plumbers to hold a valid C-36 Plumbing Contractor license issued by the CSLB (Contractors State License Board). 
                Unlicensed plumbing work can void your home insurance and result in substandard repairs that cost more in the long run.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-sm text-yellow-800">
                  <strong>Pro Tip:</strong> Always verify licenses at <a href="https://www.cslb.ca.gov" className="underline" target="_blank" rel="noopener noreferrer">cslb.ca.gov</a> before hiring.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  Green Flags
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Written estimates and contracts</li>
                  <li>• Proof of insurance and bonding</li>
                  <li>• Local references and reviews</li>
                  <li>• Clear warranty terms</li>
                  <li>• Professional appearance and communication</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">✗</span>
                  Red Flags
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pressure to sign immediately</li>
                  <li>• Requests full payment upfront</li>
                  <li>• No physical business address</li>
                  <li>• Prices significantly below market</li>
                  <li>• Unwilling to provide references</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding California Plumbing Costs (2025)</h3>
              <p className="text-gray-600 mb-4">
                Plumbing costs in California vary by region, with Bay Area and Los Angeles typically 20-30% higher than national averages. 
                Here&apos;s what to expect:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">$150-400</div>
                  <div className="text-sm text-gray-600">Service Call</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">$200-800</div>
                  <div className="text-sm text-gray-600">Drain Cleaning</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">$1,200-3,500</div>
                  <div className="text-sm text-gray-600">Water Heater Install</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}