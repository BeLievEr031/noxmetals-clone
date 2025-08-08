import { LucideTrash2 } from 'lucide-react'
import type { IItem } from '../types'
interface Iprop {
    item: IItem,
    idx: number,
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>
}

function Item({ idx, item, setItems }: Iprop) {
    const handleChange = (field: keyof IItem, value: any) => {
        setItems((prev) =>
            prev.map((i, index) =>
                index === idx ? { ...i, [field]: value } : i
            )
        );
    };

    const handleNumberChange = (field: keyof IItem, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        handleChange(field, value);
    };

    function handleDelete() {
        setItems((prev) =>
            prev.filter((i, index) =>
                index !== idx && i
            )
        );
    }

    return (
        <div data-slot="card-content" className="px-6">
            <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center justify-between mb-3">
                        <span data-slot="badge" className="...">
                            Item {idx + 1}
                        </span>
                        <button className="...">
                            <LucideTrash2 size={20} className='text-red-500 cursor-pointer' onClick={handleDelete} />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Material</label>
                            <select
                                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                value={item.material}
                                onChange={(e) => handleChange("material", e.target.value)}
                            >
                                <option value="6061">6061 Aluminum</option>
                                <option value="P20">P20 Tool Steel</option>
                                <option value="836">AISI 836 Steel</option>
                                <option value="O2">AISI O2 Tool Steel</option>
                                <option value="1018">AISI 1018 Steel</option>
                                <option value="other">Other (custom)</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Length (in)</label>
                            <input
                                type="number"
                                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                value={item.length}
                                onChange={(e) => handleNumberChange("length", e)}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Width (in)</label>
                            <input
                                type="number"
                                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                value={item.width}
                                onChange={(e) => handleNumberChange("width", e)}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Height (in)</label>
                            <input
                                type="number"
                                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                value={item.height}
                                onChange={(e) => handleNumberChange("height", e)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Quantity</label>
                            <input
                                type="number"
                                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                value={item.qnt}
                                onChange={(e) => handleNumberChange("qnt", e)}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">Notes</label>
                            <input
                                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1"
                                placeholder="Optional notes"
                                value={item.notes}
                                onChange={(e) => handleChange("notes", e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="flex items-center space-x-2 text-sm">
                                <input
                                    type="checkbox"
                                    className=""
                                    checked={item.required}
                                    onChange={(e) => handleChange("required", e.target.checked)}
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
    );
}


export default Item