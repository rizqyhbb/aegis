import Link from './Link';
import Icon from '../Icon';

const Navigation = ({ ...props }) => (
  <div
    className="flex items-center justify-evenly bg-dark-purple-1 rounded-[32px] py-7 shadow-lg shadow-gray-400"
    {...props}
  >
    <Link href="/" legacyBehavior>
      <Icon.WalletOutlined />
    </Link>
    <Link href="/stats">
      <Icon.ChartOutlined />
    </Link>
    <Link href="/notification">
      <Icon.NotificationOutlined />
    </Link>
    <Link href="/setting">
      <Icon.SettingOutlined />
    </Link>
  </div>
);

export default Navigation;