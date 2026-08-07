import type {
  Deal,
  JourneyMilestone,
  MenuItem,
  OrderStage,
  StoreLocation,
  ValueProp,
} from '@/types';

// NOTE: Image URLs are Stitch/AIDA-generated food photography carried over
// from the original design mockups (royal_hearth design system).
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'kings-special-pizza',
    name: "King's Special Pizza",
    description: 'Loaded with premium toppings and extra cheese for the ultimate flavor.',
    price: 12.99,
    category: 'Pizzas',
    bestseller: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOebzKu6jEtr_rrcWd4HrEr12Qzr99Ama8rvdm4lyn3LgbMrt0vvzBWoEg13MpDR0L1mr3uCMEqFI8_ht4-SiIIEGxKnX0IBad95siMqUGGm90dtRMZ08dT_crSkt7yisH3tY-dVicOQGpTc59v9BNt25El34XPttUmyka7l61cBh7YA2hb17BQRLomJCstswtYAu9ArFAnUo7ZgYSTwv-I-zzIyaevmJjXk2BZH1kEU58CVrgPl4OpQ',
    imageAlt: "Top-down view of King's Special Pizza loaded with pepperoni, mushrooms and bell peppers.",
  },
  {
    id: 'pepperoni-pizza',
    name: 'Pepperoni Pizza',
    description: 'Classic pepperoni with mozzarella cheese.',
    price: 11.49,
    category: 'Pizzas',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCxS1XvIPXa5TomwqfBNvt5eeZmi1s1NjLGkvio4pe4U9K-x7Tq59-JfGOrlFVtFz2uJpLf9HzBXV6fpUx7gIRidDJZm-6Lv1HpVJjghTGZQ3juT3kgMqB_6dnDlRIOY3Cs5D4ZfFpINR6yfrv_g_XfvgJKvtu81zj87QjHu0SCr9DJ2JX04F4zaXiJ8CwA0Jwi4IGw2j7unPrtEzLJAz6oMidn4bDJP6tDAwVDJxhxYa_KIAn58akmCw',
    imageAlt: 'Classic pepperoni pizza with bubbly mozzarella cheese.',
  },
  {
    id: 'veggie-delight-pizza',
    name: 'Veggie Delight Pizza',
    description: 'Fresh vegetables with cheese and herbs.',
    price: 10.49,
    category: 'Pizzas',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNCfYr4pyvmARSbrhfEvrGdxUA-vKa86vED2qhlq92hXNHMOB07dYpsAnlk5ldc5YjXL9EkJ6CYM238hla7ZOK26OvKW-izpkWGvhKsIIIfSkktXWKMHP6pQP4ppPg1r5FwD95jFbsVIBe_481_M_oTgW2w9e8bjZFBMBlJGejR0dlor2DCQ_AsF4GtJhxk2ylFFA6QL2zd435bZqD8BMjyXLCYpGeM3_dEBmAihbAiAQBmJUg7UmU1Q',
    imageAlt: 'Veggie delight pizza topped with bell peppers, red onion, olives and tomato.',
  },
  {
    id: 'bbq-chicken-pizza',
    name: 'BBQ Chicken Pizza',
    description: 'Tender chicken with BBQ sauce and onions.',
    price: 12.49,
    category: 'Pizzas',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2uREVCtD01A6FgWLd9h-nmaqhUwsdCcSmH6b3YlWDRZbEJJmNlc4Ef_O_VxODxlS5NRcXaRJ2WQ7Qar7eN0WCpzoWoe2PyQxGP5qJ1XB2R5xrFd9O2n9uaqQIJJgxGQqAR5c8K633MOoGTpUmdZw7zKVI7mdAn37f_8778Nw8ZaumW_qWjdHbdstb0FANSyDavw5k-R8zj3Uuz9vNBTg_Jp1o70-cvAByyMl0Pa_t_W55Tkvg7Isfag',
    imageAlt: 'BBQ chicken pizza with red onion and a drizzle of dark BBQ sauce.',
  },
  {
    id: 'zesty-chicken-burger',
    name: 'Zesty Chicken Burger',
    description: 'Crispy chicken, lettuce, cheese and our special signature zesty sauce.',
    price: 7.99,
    category: 'Burgers',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDK9vpGEXDCuuGwz4Wl6q23jKSZDNQLuVZtJ473FY4OjxylbWRt0eEjDodPv1ZPAnei4lSxDC0ayx-VWST4n3XQtk3Am8GdGLpPPYCMsXWGZRD0hmniPNTj7Bc0Gz8YHRS31tnCP23rBAsIJngc3NAXW8gOye5w1DcSEbqD16PwtFUQNXng7SqEb756SHzP1x2UHL0QlW7CK61kFNP2H9-hEmqAOMz7ageZHdxxtXI_ekpifAnOiXH6ow',
    imageAlt: 'Zesty chicken burger dripping with special sauce on a toasted brioche bun.',
  },
  {
    id: 'cheesy-alfredo-pasta',
    name: 'Cheesy Alfredo Pasta',
    description: 'Creamy Alfredo sauce with grilled chicken and fresh herbs.',
    price: 9.49,
    category: 'Pasta',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDUhJkV5fMes2bE8QJz-wOI64KRj2HnQa_Qw1zfrQ8URfD2OBu-AOdlkQgJbQLpsgflMvS0CDUGJTS4-uaDyf5euBcOoB8ebXblAzgW8Zk343dP958oyWsf4n_Px4EjV1jkN4rCgItk8awzR3cIK1zt6UJie0JuW9GPgcsbO4CPavqQzPXSuoFrGZdEBjVxalzKymWGDVmbI4CY7etvH0_gvHpca2bS8zEmRgClpxINhxOGrirqzLjHw',
    imageAlt: 'Bowl of creamy cheesy Alfredo pasta garnished with parsley and parmesan.',
  },
  {
    id: 'choco-lava-cake',
    name: 'Choco Lava Cake',
    description: 'Warm chocolate cake with a creamy molten lava inside. Perfectly sweet.',
    price: 4.99,
    category: 'Desserts',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARr0gofhYGx4BA5nmBwS_HotVSBT6bxhtWMjWzSFMPWVggkzZxDAZ5tIBpbVs7xhrEw53gkwTFgecHbKp6Rx-lG837sxlxEZLeNf_Sp3j5DITctbFn3xHSD1HaEuPW2YVX4WgW9-F5bD-7XYQDLSZEoTpvAtO9iltngQF1SKsl7y07jnjLxUU2EjRgt-Hdscy5lUgi0YoUQpbgR1MwPSDacXNEJK7Ju8x7H9iKwlEZmIf-BC-M-0ycCw',
    imageAlt: 'Choco lava cake cut open to reveal a molten chocolate center.',
  },
];

export const MENU_CATEGORIES: MenuItem['category'][] = [
  'Pizzas',
  'Burgers',
  'Pasta',
  'Sides',
  'Desserts',
  'Beverages',
];

export const DEALS: Deal[] = [
  {
    id: 'first-order-20',
    title: '20% OFF',
    subtitle: 'First Order',
    description: 'Enjoy 20% off on your first order',
    promoCode: 'KINGS20',
    variant: 'highlight',
  },
  {
    id: 'meal-deal',
    title: 'Meal Deal',
    subtitle: 'Save More',
    description: 'Pizza + Drink + Side',
    price: '$16.99',
    variant: 'card',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDf_rkNYXTlsHplYqTr76N_2W3w_Jj7h1T6R3EJsrr4kpu0stsHQMcmnaxZv-kndIMXVqE8463lyGdvuMZs4ht0UAOWTg3ceXBBuCAjikjdr47vU30Eu-BPs9f0FsL7fGZiOoE8UxZ14VcDZIjZTMXrcIzdBj6G1JMAonCCvIQFCfTQYWUUKMAHuK80ZuGcWaOkPHpAM5QLgzEvd5cSirRXgV9IHw8zUw-7FK5oVF2218SrfpwDMB-JZA',
    imageAlt: 'Medium pizza, golden fries and an iced cola.',
  },
  {
    id: 'family-feast',
    title: 'Family Feast',
    subtitle: 'Best Together',
    description: '2 Pizzas + Side + Drink',
    price: '$29.99',
    variant: 'card',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIG0NwDNdh6tycSV82Nw_IiGMDhk1W9Lzxt9YO7AHXF2b6hTrgLsjNgqHveV8ScaIHsUg2DM8bPqEoXBn0sRZRpboEhJ3I31UGqQuBywTBj0LKV85Mj_Ui_orfPKoNL4cnDpXBI2Ydk-FuNnqT7d4rprIgrG73RHWLsZ2oz9HVIuCtwF-4nwFolsXBuuhJ2IeT1uvdAY3AQ2WtK61LP2JxFvbdw7xgpTG1sgy240CqMzF9RO_NLw8dXw',
    imageAlt: 'Two large pizzas, garlic bread and a pitcher of iced beverage.',
  },
];

export const LIMITED_TIME_BANNER = {
  title: 'Limited Time Offers',
  subtitle: "Grab them before they're gone!",
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCrqmou2LVUlQuBpbYJZfuHS3tRvcjRn1ynVmx5cYz1ZHZz467YJMwoiYzxphCzfZIDyCl17H6eempwe6WdyX8WmR6dWiPHZnvaPiWmSGdKy5CFWVUElntYrPYjhi7qctHFUNXRHuqojPdc1Phweqvn52O5HaXZGXfXFR7h3aevnInIrVskep6kPylCMTloFy-APhhOv7OrYwySs8quPVZ2BOqc4jLyuabGTbVjUOQMabSRbvLIvaNO7A',
  imageAlt: 'Overhead close-up of a gourmet pizza fresh out of the oven.',
};

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'downtown',
    name: 'Downtown',
    distance: '1.2 mi',
    address: '123 Main Street, City Center',
    city: 'New York, NY 10001',
    hours: 'Open 10:00 AM - 12:00 AM',
    isOpen: true,
  },
  {
    id: 'northside',
    name: 'Northside',
    distance: '3.5 mi',
    address: '456 North Avenue, Your City',
    city: 'New York, NY 10002',
    hours: 'Open 10:00 AM - 10:00 PM',
    isOpen: false,
  },
  {
    id: 'westfield',
    name: 'Westfield',
    distance: '5.8 mi',
    address: '789 West Road, Your City',
    city: 'New York, NY 10003',
    hours: 'Open 10:00 AM - 12:00 AM',
    isOpen: true,
  },
];

export const DEFAULT_ORDER_STAGES: OrderStage[] = [
  { id: 'placed', label: 'Order Placed', icon: 'check', status: 'complete' },
  { id: 'preparing', label: 'Preparing', icon: 'restaurant_menu', status: 'complete' },
  { id: 'delivery', label: 'Out for Delivery', icon: 'directions_bike', status: 'active' },
  { id: 'delivered', label: 'Delivered', icon: 'home', status: 'pending' },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    title: 'The Beginning',
    description: 'Started as a small food truck, bringing authentic flavors to the local streets.',
  },
  {
    title: 'First Restaurant',
    description: 'Opened our first brick-and-mortar location in downtown, expanding our menu.',
  },
  {
    title: 'Citywide Delivery',
    description:
      'Now serving multiple neighborhoods with fast, reliable delivery and premium dine-in experiences.',
  },
];

export const VALUE_PROPS: ValueProp[] = [
  { icon: 'local_shipping', title: 'Fast Delivery', description: 'On time, every time' },
  { icon: 'workspace_premium', title: 'Best Quality', description: 'Fresh ingredients' },
  { icon: 'lock', title: 'Secure Payment', description: '100% safe & secure' },
  { icon: 'support_agent', title: '24/7 Support', description: "We're here to help" },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/special-deals', label: 'Deals' },
  { href: '/about', label: 'About Us' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
] as const;

export const MOBILE_TABS = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/menu', label: 'Menu', icon: 'restaurant_menu' },
  { href: '/special-deals', label: 'Deals', icon: 'local_offer' },
  { href: '/track-order', label: 'Orders', icon: 'receipt_long' },
] as const;
