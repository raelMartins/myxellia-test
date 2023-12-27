import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { NoImageIcon } from './SVGAssets';

export const TopSellingSection = () => {
  return (
    <>
      <Heading
        color={'#12d8a0'}
        fontSize={'1.6rem'}
        fontWeight={'600'}
        mb={'1rem'}
      >
        Top Selling
      </Heading>
      <Box fontSize={'2.8rem'} fontWeight={'600'}>
        ₦{' '}
        {Intl.NumberFormat('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
          .format(0)
          .split('.')
          .map((el: string, i: number) => {
            if (i === 0) {
              return el;
            } else {
              return (
                <span style={{ fontSize: 'inherit', color: '#CBCBCB' }} key={i}>
                  .{el}
                </span>
              );
            }
          })}
      </Box>
      <Text color={'#606060'} fontSize={'1.4rem'} mb='1.4rem'>
        Total Sold
      </Text>
      <Flex gap={'2rem'}>
        <Center
          height={'15.5rem'}
          width={'16.1rem'}
          borderRadius={'1.2rem'}
          backgroundColor={'#F5F5F5'}
        >
          <NoImageIcon />
        </Center>
        <Flex direction={'column'} gap={'3.4rem'}>
          <Text fontSize={'2rem'} fontWeight={'600'}>
            None
          </Text>
          <Box>
            <Text
              fontSize={'1.6rem'}
              fontWeight={'600'}
              color={'#606060'}
              mb={'.2rem'}
            >
              0
            </Text>
            <Text fontSize={'1.2rem'} fontWeight={'400'} color={'#606060'}>
              Whole units sold
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
