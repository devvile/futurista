import { Smile, Zap, Clock, DollarSignIcon, Database, BarChart3 } from "lucide-react";

const Strengths = ( ) =>{
 return (
     <section className="py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
                Benefits
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Key Benefits of AI
                <br />
                for Your Business Growth
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Increased Productivity</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Gain actionable insights with AI-driven analytics to improve decision-making and strategy.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                <div className="w-12 h-12 bg-[#4402fa]/20 rounded-xl flex items-center justify-center mb-4">
                  <Smile className="w-6 h-6 text-[#4402fa]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Better Customer Experience</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Personalized AI interactions improve response times, customer engagement, and overall satisfaction.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <DollarSignIcon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scalability & Growth</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.
                </p>
              </div>
            </div>
          </div>
        </section>
 )
}

export default Strengths;

