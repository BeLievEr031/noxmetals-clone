import type { IItem } from "../types"

interface Iprop {
    idx: number;
    item: IItem;
}
function LineItem({ idx, item }: Iprop) {
    return (
        <div className="text-sm border-l-2 border-gray-200 pl-3 mt-2">
            <div className="font-semibold">{idx + 1}. {item.material} - {item.length}×{item.width}×{item.height}"</div>
            <div className="text-gray-600">Qty: {item.qnt}</div>
            {item.required && <div className="text-red-600 font-medium text-xs">
                ⚠️ DFARS/CERTS/TRACEABILITY REQUIRED
            </div>}
        </div>
    )
}

export default LineItem