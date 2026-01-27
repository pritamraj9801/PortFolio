export default function Header(){
    return<header id="header">
        <div id="logo">
            <a href="#">
                <img src="/logo.png" alt=""/>
                </a>
        </div>
        <div>
            <ul id="nav-links">
                <li>
                    <span className="hashMark">#</span>
                    <a href="#welcome-info">home</a>
                </li>
                <li>
                    <span className="hashMark">#</span>
                    <a href="#projects">works</a>
                </li>
                <li>
                    <span className="hashMark">#</span>
                    <a href="#about">about-me</a>
                </li>
                <li>
                    <span className="hashMark">#</span>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    </header>
}