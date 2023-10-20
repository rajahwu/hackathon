import MenuItemCard from "../itemcard";
import { getMenuItems } from "../../../data/getMenuItems"
import { useLoaderData } from "react-router-dom";

const items = await getMenuItems() 
console.log(items)


export default function View() {
    const { menuItems } = useLoaderData()
    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {menuItems.map((menuItem, i) => {
              return  <MenuItemCard key={i} menuItem={menuItem} />
            }) }
            
        </div>
        </>
    )
}
