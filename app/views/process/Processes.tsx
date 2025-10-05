import { ArrowRight, TrendingUp, MessageCircle, DollarSign, } from "lucide-react";

const ProcessesView = () => {
    return (
        <section className="py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Simple, Smart,
                        <br />
                        and Scalable Process
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        We design, develop, and implement automation tools that help you work smarter, not harder
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                        <div className="inline-block bg-white/10 rounded-lg px-3 py-1 text-xs mb-4">Step 1</div>
                        <h3 className="text-2xl font-bold mb-2">Smart Analyzing</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            We assess your needs and identify AI solutions to streamline workflows and improve efficiency.
                        </p>
                        <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4402fa]/20 to-[#6b3dff]/20 flex items-center justify-center relative">
                                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-[#4402fa]/40 to-[#6b3dff]/40 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-[#4402fa]/60 flex items-center justify-center">
                                                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-[#4402fa] border-r-[12px] border-r-transparent rotate-90"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2 text-center">Analyzing current workflow.</p>
                                </div>
                                <div className="flex-1 space-y-1.5">
                                    <div className="flex items-center gap-2 text-xs text-gray-300 bg-black/60 rounded-lg px-2 py-1.5 border border-white/5">
                                        <div className="w-3 h-3 border border-[#4402fa] rounded flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-[#4402fa]"></div>
                                        </div>
                                        System check
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-300 bg-black/60 rounded-lg px-2 py-1.5 border border-white/5">
                                        <div className="w-3 h-3 border border-[#4402fa] rounded"></div>
                                        Process check
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-300 bg-black/60 rounded-lg px-2 py-1.5 border border-white/5">
                                        <div className="w-3 h-3 border border-[#4402fa] rounded"></div>
                                        Speed check
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-300 bg-black/60 rounded-lg px-2 py-1.5 border border-white/5">
                                        <div className="w-3 h-3 border border-[#4402fa] rounded"></div>
                                        Manual work
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-300 bg-black/60 rounded-lg px-2 py-1.5 border border-white/5">
                                        <div className="w-3 h-3 border border-[#4402fa] rounded"></div>
                                        Repetative task
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                        <div className="inline-block bg-white/10 rounded-lg px-3 py-1 text-xs mb-4">Step 2</div>
                        <h3 className="text-2xl font-bold mb-2">AI Development</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Our team builds intelligent automation systems tailored to your business processes.
                        </p>
                        <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                            <div className="bg-black rounded-lg p-3 font-mono text-xs">
                                <div className="flex items-start gap-1 mb-1">
                                    <span className="text-[#4402fa]">def</span>
                                    <span className="text-blue-400">check_trigger</span>
                                    <span className="text-gray-400">(self, value):</span>
                                </div>
                                <div className="pl-3 space-y-0.5 text-gray-300">
                                    <div>
                                        <span className="text-[#4402fa]">if</span> value &gt; self.threshold:
                                    </div>
                                    <div className="pl-3">
                                        self.status = <span className="text-green-400">"active"</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="text-[#4402fa]">return</span> <span className="text-green-400">"Automation triggered!"</span>
                                    </div>
                                    <div>
                                        <span className="text-[#4402fa]">else</span>:
                                    </div>
                                    <div className="pl-3 text-gray-500">
                                        <span className="text-[#4402fa]">return</span> <span className="text-green-400">"No action taken"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                        <div className="inline-block bg-white/10 rounded-lg px-3 py-1 text-xs mb-4">Step 3</div>
                        <h3 className="text-2xl font-bold mb-2">Seamless Integration</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.
                        </p>
                        <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                            <div className="flex items-center justify-center gap-6">
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4402fa] to-[#6b3dff] flex items-center justify-center mb-2 relative">
                                        <div className="absolute inset-0 rounded-full bg-[#4402fa]/50 blur-lg"></div>
                                        <svg className="w-10 h-10 relative z-10" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-xs text-gray-400">Our solution</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="w-10 h-0.5 bg-gradient-to-r from-[#4402fa] to-gray-600"></div>
                                    <div className="w-10 h-0.5 bg-gradient-to-r from-gray-600 to-[#4402fa]"></div>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-2 border-2 border-white/20">
                                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
                                            <path d="M12 1V4M12 20V23M23 12H20M4 12H1M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <p className="text-xs text-gray-400">Your stack</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                        <div className="inline-block bg-white/10 rounded-lg px-3 py-1 text-xs mb-4">Step 4</div>
                        <h3 className="text-2xl font-bold mb-2">Continuous Optimization</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            We refine performance, analyze insights, and enhance automation for long-term growth.
                        </p>
                        <div className="bg-black/40 rounded-xl p-3 border border-white/5 space-y-2">
                            <div className="bg-black/60 rounded-lg p-3 border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[#4402fa]/20 rounded-lg flex items-center justify-center">
                                        <MessageCircle className="w-4 h-4 text-[#4402fa]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium">Chatbot system</p>
                                        <p className="text-[10px] text-gray-400">Efficiency will increase by 20%</p>
                                    </div>
                                </div>
                                <div className="w-6 h-6 rounded-full border-2 border-[#4402fa] flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-[#4402fa]"></div>
                                </div>
                            </div>
                            <div className="bg-black/60 rounded-lg p-3 border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium">Workflow system</p>
                                        <p className="text-[10px] text-gray-400">Update available.</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#4402fa]" />
                            </div>
                            <div className="bg-black/60 rounded-lg p-3 border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                                        <DollarSign className="w-4 h-4 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium">Sales system</p>
                                        <p className="text-[10px] text-gray-400">Up to date</p>
                                    </div>
                                </div>
                                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessesView;