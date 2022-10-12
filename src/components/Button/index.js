import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles);

function Button({ to, href, children, primary , onClick, ...passProps }) {
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,
    }

    if(to) {
        _props.to = to;
        Comp = Link;
    }else if(href) {
        _props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary
    })

    return ( 
        <Comp className={classes} {..._props}>
            <span>{children}</span>
        </Comp> 
    );
}

export default Button;