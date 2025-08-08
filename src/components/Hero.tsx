import RFQCard from "./RFQCard"
import CustomerInfoCard from "./CustomerInfoCard"
import CustomerRequestCard from "./CustomerRequestCard"
import ItemsCard from "./ItemsCard"

function Hero() {

    return (
        <div className="min-h-screen bg-zinc-900 p-4">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="text-center py-8">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        AI-Powered RFQ Parser
                    </h1>
                    <p className="text-white">
                        Transform unstructured customer requests into professional quotes
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <CustomerInfoCard />
                        <CustomerRequestCard />
                        <ItemsCard />
                    </div>
                    <RFQCard />
                </div>
            </div>
        </div>

    )
}

export default Hero