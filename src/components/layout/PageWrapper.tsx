type Props = {
  state?: string;
  children: React.ReactNode;
};

const PageWrapper = ({ state = '', children }: Props) => {
  return <>{children}</>;
};

export default PageWrapper;
