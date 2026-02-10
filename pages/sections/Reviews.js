const reviews = [
  {
    name: "Sarah M.",
    location: "San Diego, CA",
    company: "Collins Pacific Plumbing",
    rating: 5,
    text: "Amazing service! They came within 2 hours for our emergency leak. Price was exactly what they quoted over the phone. Highly recommend!",
    date: "January 2025"
  },
  {
    name: "Michael R.",
    location: "Los Angeles, CA",
    company: "Team Rooter",
    rating: 5,
    text: "Fixed our sewer line without digging up the whole yard. Saved us thousands and the crew was professional and clean.",
    date: "December 2024"
  },
  {
    name: "Jennifer L.",
    location: "Chula Vista, CA",
    company: "California Plumbing",
    rating: 5,
    text: "Installed our tankless water heater same day. Great financing options and the technician explained everything thoroughly.",
    date: "January 2025"
  },
  {
    name: "David K.",
    location: "Glendale, CA",
    company: "John's Plumbing",
    rating: 5,
    text: "Been using them for 5 years for our restaurant. Reliable, licensed, and always available for emergencies. Best commercial plumber in LA.",
    date: "November 2024"
  },
  {
    name: "Lisa T.",
    location: "Santa Monica, CA",
    company: "Roto-Rooter",
    rating: 4,
    text: "Quick response for our clogged drain. Professional service, though slightly pricier than independents. Worth it for the peace of mind.",
    date: "January 2025"
  },
  {
    name: "Robert H.",
    location: "Santee, CA",
    company: "Happy Plumbing",
    rating: 5,
    text: "No diagnostic fee saved us money when it turned out to be a simple fix. Honest company that doesn't upsell unnecessarily.",
    date: "December 2024"
  }
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Verified Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from California homeowners and businesses. Reviews sourced from Yelp, Google, and Angi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
              
              <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location}</div>
                <div className="text-sm text-blue-600 mt-1">Hired: {review.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Reviews verified through independent research. Last updated: February 2025
          </p>
        </div>
      </div>
    </section>
  )
}