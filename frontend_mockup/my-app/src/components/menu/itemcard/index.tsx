import { useLocation } from "react-router-dom"

// const imageUrls = {
//         "/menu/combos": "/menu-item.jpg",

//         "/menu/supah-shakes": "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3NoYWtlfGVufDB8fDB8fHww"
//         ,
//         "/menu/stays-active": "https://unsplash.com/photos/full-filled-footed-bowl-OaGUHIjCdCs",
//         "/menu/goodies": "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D"
//     }

export default function MenuItemCard({ menuItem }) {
    // const location = useLocation()
    // const currentUrl = location.pathname

    const imageUrl = menuItem["images"]["REGULAR"]["url"]

    return (
        <div>
            <img className="h-auto max-w-full rounded-lg" src={imageUrl} alt="milkshake" />
        </div>
    )
}