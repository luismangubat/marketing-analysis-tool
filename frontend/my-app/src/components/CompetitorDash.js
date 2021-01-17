import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Card from './Card'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import testData from '../testData/response.json'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import Orders from './Orders';
import { BarChart, XAxis, YAxis, CartesianGrid, Bar } from 'recharts';
import Title from './Title';


// AVERAGE PRICE CALCULATION
const productPrices = testData.map(productListing => {
    return productListing.productprice;

})

const sumPrice = productPrices.reduce((a, b) => a + b, 0),
    avgPrice = sumPrice / productPrices.length

// TOTAL REVIEWS CALCULATION
const numSellerReviews = testData.map(productListing => {
    return productListing.numbersellerreviews
})

const totalReviews = numSellerReviews.reduce((a, b) => a + b, 0)

// AVERAGE PRODUCT RATINGS CALCULATION
const productRatings = testData.map(productListing => {
    return productListing.productrating
})

const sumRatings = productRatings.reduce((a, b) => a + b, 0),
    avgRatings = sumRatings / productPrices.length

// PRICE QUARTILES
productPrices.sort()
const priceMin = productPrices[0]
const priceQ1 = (productPrices[11] + productPrices[12]) / 2
const priceMed = (productPrices[24] + productPrices[25]) / 2
const priceQ3 = (productPrices[36] + productPrices[37]) / 2
const priceMax = productPrices[49]

// PRICE BAR CHART
const priceBarData = [
    {
        key: "$10-15", amt: 12,
    },
    {
        key: "$15-20", amt: 17,
    },
    {
        key: "$20-25", amt: 10,
    },
    {
        key: "$25-30", amt: 30,
    },
    {
        key: "$30+", amt: 3,
    }
];

// RATINGS BAR
const ratingsBar = [
    {
        key: "5 ★", amt: 52,
    },
    {
        key: "4 ★", amt: 23,
    },
    {
        key: "3 ★", amt: 10,
    },
    {
        key: "2 ★", amt: 8,
    },
    {
        key: "1 ★", amt: 3,
    }
];

// STYLES
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontSize: '12px',

    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        boxShadow: 'none',
        borderRadius: '20px'
    },
    fixedHeight: {
        height: 180,
    },
}));



export default function CompetitorDash() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Average Price*/}
                        <Grid item xs={2} md={2} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Card attr='Average Price' value={'$' + avgPrice.toFixed(2)} />
                            </Paper>
                        </Grid>
                        {/* Total Reviews */}
                        <Grid item xs={2} md={2} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Card attr='Total Reviews' value={totalReviews} />
                            </Paper>
                        </Grid>
                        {/* Average Ratings */}
                        <Grid item xs={2} md={2} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Card attr='Average Ratings' value={avgRatings.toFixed(1) + ' ★'} />
                            </Paper>
                        </Grid>
                        {/* Price Range */}
                        <Grid item xs={2} md={2} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Card attr='Price Range' value={'$' + priceMin.toFixed(2) + ' - $' + priceMax.toFixed(2)} />
                            </Paper>
                        </Grid>
                        {/* Price Range Bar Chart*/}
                        <Grid item xs={2} md={2} lg={6}>
                            <Paper className={classes.paper}>
                                <Title>Price Range</Title>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={priceBarData}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="key" />
                                    <YAxis />
                                    <Bar dataKey="amt" fill="#FF9952" />
                                </BarChart>
                            </Paper>
                        </Grid>
                        {/* Ratings Range Bar Chart*/}
                        <Grid item xs={2} md={2} lg={6}>
                            <Paper className={classes.paper}>
                                <Title>Product Reviews</Title>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={ratingsBar}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                    layout='horizontal'
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis  dataKey="key"/>
                                    <YAxis />
                                    <Bar dataKey="amt" fill="#FF9952" />
                                </BarChart>
                            </Paper>
                        </Grid>

                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Orders />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                    </Box>
                </Container>
            </main>
        </div>
    );
}