import { MenuItems } from "../types"

type MenuItemPorps = {
    item: MenuItems,
    addItem: (item: MenuItems) => void
}

export default function MenuItem({item, addItem}: MenuItemPorps) {
    return (
        <button
            className="border-2 border-slate-600 hover:bg-slate-300 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
