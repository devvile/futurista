import { ServiceCard } from "./components/ServiceCard";
import { OUR_SERVICES } from "@/lib/services";

const OurServices = () => {
    return (
    <section className="pt-24 pb-2 px-8 bg-gradient-to-b from-background via-background to-primary">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        AI Solutions That Take Your Business to the Next Level
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We design, develop, and implement automation tools that help you work smarter, not harder
                    </p>
                </div>
                <div className="mt-24">
                    {OUR_SERVICES.map((service) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurServices;