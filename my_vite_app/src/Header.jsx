function Header(){
    const items = ["Home", "About", "Services", "Contact"]
    const listItems = items.map(i => <li key={i}><a href="#">{i}</a></li>)
    return(
        <header>
            <h1>My Website</h1>
            <ul>
                {listItems}
            </ul>
            <hr />
        </header>
    );
}

export default Header;