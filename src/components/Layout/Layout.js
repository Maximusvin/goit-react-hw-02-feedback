import s from './Layout.module.css';

const Layout = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Layout;
