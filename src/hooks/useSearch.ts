import { useMemo, useState } from 'react';

import { PrisonersInput } from '~/apollo/hooks/usePrisoners';

export const useSearch = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number[]>([0, 99]);
  const [region, setRegion] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [canWrite, setCanWrite] = useState<string | undefined>();
  const [mailInterests, setMailInterests] = useState<string[]>([]);

  const filter = useMemo(
    () =>
      Object.entries({
        age: {
          gt: age[0],
          lt: age[1],
        },

        ...(region ? { region: { eq: region } } : {}),
        ...(canWrite ? { can_write: { eq: canWrite === 'да' } } : {}),
        ...(name ? { name: { ilike: `%${name}%` } } : {}),
        ...(sex ? { gender: { eq: sex } } : {}),
        or: mailInterests.map((i) => ({ interests: { contains: i } })),
      }).reduce<PrisonersInput>(
        (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
        {},
      ),
    [age, region, canWrite, name, mailInterests, sex],
  );

  return {
    values: { name, age, region, sex, canWrite, mailInterests },
    setters: {
      setName,
      setAge,
      setRegion,
      setSex,
      setCanWrite,
      setMailInterests,
    },
    filter,
  } as const;
};
