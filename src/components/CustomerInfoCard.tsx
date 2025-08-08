import { LucideUser } from "lucide-react"

function CustomerInfoCard() {
    return (
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
                    <LucideUser /> {" "}
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
    )
}

export default CustomerInfoCard