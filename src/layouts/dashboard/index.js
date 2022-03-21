/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import HaloReportsBarChart from "examples/Charts/BarCharts/HaloReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import HaloStatisticsCard from "examples/Cards/StatisticsCards/HaloStatisticsCard";


import DataTable from "examples/Tables/DataTable";



// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import projectsTableData from "layouts/tables/data/projectsTableData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { Component } from "react";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>

      <Grid container spacing={3}>
          <Grid item xs={8} md={8} lg={8}>

            
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <HaloStatisticsCard
                color="info"
                icon="weekend"
                title="Orders Placed"
                count={281}
                percentage={{
                  color: "info",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <HaloStatisticsCard
                icon="leaderboard"
                title="In Transit"
                count="2,300"
                color="info"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <HaloStatisticsCard
                color="info"
                icon="store"
                title="Delivered Orders"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={2}>
                <HaloReportsBarChart
                  color="info"
                  title="Performance"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
              <HaloReportsBarChart
                  color="info"
                  title="Returns"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
              <HaloReportsBarChart
                  color="info"
                  title="Inventory"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>

      </Grid>

      <Grid item xs={4} md={4} lg={4}>
      <Grid container spacing={3}>
      <Grid item xs={12}>

      <DefaultDoughnutChart
                  color="info"
                  title=""
                  description=" "
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                  icon= {{ color: "info", component: "" }}
                />
                  </Grid>
          <Grid item xs={12}>
            <Card>

              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
