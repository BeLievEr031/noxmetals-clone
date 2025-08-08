import { LucideTrash2 } from 'lucide-react'

function Item() {
    return (
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
                            <LucideTrash2 />
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
    )
}

export default Item