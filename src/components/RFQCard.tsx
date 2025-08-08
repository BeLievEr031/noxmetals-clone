import { LucideCopy, LucideSend } from 'lucide-react'

function RFQCard() {
    return (
        <div className="lg:col-span-1">
            <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm sticky top-4"
            >
                <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                >
                    <div
                        data-slot="card-title"
                        className="leading-none font-semibold flex items-center justify-between"
                    >
                        🧾 Generated RFQ
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
                        >
                            <LucideCopy />
                            Copy RFQ
                        </button>
                    </div>
                </div>
                <div data-slot="card-content" className="px-6 space-y-4">
                    <div className="text-sm text-gray-600">
                        <div>
                            <strong>Date:</strong> 08/08/2025
                        </div>
                        <div>
                            <strong>Customer Name:</strong> Not Provided
                        </div>
                        <div>
                            <strong>Company:</strong> Not Provided
                        </div>
                        <div>
                            <strong>Email:</strong> Not Provided
                        </div>
                        <div>
                            <strong>Phone:</strong> Not Provided
                        </div>
                        <div>
                            <strong>Zip Code:</strong> Not Provided
                        </div>
                    </div>
                    <div
                        data-orientation="horizontal"
                        role="none"
                        data-slot="separator"
                        className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
                    />
                    <div className="text-sm">
                        <div className="font-medium mb-2">Shipping Address:</div>
                        <div className="text-gray-600">Not Provided</div>
                    </div>
                    <div className="text-sm">
                        <div className="font-medium mb-2">Delivery Deadline:</div>
                        <div className="text-gray-600">Not Specified</div>
                    </div>
                    <div
                        data-orientation="horizontal"
                        role="none"
                        data-slot="separator"
                        className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
                    />
                    <div>
                        <div className="font-medium mb-3">Line Items:</div>
                        <div className="space-y-2">
                            <div className="text-sm border-l-2 border-gray-200 pl-3">
                                <div className="font-medium">1. 6061 - 0×0×0"</div>
                                <div className="text-gray-600">Qty: 1</div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-orientation="horizontal"
                        role="none"
                        data-slot="separator"
                        className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
                    />
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all text-primary-foreground shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-gray-900 hover:bg-gray-800 mt-4"
                        disabled
                    >
                        <LucideSend />
                        Submit RFQ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RFQCard