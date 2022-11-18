export interface PageProps {
  params: any;
  searchParams?: any;
}

export type PageComponent = (
  props: PageProps
) => React.ReactNode | Promise<React.ReactNode>;
