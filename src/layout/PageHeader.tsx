import {
  Box,
  Flex,
  Heading,
  Input,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';
import {
  AccountDropDown,
  AccountIcon,
  AccountPhotoIcon,
  AddNewIcon,
  CalendarIcon,
  HomeIcon,
  ListingsIcon,
  NotificationIcon,
  RequestIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon
} from 'components/SVGAssets';
import styles from 'styles/layout/pageheader.module.scss';
import { TabLink } from './header/TabLink';
import Image from 'next/image';

export const PageHeader = () => {
  return (
    <Flex className={styles.page_header} direction={'column'}>
      <Flex
        className={styles.header_top}
        backgroundColor='#191919'
        // padding='1.5rem 7.8rem'
        color='white'
        justifyContent='space-between'
        alignItems='center'
        gap='1rem'
      >
        <Flex
          direction='column'
          // gap='1rem'
          alignItems='flex-start'
          className={styles.logo}
        >
          <Image src='/veergelogo.png' alt='Veerge' width={120} height={35} />
          <h1
          // fontFamily='Proxima Nova Condensed, sans-serif'
          // fontWeight={400}
          // // fontSize={14}
          // fontSize='1.4rem'
          // margin='1rem'
          >
            For Mainstone
          </h1>
        </Flex>
        <Flex className={styles.user_section} gap='4.5rem' alignItems='center'>
          <Flex
            className={styles.user_actions}
            gap='2.4rem'
            alignItems='center'
          >
            <AddNewIcon />
            <CalendarIcon />
            <NotificationIcon />
          </Flex>
          <Flex className={styles.user_info} gap='1.4rem' alignItems='center'>
            <AccountPhotoIcon />
            <Text>Ahmed Ali</Text>
            <AccountDropDown />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className={styles.navigation}
        gap='1rem'
        // padding='1.5rem 7.8rem'
        alignItems='center'
        backgroundColor='white'
      >
        <TabLink icon={<HomeIcon />} label='Dashboard' active />
        <TabLink icon={<ListingsIcon />} label='Listings' />
        <TabLink icon={<UserIcon />} label='Users' />
        <TabLink icon={<AccountIcon />} label='Account' />
        <TabLink icon={<RequestIcon />} label='Request' />
        <TabLink icon={<SettingsIcon />} label='Settings' />
        <Flex
          flex='1'
          borderRadius={12}
          // bg='#f5f5f5'
          // ml='1.7rem'
          ml='auto'
          className={styles.search}
          alignItems='center'
          gap='1rem'
          padding='.2rem'
          pr='1.2rem'
          maxWidth='32rem'
        >
          <Input
            type='text'
            placeholder='Search... properties, customers here'
            padding='1.4rem 1.6rem'
            height='100%'
          />
          <SearchIcon />
        </Flex>
      </Flex>
    </Flex>
  );
};
