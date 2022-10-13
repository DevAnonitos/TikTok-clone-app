import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles);

function Button({ 
    to, 
    href, 
    children, 
    rounded = false,
    small = false, 
    large = false ,
    text = false,
    primary = false, 
    outline = false , 
    disabled = false,
    className,
    leftIcon,
    onClick, 
    ...passProps }) {

        // let
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,
    }
    // logic
    if(to) {
        _props.to = to;
        Comp = Link;
    }else if(href) {
        _props.href = href;
        Comp = 'a';
    }

    if(disabled) { 
        Object.keys(_props).forEach((key) => {
            if(key.startsWith('on') && typeof[key] === 'function'){
                delete _props[key];
            }
        })
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        disabled,
        rounded,
        [className]: className,
    })

    return ( 
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp> 
    );
}

export default Button;