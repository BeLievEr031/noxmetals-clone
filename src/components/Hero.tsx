// import React from 'react'

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
                        <div
                            data-slot="card"
                            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
                        >
                            <div
                                data-slot="card-header"
                                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                            >
                                <div
                                    data-slot="card-title"
                                    className="leading-none font-semibold flex items-center gap-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-user h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>{" "}
                                    Customer Information
                                </div>
                            </div>
                            <div
                                data-slot="card-content"
                                className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                <div>
                                    <label
                                        htmlFor="customerName"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                        id="customerName"
                                        placeholder="John Doe"
                                        required
                                        defaultValue=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="customerCompany"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Company
                                    </label>
                                    <input
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                        id="customerCompany"
                                        placeholder="Acme Corp."
                                        required
                                        defaultValue=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="customerEmail"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                        id="customerEmail"
                                        placeholder="john.doe@example.com"
                                        required
                                        type="email"
                                        defaultValue=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="customerPhone"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                        id="customerPhone"
                                        placeholder="555-123-4567"
                                        required
                                        type="tel"
                                        defaultValue=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="customerZipCode"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Zip Code
                                    </label>
                                    <input
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                        id="customerZipCode"
                                        placeholder={"90210"}
                                        required
                                        defaultValue=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingAddress"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Shipping Address
                                    </label>
                                    <input
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                        id="shippingAddress"
                                        placeholder="123 Main St, Anytown, USA"
                                        required
                                        defaultValue=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="deliveryDeadline"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Delivery Deadline
                                    </label>
                                    <input
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                        id="deliveryDeadline"
                                        required
                                        type="date"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            data-slot="card"
                            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
                        >
                            <div
                                data-slot="card-header"
                                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                            >
                                <div
                                    data-slot="card-title"
                                    className="leading-none font-semibold flex items-center gap-2"
                                >
                                    📝 Customer Request Input
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6 space-y-4">
                                <textarea
                                    data-slot="textarea"
                                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-32 resize-none"
                                    placeholder="Put material, dimensions, and quantity here..."
                                    defaultValue={""}
                                />
                                <div className="flex items-center justify-between">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full"
                                        disabled
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            data-slot="card"
                            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
                        >
                            <div
                                data-slot="card-header"
                                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                            >
                                <div
                                    data-slot="card-title"
                                    className="leading-none font-semibold flex items-center justify-between"
                                >
                                    📦 Line Items
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 bg-gray-900 hover:bg-gray-800"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-plus h-4 w-4 mr-1"
                                            aria-hidden="true"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5v14" />
                                        </svg>
                                        Add Item Manually
                                    </button>
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <div className="space-y-4">
                                    <div className="border rounded-lg p-4 bg-white">
                                        <div className="flex items-center justify-between mb-3">
                                            <span
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
                                            >
                                                Item 1
                                            </span>
                                            <button
                                                data-slot="button"
                                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M10 11v6" />
                                                    <path d="M14 11v6" />
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                                    <path d="M3 6h18" />
                                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">
                                                    Material
                                                </label>
                                                <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
                                                    <option value={6061}>6061 Aluminum</option>
                                                    <option value="P20">P20 Tool Steel</option>
                                                    <option value={836}>AISI 836 Steel</option>
                                                    <option value="O2">AISI O2 Tool Steel</option>
                                                    <option value={1018}>AISI 1018 Steel</option>
                                                    <option value="other">Other (custom)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">
                                                    Length (in)
                                                </label>
                                                <input
                                                    data-slot="input"
                                                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                                    type="number"
                                                    defaultValue={0}
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">
                                                    Width (in)
                                                </label>
                                                <input
                                                    data-slot="input"
                                                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                                    type="number"
                                                    defaultValue={0}
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">
                                                    Height (in)
                                                </label>
                                                <input
                                                    data-slot="input"
                                                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                                    type="number"
                                                    defaultValue={0}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">
                                                    Quantity
                                                </label>
                                                <input
                                                    data-slot="input"
                                                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                                    type="number"
                                                    defaultValue={1}
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">
                                                    Notes
                                                </label>
                                                <input
                                                    data-slot="input"
                                                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                                    placeholder="Optional notes"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="flex items-center space-x-2 text-sm">
                                                    <input
                                                        className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                                                        type="checkbox"
                                                    />
                                                    <span className="font-medium text-gray-700">
                                                        DFARS/CERTS/TRACEABILITY REQUIRED
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-copy h-4 w-4 mr-1"
                                            aria-hidden="true"
                                        >
                                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2} />
                                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                        </svg>
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
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-gray-900 hover:bg-gray-800 mt-4"
                                    disabled
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-send h-4 w-4 mr-2"
                                        aria-hidden="true"
                                    >
                                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                        <path d="m21.854 2.147-10.94 10.939" />
                                    </svg>
                                    Submit RFQ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero