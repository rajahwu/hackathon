import MenuItemCard from "../../components/menu/itemcard"

export default function Menu() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
                <MenuItemCard />
            </div>
        </>
    )
}