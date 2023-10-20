import { getMenuItems } from "../getMenuItems"

export async function loader() {
    const menuItems = await getMenuItems()
    return { menuItems }
}
