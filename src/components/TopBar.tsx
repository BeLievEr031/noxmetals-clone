
function TopBar() {
    return (
        <div className="bg-zinc-900">
            <div className="flex-1 flex flex-col items-center justify-center px-8 py-2 text-white">
                <div className="flex flex-row justify-between items-center w-full max-w-7xl mb-4">
                    <div>
                        <h1 className="text-3xl font-semibold mt-2 mb-4 text-white text-left">
                            NOX METALS
                        </h1>
                        <p className="mb-4 text-center text-xl">
                            Get a Quote for Your Custom Metal Block
                        </p>
                    </div>
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 text-white bg-transparent mt-0"
                    >
                        Join Mailing Wishlist
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TopBar