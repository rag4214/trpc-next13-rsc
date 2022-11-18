export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export type ErrorComponent = (props: ErrorProps) => React.ReactNode;
