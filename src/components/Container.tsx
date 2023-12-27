import '../assets/css/Container.css';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { children } = props;

  return <div className="container">{children}</div>;
};

export default Container;
