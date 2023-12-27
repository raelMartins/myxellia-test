import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { CalendarIcon } from './SVGAssets';
import { useRef } from 'react';
import Calendar from 'react-calendar';

export const CustomCalendar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as React.MutableRefObject<HTMLSpanElement>;

  return (
    <>
      <span style={{ cursor: 'pointer' }} ref={btnRef} onClick={onOpen}>
        <CalendarIcon />
      </span>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'lg'}
      >
        <DrawerOverlay />
        <DrawerContent
          fontSize={'1.6rem'}
          backgroundColor={'#0D0D0D'}
          color={'white'}
        >
          <DrawerHeader
            backgroundColor={'#171717'}
            padding={'1.3rem 2.3rem'}
            fontSize={'1.6rem'}
          >
            Calendar
          </DrawerHeader>
          <DrawerCloseButton padding={'2rem'} />

          <DrawerBody>
            <Calendar />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
