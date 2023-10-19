import Logo from "../logo"

export default function NavBar() {
    return (
        <header>
            <Logo />
            <div className="container">
                <div className="menu">
                    <ul>
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