import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber
} from '@chakra-ui/react';
import { DecreaseStatArrow, IncreaseStatArrow } from './SVGAssets';

export const SalesStat = ({
  type = 'increase',
  percentage = 0,
  label,
  amount = 0,
  two_tone = false,
  color = 'blue'
}: {
  type?: string;
  percentage?: number | string;
  label?: string;
  amount?: number;
  two_tone?: boolean;
  color?: string;
}) => {
  return (
    <Stat
      padding={'1.4rem 1.5rem'}
      backgroundColor={'white'}
      borderRadius={'1.2rem'}
      border={'.1rem solid #e4e4e4'}
    >
      <StatNumber
        color={two_tone ? '' : color}
        fontSize={'2rem'}
        fontWeight={'600'}
        mb={'.8rem'}
      >
        ₦{' '}
        {two_tone
          ? Intl.NumberFormat('en-US', {
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
              })
          : Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).format(amount || 0)}
      </StatNumber>
      <StatHelpText
        color={
          type === 'increase'
            ? '#12D8A0'
            : type === 'decrease'
            ? '#FF6A6A'
            : 'black'
        }
        gap={'.5rem'}
        style={{ display: 'flex' }}
        fontSize={'1rem'}
        fontWeight={'500'}
      >
        <StatLabel textTransform={'capitalize'} color={'black'}>
          {label}
        </StatLabel>
        {type === 'increase' ? <IncreaseStatArrow /> : <DecreaseStatArrow />}
        {percentage}%
      </StatHelpText>
    </Stat>
  );
};
