export interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

export type LayoutComponent = (
  props: LayoutProps
) => React.ReactNode | Promise<React.ReactNode>;
