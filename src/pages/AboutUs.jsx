import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Better</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/buy" className="text-gray-900 hover:underline">
                Buy
              </a>
              <a href="/refinance" className="text-gray-900 hover:underline">
                Refinance
              </a>
              <a href="/heloc" className="text-gray-900 hover:underline">
                HELOC
              </a>
              <a href="/rates" className="text-gray-900 hover:underline">
                Rates
              </a>
              <a href="/better" className="text-gray-900 hover:underline">
                Better+
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/contact" className="text-gray-500 hover:underline">
                <span>📞</span>
              </a>
              <a href="/signin" className="text-gray-900 hover:underline">
                Sign In
              </a>
              <a
                href="/continue"
                className="bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex items-center justify-center flex-col p-8">
        <h2 className="text-green-700 text-2xl font-medium">Our mission</h2>
        <h1 className="text-5xl font-bold text-gray-900 text-center my-4">
          We’re making homeownership simpler, faster — <br />
          and most importantly, more accessible for all Americans.
        </h1>
      </main>
      
      <section class="bg-gray-50 py-10">
  <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-10">

    <div class=" ml-10 g:w-1/2 text-center lg:text-left">
      <h2 class="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">The status quo is broken</h2>
      <p class="text-lg text-gray-600 mb-6">
        The traditional processes around homeownership are opaque and stressful.<br/> Fees aren’t transparent and some are simply outrageous in size. <br/>Traditional mortgage lending is rife with unnecessary fees and slow,<br/> painful processes. It’s a system set up to benefit insiders — not you.<br/> Better.com CEO, Vishal Garg, set out to change that.
      </p>
      <button class="ml-10 mb-5 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700">
        Read Vishal’s story
      </button>
    </div>
 
    <div class="mr-20 lg:w-1/2 flex justify-center lg:justify-end">
      <img src="https://media.better.com/video/vishal-mission.jpg" alt="Vishal Garg Image" class="w-full max-w-md rounded-lg shadow-md" />
    </div>
  </div>
  </section>
  <section class="bg-green-700 py-10">
  <div class="container mx-auto text-center">
    <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">How we’re changing things</h2>
    <p class="text-lg text-white max-w-2xl mx-auto mb-6">
      Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
    </p>
    <p class="text-lg text-white max-w-2xl mx-auto">
      That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
    </p>
  </div>
</section>
     
<section class="bg-white py-10">
  <div class="container mx-auto text-center">
    <h2 class="text-3xl lg:text-4xl font-semibold text-gray-800 mb-8">Backed by</h2>
    <div class="  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap6 items-center">
      <img src="https://group.softbank/media/Project/sbg/sbg/themes/custom/sbg/sbg-logo.svg?iar=0" alt="SoftBank" class="ml-10 mx-auto h-12"/>
      <img src="https://tse2.mm.bing.net/th?id=OIP.CWPBDE0Efvrq9inZg_KHcQHaEW&pid=Api&P=0&h=180" alt="Ally" class="mr-10 mx-auto h-12"/>
      <img src="https://www.citi.com/CBOL/IA/Angular/assets/citiredesign.svg" alt="Citi" class="ml-20 mx-auto h-20"/>
      <img src="https://tse1.mm.bing.net/th?id=OIP.26Ot1H_Nikn0DanaNC3OSgHaHa&pid=Api&P=0&h=180" alt="Ping An Bank" class="ml-20 mx-auto h-20"/>
      <img src="https://tse4.mm.bing.net/th?id=OIP.20UZG_OJdxb6vdhuboZ1vgHaEK&pid=Api&P=0&h=180" alt="Goldman Sachs" class="ml-20 mx-auto h-20"/>
      <img src="https://tse3.mm.bing.net/th?id=OIP.amqQqKB5UC_U8UggZ8Ne_gHaDt&pid=Api&P=0&h=180" alt="KPCB" class="ml-20 mx-auto h-12"/>
      <img src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg" alt="American Express" class="mr-30 mx-auto h-12"/>
    </div>
  </div>
</section>
<section class="bg-white py-10">
  <div class="container mx-auto">

    <h2 class="text-center text-3xl lg:text-4xl font-semibold text-gray-800 mb-10">Company Timeline</h2>

    <div class="relative">
      <div class="bg-blend-color mt-10 border-r-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2 "></div>
     
      <div class="bg-blend-normal mb-8 flex justify-between items-center w-full">
        
        <div class="ml-20 order-1 w-5/12 px-4 py-4 text-left bg-gray-100 rounded-lg shadow-md">
          <p class=" ml-10 text-gray-600 text-sm md:text-base">After Vishal Garg’s first attempt to purchase his own dream home,<br/> he quickly realized that the homebuying process is unnecessarily<br/> broken. This inspired him to found a technology-first company led <br/>by engineers and data experts with the mission of digitizing and <br/> automating home finance to make it cheaper, easier, and faster for all.</p>
        </div>
        <div class="mr-167 mb-60 order-1 w-1/12">
          <div class="flex items-center justify-center bg-green-600 h-10 w-16 rounded-full">
            <span class="text-white font-bold">2014</span>
          </div>
        </div>
      </div>

      <div class="relative w-16">
    <div class="ml-182 flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute -translate-y-8">
      <span class="text-white font-bold">2015</span>
    </div>
    <div class="w-0.5 h-full bg-gray-300 mx-auto"></div>
  </div>

  <div class="ml-95 w-1/2 pl-4">
    <div class="mt-16 ml-100 bg-gray-100 p-4 rounded-lg shadow">
      <p class="text-gray-700">Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
    </div>
  </div>

      <div class="mb-8 flex justify-between items-center w-full">
        
        <div class="mt-8 ml-20 order-1 w-5/12 px-4 py-4 text-left bg-gray-100 rounded-lg shadow-md">
          <p class=" ml-10 text-gray-600 text-sm md:text-base">Better Mortgage becomes a Fannie Mae approved seller + servicer<br/> and establishes relationships with top mortgage investors.</p>
        </div>
        <div class="mr-167 mb-60 order-1 w-1/12">
          <div class="mt-10 flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute transform -translate-y-8">
            <span class=" text-white font-bold">2016</span>
          </div>
        </div>
      </div>

      <div class="relative w-16">
    <div class="ml-182 flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute -translate-y-8">
      <span class="text-white font-bold">2017</span>
    </div>
    <div class="w-0.5 h-full bg-gray-300 mx-auto"></div>
  </div>

  <div class="ml-95 w-1/2 pl-4">
    <div class="mt-16 ml-100 bg-gray-100 p-4 rounded-lg shadow">
      <p class="text-gray-700">Better expands into the real estate market with Better Real Estate.</p>
    </div>
  </div>

      <div class="mb-8 flex justify-between items-center w-full">
        
        <div class="mt-10 ml-20 order-1 w-5/12 px-4 py-4 text-left bg-gray-100 rounded-lg shadow-md">
          <p class=" ml-10 text-gray-600 text-sm md:text-base">Better Mortgage partners with Ally Bank to build Ally powered by <br/>Better.</p>
        </div>
        <div class="mr-167 mb-60 order-1 w-1/12">
          <div class="mt-15  flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute transform -translate-y-8">
            <span class="text-white font-bold">2018</span>
          </div>
        </div>
      </div>

      <div class="relative w-16">
    <div class="ml-182 flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute -translate-y-8">
      <span class="text-white font-bold">2019</span>
    </div>
    <div class="w-0.5 h-full bg-gray-300 mx-auto"></div>
  </div>

  <div class="ml-95 w-1/2 pl-4">
    <div class="mt-16 ml-100 bg-gray-100 p-4 rounded-lg shadow">
      <p class="text-gray-700">Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.</p>
    </div>
  </div>



      <div class="mb-8 flex justify-between items-center w-full">
        
        <div class="mt-10 ml-20 order-1 w-5/12 px-4 py-4 text-left bg-gray-100 rounded-lg shadow-md">
          <p class=" ml-10 text-gray-600 text-sm md:text-base">Better acquires Trussle — The UK’s most innovative online mortgage<br/> broker.</p>
        </div>
        <div class="mr-167 mb-60 order-1 w-1/12">
          <div class="mt-15 flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute transform -translate-y-8">
            <span class="text-white font-bold">2021</span>
          </div>
        </div>
      </div>


      <div class="relative w-16">
    <div class="ml-182 flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute -translate-y-8">
      <span class="text-white font-bold">2022</span>
    </div>
    <div class="w-0.5 h-full bg-gray-300 mx-auto"></div>
  </div>

  <div class="ml-95 w-1/2 pl-4">
    <div class="mt-16 ml-100 bg-gray-100 p-4 rounded-lg shadow">
      <p class="text-gray-700">Better Mortgage becomes the first fintech to fund $100B home loans entirely online.</p>
    </div>
  </div>



<div class="w-full my-12">


  <div class="flex items-center justify-start w-full mb-8">
    <div class="mt-40 ml-20 w-180 pr-8">
      <div class=" bg-gray-200 p-6 rounded-lg shadow-lg">
        <p class="text-gray-700">
          Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
        </p>
      </div>
    </div>
    <div class="mr-12 relative w-16">
      <div class=" flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute -translate-y-8">
        <span class="text-white font-bold">2023</span>
      </div>
      <div class="w-0.5 h-full bg-gray-300 mx-auto"></div>
    </div>
    <div class="w-1/2"></div>
  </div>

  <div class="ml-190 flex items-center justify-end w-150 mb-8">
   

    <div class="w-200 pl-8">
      <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
        <p class="text-gray-700">
          Better Mortgage launches the fully digital 3-day HELOC².
        </p>
      </div>
    </div>
  </div>


  <div class="flex items-center justify-start w-200 ml-87 mb-8">
    <div class="w-1/2 pr-8">
      <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
        <p class="text-gray-700">
          Better Mortgage launches One Day Verified Approval Letter.
        </p>
      </div>
    </div>
  </div>
</div>

      


<div class="relative w-16">
    <div class="ml-182 flex items-center justify-center bg-green-600 h-10 w-16 rounded-full absolute -translate-y-8">
      <span class="text-white font-bold">Today</span>
    </div>
    <div class="w-0.5 h-full bg-gray-300 mx-auto"></div>
  </div>

  <div class="ml-95 w-1/2 pl-4">
    <div class="mt-16 ml-100 bg-gray-200 p-4 rounded-lg shadow">
      <p class="text-gray-700">You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.</p>
    </div>
  </div>

      
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

export default AboutUs;