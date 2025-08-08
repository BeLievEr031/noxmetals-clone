import { LucidePlus } from 'lucide-react'
import Item from './Item'
import type { IItem } from '../types'
interface IProp {
    items: IItem[],
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>
}
function ItemsCard({ items, setItems }: IProp) {
    function addItem() {
        const obj: IItem = {
            height: "0",
            length: "0",
            material: "6061",
            notes: "",
            qnt: "0",
            required: false,
            width: "0"
        }

        setItems([
            ...items,
            obj
        ])
    }
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
                    className="leading-none font-semibold flex items-center justify-between"
                >
                    📦 Line Items
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 bg-gray-900 hover:bg-gray-800"

                        onClick={addItem}
                    >
                        <LucidePlus />
                        Add Item Manually
                    </button>
                </div>
            </div>
            {
                items.length > 0 ?
                    items.map(function (item, index) {
                        return <Item item={item} idx={index} setItems={setItems} />
                    })
                    : "No item found."
            }
        </div>
    )
}

export default ItemsCard