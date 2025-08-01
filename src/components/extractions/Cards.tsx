import { Box } from '@mui/material';
import Link from 'next/link';

import { Button } from '~/components/atoms/Button/Button';
import { Card } from '~/components/organisms/Card/Card';

export const Cards = () => (
  <Box
    display="flex"
    flexDirection={{ sm: 'row', xs: 'column' }}
    flexWrap="wrap"
    justifyContent="space-between"
  >
    <Card
      action={
        <Link href="/prisoners">
          <Button>Написать</Button>
        </Link>
      }
      title={
        <>
          НАПИСАТЬ
          <br />
          ПИСЬМО
        </>
      }
      body="Самый простой и быстрый способ поддержать заключенного – отправить ему письмо. Мы поможем выбрать собеседника и расскажем, куда отправлять письмо!"
      catPictureUrl="/icon_letter.svg"
    />
    <Card
      action={
        <a href="https://zaodno.org/avtozak" target="_blank">
          <Button>Помочь</Button>
        </a>
      }
      title={
        <>
          СДЕЛАТЬ
          <br />
          ПОЖЕРТВОВАНИЕ
        </>
      }
      body="Важно поддерживать заключенных финансово. Вы можете помочь оплатить защиту или штраф подзащитным Avtozak LIVE или другим правозащитным организациям на платформе «Заодно»."
      catPictureUrl="/icon_money.svg"
    />
    <Card
      action={
        <Button variant="outline" disabled>
          скоро
        </Button>
      }
      title={
        <>
          ОТНЕСТИ
          <br />
          ПЕРЕДАЧКУ
        </>
      }
      body="В исправительных учреждениях нет многих вещей, к которым все привыкли на свободе. Вы можете помочь сделать заключенных чуточку счастливее, отправив им передачку с необходимыми продуктами или оплатить такую передачу. Этот раздел находится в разработке."
      catPictureUrl="/icon_parcel.svg"
    />
    <Card
      action={
        <a href="/doc.pdf" target="_blank">
          <Button>распространить</Button>
        </a>
      }
      body="Жители России, да и всего мира, должны узнать о тех, кто пытается остановить войну! Рассказывайте об отдельных историях и об этом проекте, для этого мы сделали листовки."
      catPictureUrl="/icon_share.svg"
      title="РАСПРОСТРАНИТЬ ИНФОРМАЦИЮ"
    />
  </Box>
);
