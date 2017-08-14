import React from 'react';


function Header(props) {

    return (
        <header className="head todo-padding">
            <h1 className="head__title">{props.title}</h1>
        </header>
    )
}

export default Header;
Header.propTypes = {
    title: React.PropTypes.string.isRequired
};
