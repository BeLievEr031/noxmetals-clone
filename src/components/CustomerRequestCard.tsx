
function CustomerRequestCard() {
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
    )
}

export default CustomerRequestCard