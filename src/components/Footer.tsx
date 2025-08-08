
function Footer() {
    return (
        <div
            className="mt-0 pt-4 pb-4 text-gray-100"
            style={{ backgroundColor: "rgba(10, 10, 10, 0.95)" }}
        >
            <div className="container mx-auto px-4 sm:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                    <div className="col-span-1 sm:col-span-10">
                        <h3 className="text-base font-semibold">NOX Metals</h3>
                        <p className="text-sm mt-2">Supplying America's Industrial Base</p>
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                        <h3 className="text-base font-semibold">Send manual quotes to</h3>
                        <p className="text-sm mt-2">📥 zane@noxmetals.co</p>
                    </div>
                </div>
                <div
                    data-orientation="horizontal"
                    role="none"
                    data-slot="separator"
                    className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-4 border-gray-600"
                />
                <p className="text-sm text-center text-gray-400">
                    © 2025 NOX Metals. All rights reserved.
                </p>
            </div>
        </div>

    )
}

export default Footer