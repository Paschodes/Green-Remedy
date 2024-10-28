export interface ChildProps {
  children: JSX.Element[] | JSX.Element;
}
export interface userProps {
  _id: string;
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;
  role?: string;
  birthday?: string;
  gender?: string;
  phone?: string;
  updatedAt?: string;
  fullname?: string;
}
export interface IDecodedUser {
  email: string;
  exp: number;
  iat: number;
  jti?: string;
  phone: string;
  role: string;
  token_type?: string;
  _id: string;
  fullname?: string;
}

export interface CategoriesInterface {
  photo?: number;
  label?: string;
  note?: string;
  route?: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface LayoutProps {
  name: string;
  pageTitle: string;

  children: JSX.Element[] | JSX.Element;
}

export interface UserLayoutProps {
  name: string;
  children: JSX.Element[] | JSX.Element;
}
export interface DashboardLayoutProps {
  name: string;
  children: JSX.Element[] | JSX.Element;
}

export interface HerbalCardProps {
  title: string;
  desc: string;
  img: string;
  className?: string;
  imgClassName?: string;
  h3pClassName?: string;
  style?: React.CSSProperties;
}

export interface CardProps {
  title: string;
  item: string;
  itemName: string;
  itemName2: string;
  discount: string;
  discount2: string;
  action: string;
  img1: string;
}

export interface BannerCarouselProps {
  banners: CardProps[];
}

export interface OrderInterface {
  id?: number;
  img?: string;
  name?: string;
  size?: number;
  color?: string;
  items?: number;
  quantity?: number;
  date?: string;
  total?: string;
  deliveryAddress?: string;
  estDeliveryDate?: string;
  orderNo?: string;
  status?: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  phone: string;
}
export interface SeriesItem {
  img: string;
  title: string;
  label: string;
  sub: string;
  backgroundColor: string;
}

export interface NewArrivalsProps {
  data: any;
}
