import { FC, useEffect, useState } from 'react';

type ClientOnlyProps = {
  children?: React.ReactNode;
};

const ClientOnly: FC<ClientOnlyProps> = (props) => {
  const { children } = props;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
