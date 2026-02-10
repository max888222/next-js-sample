import { useState } from 'react'

const companies = [
  {
    id: 1,
    name: "Collins Pacific Plumbing",
    location: "San Diego, CA",
    rating: 4.9,
    reviews: 287,
    specialty: "Full-Service, Transparent Pricing",
    emergency: true,
    phone: "(619) 555-0101",
    description: "Family-owned business known for upfront pricing and exceptional customer service. No hidden fees.",
    features: ["Upfront Pricing", "Same-Day Service", "Water Heater Experts"],
    badge: "Top Rated",
  },
  {
    id: 2,
    name: "Core Plumbing",
    location: "San Diego, CA",
    rating: 4.8,
    reviews: 412,
    specialty: "Water Heaters, 24/7 Emergency",
    emergency: true,
    phone: "(858) 555-0102",
    description: "Specialized in tankless water heaters and emergency repairs. Available around the clock.",
    features: ["24/7 Emergency", "Tankless Specialists", "Financing Available"],
    badge: "24/7 Service",
  },
  {
    id: 3,
    name: "Roto-Rooter",
    location: "Los Angeles, CA",
    rating: 4.7,
    reviews: 1250,
    specialty: "Drain Cleaning, National Chain",
    emergency: true,
    phone: "(310) 555-0103",
    description: "America's largest plumbing company. Expert drain cleaning and sewer services.",
    features: ["National Brand", "Hydro Jetting", "Sewer Repair"],
    badge: "Most Reviews",
  },
  {
    id: 4,
    name: "American Plumbing Co.",
    location: "San Diego, CA",
    rating: 4.9,
    reviews: 198,
    specialty: "Written Warranties, Family-Owned",
    emergency: true,
    phone: "(619) 555-0104",
    description: "Three generations of plumbing excellence. Written warranties on all work.",
    features: ["Written Warranties", "Family Owned", "Senior Discounts"],
    badge: "Best Warranty",
  },
  {
    id: 5,
    name: "Team Rooter",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 356,
    specialty: "Sewer Repair, Latest Technology",
    emergency: true,
    phone: "(323) 555-0105",
    description: "Advanced trenchless sewer repair technology. Minimal disruption to your property.",
    features: ["Trenchless Tech", "Video Inspection", "Permit Handling"],
    badge: "Tech Leaders",
  },
  {
    id: 6,
    name: "Happy Plumbing",
    location: "Santee, CA",
    rating: 4.9,
    reviews: 167,
    specialty: "Inspections, No Diagnostic Fees",
    emergency: false,
    phone: "(619) 555-0106",
    description: "Free estimates and no diagnostic fees. Focus on preventive maintenance.",
    features: ["Free Estimates", "No Trip Charges", "Maintenance Plans"],
    badge: "Best Value",
  },
  {
    id: 7,
    name: "Tony's Plumbing",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 423,
    specialty: "Family Owned Since 1978",
    emergency: true,
    phone: "(213) 555-0107",
    description: "Over 40 years serving LA County. Traditional values with modern techniques.",
    features: ["Since 1978", "Commercial/Residential", "Earthquake Retrofitting"],
    badge: "Most Experienced",
  },
  {
    id: 8,
    name: "Sal's Plumbing",
    location: "South Bay, LA",
    rating: 4.7,
    reviews: 289,
    specialty: "30+ Years Experience",
    emergency: true,
    phone: "(310) 555-0108",
    description: "South Bay's trusted plumber for three decades. Emergency services available.",
    features: ["30+ Years Exp", "South Bay Local", "Emergency Service"],
    badge: "Local Favorite",
  },
  {
    id: 9,
    name: "John's Plumbing & Drain",
    location: "Glendale, CA",
    rating: 4.9,
    reviews: 312,
    specialty: "Residential & Commercial",
    emergency: true,
    phone: "(818) 555-0109",
    description: "Full-service plumbing for homes and businesses. Highly rated on Yelp and Google.",
    features: ["Commercial Expert", "Drain Cleaning", "Gas Lines"],
    badge: "Highly Rated",
  },
  {
    id: 10,
    name: "California Plumbing",
    location: "Chula Vista, CA",
    rating: 4.9,
    reviews: 245,
    specialty: "Water Heaters, Gas Lines",
    emergency: true,
    phone: "(619) 555-0110",
    description: "Specialists in water heater installation and gas line repairs. 24/7 availability.",
    features: ["Water Heaters", "Gas Line Repair", "24/7 Available"],
    badge: "Specialists",
  },
]

const cities = ["All", "San Diego", "Los Angeles", "South Bay", "Glendale", "Chula Vista", "Santee"]

function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 font-bold text-gray-900">{rating}</span>
      <span className="text-gray-500 text-sm">({reviews})</span>
    </div>
  )
}

export default function CompanyGrid() {
  const [filter, setFilter] = useState("All")
  
  const filteredCompanies = filter === "All" 
    ? companies 
    : companies.filter(c => c.location.includes(filter))

  return (
    <section id="companies" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top 10 Best Plumbing Companies in California
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hand-picked based on customer reviews, licensing, insurance, and service quality. 
            All companies offer free estimates.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setFilter(city)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === city
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Company Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <div 
              key={company.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                    #{index + 1}
                  </div>
                  {company.badge && (
                    <div className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                      {company.badge}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {company.location}
                </div>

                <StarRating rating={company.rating} reviews={company.reviews} />

                <p className="text-gray-600 text-sm mt-3 mb-4">{company.description}</p>

                <div className="space-y-2 mb-4">
                  {company.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {company.emergency && (
                  <div className="flex items-center gap-2 text-red-600 text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    24/7 Emergency Available
                  </div>
                )}

                <div className="flex gap-3 mt-4">
                  <a 
                    href={`tel:${company.phone}`}
                    className="flex-1 bg-blue-900 hover:bg-blue-800 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call Now
                  </a>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}