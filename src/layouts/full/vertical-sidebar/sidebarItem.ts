export interface menu {
  header?: string;
  group?: string;
  model?: boolean;
  title?: any;
  icon?: string;
  to?: any;
  children?: menu[];
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Starter Page",
    icon: "home",
    to: "/starter",
  },  
];

export default sidebarItem;