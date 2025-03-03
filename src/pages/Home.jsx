const Home = () => {
    return (
        <div className="bg-green-900 text-white min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-6 px-10 bg-green-800">
          <div className="text-xl font-bold">Better</div>
          <div className="space-x-6">
            <a href="#" className="hover:underline">Buy</a>
            <a href="#" className="hover:underline">Refinance</a>
            <a href="#" className="hover:underline">HELOC</a>
            <a href="#" className="hover:underline">Rates</a>
            <a href="#" className="hover:underline">Better+</a>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Sign in</a>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">Continue</button>
          </div>
        </nav>
  
        {/* Main Section */}
        <section className="flex flex-col items-center text-center py-16">
          <h1 className="text-5xl font-bold">
            <span className="text-green-400">AI-powered</span>
            <span className="text-white">Mortgage</span>
          </h1>
          <p className="mt-4 text-xl">Because you deserve Better.</p>
          <button className="bg-green-500 text-white py-3 px-8 mt-6 rounded-lg hover:bg-green-400">
            Start my pre-approval
          </button>
          <p className="text-sm text-gray-300 mt-2">3 min | No hard credit check</p>
        </section>
  
        {/* Placeholder for mobile image (optional) */}
        <section className="flex justify-center mt-8">
          <img src="https://media.better.com/better-com/homepage/ai-powered.png" alt="Phone Placeholder" className="rounded-lg shadow-lg" />
        </section>
    
        
      {/* Scrollable Testimonial Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white min-h-screen">
        {/* Left: Image or Video */}
        <div className="ml-40 md:w-1/2 w-full">
          <img
            src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp"  // Replace this with the actual image path
            alt="Customer Testimonial"
            className=" h-150 w-auto mr-2 rounded-lg shadow-md"
          />
        </div>

        {/* Right: Text Content */}
        <div className="mr-30 md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 md:pl-8">
          <h1 className="text-4xl font-semibold text-gray-900">
            Find out why <br /> we're better.
          </h1>
          <button className="bg-green-600 text-white mt-4 py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300">
            See all our stories
          </button>
          <p className="flex items-center mt-3">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP._wvhpQ7NY-S1RGRNX1WFSAAAAA&pid=Api&P=0&h=180"
              alt="Trustpilot"
              className="w-6 h-6 mr-2"
            />
            <span className="text-sm text-gray-700">
              Trustpilot Excellent 4.4 out of 5
            </span>
          </p>
        </div>
      </section>

   

      <section className="px-6 md:px-16 py-10 bg-gray-50">
        {/* Section Heading */}
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">
        Got questions? <br /> We've got answers
      </h1>

      {/* Tab Buttons */}
      <div className="flex items-center space-x-4 mb-10">
        <button className="border border-green-600 text-green-600 py-2 px-6 rounded-full hover:bg-green-50 transition-all">
          Our products
        </button>
        <button className="border border-gray-300 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-100 transition-all">
          Calculators
        </button>
        <button className="border border-gray-300 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-100 transition-all">
          Guides & FAQs
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card */}
        <div className="bg-green-50 p-10  rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Buying your first home <br/> with Better 
            </h3>
            <div className="text-green-600 text-2xl">
              <span className="inline-block border-2 border-green-600 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/first-home.webp" // replace with actual image path
            alt="House"
            className="rounded-xl mt-2 h-70 w-150"
          />
        </div>

        {/* Second Card */}
        <div className=" bg-green-50 p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              One Day Mortgage<sup>1</sup>
            </h3>
            <p className="text-gray-700 mb-4">
              Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do it in
              a single day. Traditional lenders deliver a Commitment Letter in a
              few weeks.<sup>1</sup>
            </p>
            <div className="text-green-600 text-2xl">
              <span className="inline-block border-2 border-green-600 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp" // replace with actual image path
            alt="Sign"
            className="h-70 w-100 rounded-xl mt-3"
          />
        </div>

        {/* Third Card */}
        <div className="bg-green-50 p-10  rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Better HELOC
            </h3>
            <p className="text-gray-700 mb-4">
            Introducing One Day HELOC™—your express lane to getting cash from
            your home with our Home Equity Line of Credit. Access up to 90% of
            your home equity as cash in as little as 7 days.
            </p>
            <div className="text-green-600 text-2xl">
              <span className="inline-block border-2 border-green-600 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp" // replace with actual image path
            alt="House"
            className="rounded-xl mt-2 h-70 w-100 p-2"
          />
        </div>
        {/*fourth Card*/}
        <div className="bg-green-50 p-10  rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Insurance
            </h3>
            <div className="text-green-600 text-2xl">
              <span className="inline-block border-2 border-green-600 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/insurance.webp" // replace with actual image path
            alt="House"
            className="rounded-xl mt-2 h-70 w-140 border-spacing-4"
          />
        </div>
      </div>
      </section>
      <div className="bg-white mt-10">
  {/* Top Section */}
  <div className="ml-5 container mx-auto py-12">
    <h2 className="text-green-700 text-3xl font-bold mb-6">Better</h2>
    <p className="text-gray-600 text-lg mb-8">
      Better is a family of companies serving all your homeownership needs.
    </p>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
      {/* First Column */}
      <div>
        <h3 className="text-green-700 font-bold text-xl mb-4">Better Mortgage</h3>
        <p className="text-gray-600 mb-6">
          We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.
        </p>

        <h3 className="text-green-700 font-bold text-xl mb-4">Better Real Estate</h3>
        <p className="text-gray-600 mb-6">
          Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
        </p>

        <h3 className="text-green-700 font-bold text-xl mb-4">Better Cover</h3>
        <p className="text-gray-600 mb-6">
          Shop, bundle, and save on insurance coverage for home, auto, life, and more.
        </p>

        <h3 className="text-green-700 font-bold text-xl mb-4">Better Inspect</h3>
        <p className="text-gray-600 mb-6">
          Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
        </p>

        <h3 className="text-green-700 font-bold text-xl mb-4">Better Settlement Services</h3>
        <p className="text-gray-600">
          Get transparent rates when you shop for title insurance all in one convenient place.
        </p>
      </div>

      {/* Second Column: Resources */}
      <div>
        <h3 className="text-gray-800 font-bold text-xl mb-4">Resources</h3>
        <ul className="text-gray-600 space-y-2">
          <li>Home affordability calculator</li>
          <li>Mortgage calculator</li>
          <li>Free mortgage calculator</li>
          <li>Mortgage calculator with taxes</li>
          <li>Mortgage calculator with PMI</li>
          <li>Rent vs buy calculator</li>
          <li>HELOC payment calculator</li>
          <li>HELOC vs cash-out refinance calculator</li>
          <li>Buy a home</li>
          <li>Sell a home</li>
          <li>Get home inspection</li>
        </ul>
      </div>

      {/* Third Column: Company */}
      <div>
        <h3 className="text-gray-800 font-bold text-xl mb-4">Company</h3>
        <ul className="text-gray-600 space-y-2">
          <li><a href="/about-us" className="text-gray-900 hover:underline">
            About Us</a>
          </li>
          <li>Careers</li>
          <li>Media</li>
          <li>Partner With Us</li>
          <li>Learning Center</li>
          <li>FAQs</li>
          <li>Investor Relations</li>
        </ul>
      </div>

      {/* Fourth Column: Contact Us & Legal */}
      <div>
        <h3 className="text-gray-800 font-bold text-xl mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-2">hello@better.com</p>
        <p className="text-gray-600 mb-6">415-523-8837</p>
        <p className="text-gray-600 mb-4">FAQ</p>
        <p className="text-gray-600 mb-6">Glossary</p>

        <h3 className="text-gray-800 font-bold text-xl mb-4">Legal</h3>
        <ul className="text-gray-600 space-y-2">
          <li>NMLS Consumer Access</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Disclosures & Licensing</li>
          <li>Affiliated Business</li>
          <li>Browser Disclaimer</li>
        </ul>
      </div>
    </div>
  </div>
</div>

      </div> 
    );
};

export default Home;