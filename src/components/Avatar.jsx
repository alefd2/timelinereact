import styles from './Avatar.module.css';

export const Avatar = ({ src, hasBorder = true }) => {

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.Avatar} src={src} />
    );
}