import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <div className={s.notification}>{message}</div>;
};

export default Notification;
