import Logo from "../logo"

export default function NavBar() {
    return (
        <header className="flex space-x-auto">
            <div className="container">
                <Logo />
            </div>

            <div className="container">
                <div className="flex">
                    <ul className="flex">
                        <li>menu</li>
                        <li>events</li>
                        <li>location</li>
                        <li>contact</li>
                        <li>cart</li>
                    </ul>
                </div>

            </div>
        </header>
    )
}