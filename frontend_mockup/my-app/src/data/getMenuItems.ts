const menuItems = import("./drinks.json")

export const getMenuItems = async (num=10) => {
    const res = []
    const items = await menuItems
    for(let i = 0; res.length < num; i++) {
        res.push(items["hits"][i])
    }
    return res
}