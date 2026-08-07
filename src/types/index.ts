export type MenuCategory =
  | 'Pizzas'
  | 'Burgers'
  | 'Pasta'
  | 'Sides'
  | 'Desserts'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  imageUrl: string;
  imageAlt: string;
  bestseller?: boolean;
}

export interface CartLine {
  item: MenuItem;
  quantity: number;
}

export interface Deal {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price?: string;
  promoCode?: string;
  imageUrl?: string;
  imageAlt?: string;
  variant: 'highlight' | 'card';
}

export interface StoreLocation {
  id: string;
  name: string;
  distance: string;
  address: string;
  city: string;
  hours: string;
  isOpen: boolean;
}

export type OrderStageStatus = 'complete' | 'active' | 'pending';

export interface OrderStage {
  id: string;
  label: string;
  icon: string;
  status: OrderStageStatus;
}

export interface JourneyMilestone {
  title: string;
  description: string;
}

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}
