import React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, BarChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Bar, Legend } from 'recharts';
import Title from './Title';
import app_config from '../../config';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper, Tooltip } from '@mui/material';
import { io } from 'socket.io-client';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();
  const url = app_config.api_url;

  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
  const [productArray, setProductArray] = useState([]);
  const [userArray, setuserArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [productQty, setProductQty] = useState([]);
  const [productPrice, setProductPrice] = useState([]);


  const fetchProductData = () => {
    // setLoading(true);
    fetch(url + '/product/getall')
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data => {
        console.log(data);
        setLoading(false);
        setProductArray(data);
        setProductQty(prepareData(data, 'name', 'quantity'));
        setProductPrice(prepareData(data, 'name', 'price'));
      }))
  }

  useEffect(() => {
    fetchUserData();
  }, [])
  const fetchUserData = () => {
    // setLoading(true);
    fetch(url + '/user/getall')
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data => {
        console.log(data);
        setLoading(false);
        setuserArray(data);
      }))
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  socket.on('refresh').then(data => {
    console.log('refreshed');
    fetchProductData();
  })

  const prepareData = (data, x, y) => {
    const chartData = [];
    for (let item of data) {
      const entry = {};
      entry[x] = item[x];
      entry[y] = item[y];
      chartData.push(entry)
    }
    console.log(chartData)
    return chartData;
  }

  const showChart = (key) => {
    if (!loading) {
      return (
        <LineChart
          data={productQty}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey={key}
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey={key}
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      )
    }
  }

  const showBarChart = (data, key) => {
    if (!loading) {
      return (
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={key} fill="#8884d8" />
        </BarChart>
      )
    }
  }

  return (
    <React.Fragment>
      <Grid className="mb-5" container spacing={3}>

        <Grid item xs={12} md={3} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <h1>Products Count</h1>
            <h1 className="display-3">{productArray.length}</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <h1>Number of Users</h1>
            <h1 className="display-52">{userArray.length}</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >




            <ResponsiveContainer>
              {showBarChart(productPrice, 'price')}
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <ResponsiveContainer>
              {showBarChart(productQty, 'quantity')}
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>

        <Button color="primary" variant="contained" onClick={fetchProductData}>Refresh</Button>
      </Grid>


    </React.Fragment>
  );
}