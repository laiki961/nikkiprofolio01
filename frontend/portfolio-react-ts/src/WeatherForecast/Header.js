import React, { Fragment } from 'react';

import Button from './ui/Button';
import classes from './Header.module.css';
import Input from './ui/Input';

const Header = React.forwardRef((props, ref) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>My Weather App</h1>
                <form className={classes.search} onSubmit={props.onFetch}>
                    <Input
                        type="text"
                        id="city"
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        value={props.value}
                    />
                    <Button type="submit">Get Weather</Button>
                </form>
            </header>
        </Fragment>
    );
});

export default Header;
