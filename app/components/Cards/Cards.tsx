import { Box } from '@mui/material';
import Link from 'next/link';

import { Button } from '@/components/atoms/Button/Button';
import { Card } from '@/components/organisms/Card/Card';

export const Cards = () => (
  <Box
    justifyContent="space-between"
    display="flex"
    flexWrap="wrap"
    flexDirection={{ xs: 'column', sm: 'row' }}
  >
    <Card
      title={
        <>
          НАПИСАТЬ
          <br />
          ПИСЬМО
        </>
      }
      body="Самый простой и быстрый способ поддержать заключенного – отправить ему письмо. Мы поможем выбрать собеседника и расскажем, куда отправлять письмо!"
      catPictureUrl="/icon_letter.svg"
      action={
        <Link href="/prisoners">
          <Button>Написать</Button>
        </Link>
      }
    />
    <Card
      title={
        <>
          СДЕЛАТЬ
          <br />
          ПОЖЕРТВОВАНИЕ
        </>
      }
      body="Важно поддерживать заключенных финансово. Вы можете помочь оплатить защиту или штраф подзащитным Avtozak LIVE или другим правозащитным организациям на платформе «Заодно»."
      catPictureUrl="/icon_money.svg"
      action={
        <a href="https://zaodno.org/avtozak" target="_blank">
          <Button>Помочь</Button>
        </a>
      }
    />
    <Card
      title={
        <>
          ОТНЕСТИ
          <br />
          ПЕРЕДАЧКУ
        </>
      }
      body="В исправительных учреждениях нет многих вещей, к которым все привыкли на свободе. Вы можете помочь сделать заключенных чуточку счастливее, отправив им передачку с необходимыми продуктами или оплатить такую передачу. Этот раздел находится в разработке."
      catPictureUrl="/icon_parcel.svg"
      action={
        <Button variant="outline" disabled>
          скоро
        </Button>
      }
    />
    <Card
      title="РАСПРОСТРАНИТЬ ИНФОРМАЦИЮ"
      body="Жители России, да и всего мира, должны узнать о тех, кто пытается остановить войну! Рассказывайте об отдельных историях и об этом проекте, для этого мы сделали листовки."
      catPictureUrl="/icon_share.svg"
      action={
        <a href="/doc.pdf" target="_blank">
          <Button>распространить</Button>
        </a>
      }
    />
  </Box>
);
