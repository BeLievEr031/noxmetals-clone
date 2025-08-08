
function TopBar() {
    return (
        <div className="bg-zinc-900">
            <div className="flex-1 flex flex-col items-center justify-center px-8 py-2 text-white">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full max-w-7xl mb-4">
                    <div>
                        <h1 className="text-3xl text-center md:text-left font-semibold mt-2 mb-4 text-white">
                            NOX METALS
                        </h1>
                        <p className="mb-4 text-center text-xl">
                            Get a Quote for Your Custom Metal Block
                        </p>
                    </div>
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border cursor-pointer h-9 px-4 py-2 has-[>svg]:px-3 text-white bg-transparent mt-0 hover:bg-primary-foreground hover:text-primary"
                    >
                        Join Mailing Wishlist
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TopBar