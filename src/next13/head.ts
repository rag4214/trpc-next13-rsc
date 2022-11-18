export interface HeadProps {
  params: any;
}

export type HeadComponent = (
  props: HeadProps
) => React.ReactNode | Promise<React.ReactNode>;
