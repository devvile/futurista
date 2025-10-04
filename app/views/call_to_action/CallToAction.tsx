import { ArrowRight } from "lucide-react"

const CallToAction = ()=>{
    return         <section className="py-16 px-8 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#4402fa]/40 to-[#6b3dff]/20 border border-[#4402fa]/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4402fa]/10 to-transparent"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#4402fa]/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6b3dff]/10 rounded-full blur-[100px]"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Let AI do the Work so
                  <br />
                  you can Scale Faster
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Book a Call Today and Start Automating
                </p>
                <button className="bg-[#4402fa] hover:bg-[#3602c8] px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2 group">
                  Book a free call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
}

export default CallToAction;