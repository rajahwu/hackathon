import MenuItemCard from "../itemcard";
import { getMenuItems } from "../../../data/getMenuItems"

const items = await getMenuItems() 
console.log(items)


export default function View() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
        </div>
    )
}
