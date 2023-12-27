import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Text
} from '@chakra-ui/react';
import { TabLink } from 'layout/header/TabLink';
import { SalesStat } from './SalesStat';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  generateColor,
  generate_random_number_array
} from 'utilities/helpers/utils';
import { months } from 'utilities/helpers/placeholder_data';
import styles from 'styles/components/salesoverviewsection.module.scss';
ChartJS.register(...registerables);

export const SalesOverviewSection = () => {
  const color = generateColor();

  const data = {
    labels: months.slice(0, 9),
    datasets: [
      {
        label: `Balance`,
        data: generate_random_number_array({ length: 9, max: 100 })
      },
      {
        label: `Deposit`,
        data: generate_random_number_array({ length: 9, max: 100 })
      },
      {
        label: `Purchase`,
        data: generate_random_number_array({ length: 9, max: 100 })
      },
      {
        label: `Withdrawal`,
        data: generate_random_number_array({ length: 9, max: 100 })
      }
    ]
  };
  return (
    <>
      <Flex
        mb={'1.7rem'}
        justify={'space-between'}
        alignItems={'flex-end'}
        gap={'1rem'}
      >
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
          _hover={{ backgroundColor: '#555555', color: 'white' }}
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
        mb={'1.6rem'}
        width={`calc(100% + 4.2rem)`}
      />
      <Grid
        // templateColumns={'1.3fr 1fr'}
        className={styles.sales_chart_data}
      >
        <Box>
          <Line
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom'
                },
                title: {
                  display: false,
                  text: 'Chart.js Line Chart'
                }
              }
            }}
          />
        </Box>
        <Grid templateColumns={'1fr 1fr'} gap={'1.4rem 1.6rem'}>
          <SalesStat
            color='#4545FE'
            label='balance'
            percentage={'40'}
            amount={20}
          />
          <SalesStat
            color='#12D8A0'
            label='deposit'
            percentage={'100'}
            amount={50}
          />
          <SalesStat label='purchase' percentage={'0'} amount={0} two_tone />
          <SalesStat
            color='#FF6A6A'
            label='withdrawal'
            percentage={'60'}
            amount={30}
            type='decrease'
          />
        </Grid>
      </Grid>
    </>
  );
};
