import { Flex, Text } from '@chakra-ui/react';

export const SimpleOverviewStat = ({
  value = 0,
  label = 'Label'
}: {
  value: number;
  label: string;
}) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'center'}
      padding={'2rem'}
      textAlign={'center'}
      borderRadius={'1.2rem'}
      border={'.1rem solid #f5f5f5'}
      backgroundColor={'white'}
    >
      <Text flex={2} fontSize='2.4rem' fontWeight='600' color={'#191919'}>
        {Intl.NumberFormat('en-US').format(value || 0)}
      </Text>
      <Text flex={1} color={'#606060'} fontSize={'1.4rem'} fontWeight={'400'}>
        {label}
      </Text>
    </Flex>
  );
};
