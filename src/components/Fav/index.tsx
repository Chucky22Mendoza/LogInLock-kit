import styles from './fav.module.css';

function Fav({
  size,
  isFav = false,
  style = {},
  className = '',
}: FavProps): JSX.Element {
  return (
    <div style={style} className={`${className} ${styles.fav} ${styles[size]}`}>
        {
          isFav
            ? (
              <img src="/assets/tags/fav.svg" width={size === 'md' ? 18 : 24} height={size === 'md' ? 18 : 24} />
            )
            : (
              <img src="/assets/tags/unfav.svg" width={size === 'md' ? 18 : 24} height={size === 'md' ? 18 : 24} />
            )
        }
    </div>
  );
}

export default Fav;
