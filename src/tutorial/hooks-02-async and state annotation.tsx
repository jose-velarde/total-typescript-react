import { useEffect, useState } from 'react';

interface Data {
  id: number;
  name: string;
}

const fetchData = async (): Promise<Data> => {
  return await Promise.resolve({ id: 1, name: 'John' });
};

export const Component = (): void => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetchData()
      .then((val) => {
        setData(val);
        console.log(data);
      })
      .catch(() => {});
  }, []);
};
