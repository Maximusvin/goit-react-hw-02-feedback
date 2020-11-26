import style from './CardInterface.module.css';

const CardInterface = ({ children }) => {
  return <div className={style.CardInterface}>{children}</div>;
};

export default CardInterface;
