function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <hr />
            <p className="my-4">
                {props.description}
            </p>
        </div>
    );
}
export default Header;