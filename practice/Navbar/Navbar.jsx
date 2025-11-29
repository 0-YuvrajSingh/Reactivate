export function Navbar() {
    return (
        <>
            <nav className="navbar">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li>
                    <div className="dropdown" >
                        <button aria-expanded="false">3</button>
                        <ul>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                        </ul>
                    </div>
                </li>                
            </nav>
        </>
    )
}