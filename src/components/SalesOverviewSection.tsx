import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { TabLink } from 'layout/header/TabLink';

export const SalesOverviewSection = () => {
  return (
    <>
      <Flex mb={'1.7rem'} justify={'space-between'} alignItems={'flex-end'}>
        <Box>
          <Heading fontSize='2rem'>Sales Overview</Heading>
          <Text
            fontSize='1.2rem'
            fontWeight='400'
            mt={'1.2rem'}
            color={'#606060'}
          >
            Showing overview Jan 2022 - Sep 2022
          </Text>
        </Box>
        <Button
          borderRadius={'1.2rem'}
          border={'.1rem solid #cbcbcb'}
          color={'#cbcbcb'}
          backgroundColor={'white'}
          padding={'2.2rem 3.7rem'}
          fontSize={'1.2rem'}
        >
          View Transactions
        </Button>
      </Flex>
      <Flex justify={'flex-end'} gap={'1.2rem'} mb={'1.2rem'}>
        <TabLink icon={<></>} label='1 Week' noicon />
        <TabLink icon={<></>} label='1 Month' noicon />
        <TabLink icon={<></>} label='1 Year' active noicon />
      </Flex>
      <Divider
        border={'.13rem solid #e4e4e4'}
        ml={'-2.2rem'}
        width={`calc(100% + 4.2rem)`}
      />
    </>
  );
};
