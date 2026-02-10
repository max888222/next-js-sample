const features = [
  { name: "24/7 Emergency Service", companies: [true, true, true, true, true, false, true, true, true, true] },
  { name: "Licensed & Insured", companies: [true, true, true, true, true, true, true, true, true, true] },
  { name: "Written Warranties", companies: [true, true, true, true, true, false, true, true, true, true] },
  { name: "Free Estimates", companies: [true, true, true, true, true, true, true, true, true, true] },
  { name: "Financing Available", companies: [false, true, true, false, true, false, false, false, false, true] },
  { name: "Commercial Services", companies: [true, true, true, true, true, false, true, true, true, true] },
  { name: "Trenchless Technology", companies: [false, false, true, false, true, false, false, false, false, false] },
  { name: "Water Heater Specialists", companies: [true, true, true, true, false, false, true, false, true, true] },
]

const companyNames = [
  "Collins Pacific",
  "Core Plumbing", 
  "Roto-Rooter",
  "American Plumbing",
  "Team Rooter",
  "Happy Plumbing",
  "Tony's Plumbing",
  "Sal's Plumbing",
  "John's Plumbing",
  "California Plumbing"
]

export default function ComparisonTable() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Comparison</h2>
          <p className="text-gray-600">Compare key features across all top-rated California plumbing companies</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-gray-200 sticky left-0 bg-gray-50">Feature</th>
                {companyNames.map((name, idx) => (
                  <th key={idx} className="p-4 text-center text-xs font-semibold text-gray-700 border-b-2 border-gray-200 min-w-[100px]">
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 font-medium text-gray-900 border-b border-gray-100 sticky left-0 bg-inherit">
                    {feature.name}
                  </td>
                  {feature.companies.map((hasFeature, cidx) => (
                    <td key={cidx} className="p-4 text-center border-b border-gray-100">
                      {hasFeature ? (
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}