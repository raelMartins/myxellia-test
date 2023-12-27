import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NoImageIcon } from './SVGAssets';
import { Paginator, ViewAllLink } from './Widgets';

export const TotalBalanceSection = () => {
  return (
    <>
      <Flex align={'flex-start'} justify={'space-between'}>
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
                  <span
                    style={{ fontSize: 'inherit', color: '#CBCBCB' }}
                    key={i}
                  >
                    .{el}
                  </span>
                );
              }
            })}
        </Box>
        <ViewAllLink />
      </Flex>
      <Text color={'#606060'} fontSize={'1.4rem'} mb='3.2rem'>
        Total Outstanding Balance
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
        <Flex direction={'column'} gap={'3.4rem'} flex={'1'}>
          <Text fontSize={'2rem'} fontWeight={'600'}>
            None
          </Text>
          <Box>
            <Text
              fontSize={'1.6rem'}
              fontWeight={'600'}
              color={'#FF6A6A'}
              mb={'.2rem'}
            >
              ₦{' '}
              {Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(0)}
            </Text>
            <Text fontSize={'1.2rem'} fontWeight={'400'} color={'#606060'}>
              Outstanding Balance
            </Text>
            <Flex justify={'flex-end'} mt={'2.5rem'}>
              <Paginator />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
