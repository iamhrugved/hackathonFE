import * as React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Arrow from "@mui/icons-material/ChevronRightSharp";
import Gdp from "../../Macroeconomic/gdpPage.js";
import GdpCurrentUsd from "../../Macroeconomic/GdpCurrentUsd.js";
import GdpCurrentAccoutnBalance from "../../Macroeconomic/GdpCurrentAccoutnBalance.js";
import FDINet from "../../Macroeconomic/FDINet.js";
import FDINetInflows from "../../Macroeconomic/FDINetInflows.js";
import FDINetOutflows from "../../Macroeconomic/FDINetOutflows.js";
import FDINetOutflowsPercentGDP from "../../Macroeconomic/FDINetOutflowsPercentGDP.js";
import Header from "../../Header/header";
import Manufacturing from "../../Agriculture/Manufacturing";
import Manufacturing1 from "../../Agriculture/Manufacturing1";
import AnnualGrowth from "../../Agriculture/AnnualGrowth";
import FertilizerProd from "../../Agriculture/FertilizerProd";
import FertilizerCons from "../../Agriculture/FertilizerCons";
import ImportReserves from "../../Debt/ImportReserves";
import GoldReserves from "../../Debt/GoldReserves";
import TotalReserves from "../../Debt/TotalReserves";
import DebtServices from "../../Debt/DebtServices";
import TotalDebt from "../../Debt/TotalDebt";
import CurrentGni from "../../Debt/CurrentGni";
import Bananas from "../../Crops/Bananas";
import Mangoes from "../../Crops/Mangoes";
import Walnuts from "../../Crops/Walnuts";
import Import from "../../Import/Import";
import Sensor from "../../Sensor/Sensor";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Credit from "../../Agriculture/Credit";
import WalnutsIran from "../../Yield/WalnutsIran";
import MangoesPhilippines from "../../Yield/MangoesPhilippines";
import { connect } from "react-redux";

//import Profile from "../../";
const drawerWidth = 240;

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: "",
      page: "gdp",
    };
  }
  handleChange = (panel) => (event, isExpanded) => {
    this.setState({ isExpanded: panel });
  };
  setPage = (page) => {
    this.setState({ page: page, redirectFlag: false });
  };

  componentDidMount = () => { };

  changeGraphType = (type) => {
    this.setState({
      page: type,
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <Accordion
              expanded={this.state.isExpanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Macroeconomic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <>
                    <ListItem
                      button
                      key="GDP"
                      onClick={() => this.changeGraphType("gdp")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        primary="GDP Growth Rage"
                      />
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.changeGraphType("gdpCurrentUsd")}
                      key="gdpCurrentUsd"
                    >
                      <ListItemIcon>
                        {" "}
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="GDP Current USD" />
                    </ListItem>
                    <ListItem
                      button
                      key="Current Account Balance (% of GDP)"
                      onClick={() =>
                        this.changeGraphType("currentAccountBalance")
                      }
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Current Account Balance (% of GDP)" />
                    </ListItem>
                    <ListItem
                      button
                      key="Foreign direct investment, net (BoP, current US$)"
                      onClick={() => this.changeGraphType("fdiNet")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Foreign direct investment, net (BoP, current US$)" />
                    </ListItem>
                    <ListItem
                      button
                      key="Foreign direct investment, net outflows (BoP, current US$) "
                      onClick={() => this.changeGraphType("fDINetOutflows")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Foreign direct investment, net outflows (BoP, current US$) " />
                    </ListItem>
                    <ListItem
                      button
                      key="Foreign direct investment, net inflows (% of GDP) "
                      onClick={() => this.changeGraphType("fdiNetInflows")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Foreign direct investment, net inflows (% of GDP)" />
                    </ListItem>
                    <ListItem
                      button
                      key="FDI-NetOutflows(%ofGDP)"
                      onClick={() => this.changeGraphType("fDINetOutflows")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="FDI-NetOutflows(%ofGDP" />
                    </ListItem>
                  </>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={this.state.isExpanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Agricultural
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <>
                    <ListItem
                      button
                      key="Agricultural Contribution (% GDP)"
                      onClick={() => this.changeGraphType("manufacturing1")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Agricultural Contribution (% GDP)" />
                    </ListItem>

                    <ListItem
                      button
                      key="manufacturing"
                      onClick={() => this.changeGraphType("manufacturing")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Manufacturing (%GDP)" />
                    </ListItem>
                    <ListItem
                      button
                      key="annualgrowth"
                      onClick={() => this.changeGraphType("annualgrowth")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Agriculture, forestry, and fishing, value added (annual % growth)" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.changeGraphType("credit")}
                      key="Credit"
                    >
                      <ListItemIcon>
                        {" "}
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Credit" />
                    </ListItem>
                    <ListItem
                      button
                      key="Fertilizers Production"
                      onClick={() => this.changeGraphType("fertilizer_prod")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Fertilizers Production" />
                    </ListItem>
                    <ListItem
                      button
                      key="FDI Consumption"
                      onClick={() => this.changeGraphType("fertilizer_cons")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Fertilizers Consumption" />
                    </ListItem>{" "}
                  </>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={this.state.isExpanded === "panel3"}
              onChange={this.handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Debt Services
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <>
                    <ListItem
                      button
                      key="importReserves"
                      onClick={() => this.changeGraphType("importReserves")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Total reserves in months of imports" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.changeGraphType("goldReserves")}
                      key="goldReserves"
                    >
                      <ListItemIcon>
                        {" "}
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Total reserves (includes gold, current US$)" />
                    </ListItem>
                    <ListItem
                      button
                      key="totalReserves"
                      onClick={() => this.changeGraphType("totalReserves")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Total reserves (% of total external debt)" />
                    </ListItem>
                    <ListItem
                      button
                      key="debtServices"
                      onClick={() => this.changeGraphType("debtServices")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Debt service (PPG and IMF only, % of exports of goods, services and primary income)" />
                    </ListItem>
                    <ListItem
                      button
                      key="totalDebt"
                      onClick={() => this.changeGraphType("totalDebt")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="Total debt service (% of GNI)" />
                    </ListItem>
                    <ListItem
                      button
                      key="currentGni"
                      onClick={() => this.changeGraphType("currentGni")}
                    >
                      <ListItemIcon>
                        {" "}
                        <ListItemIcon>
                          {" "}
                          <Arrow />
                        </ListItemIcon>
                      </ListItemIcon>
                      <ListItemText primary="GNI (current US$)" />
                    </ListItem>
                  </>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={this.state.isExpanded === "panel4"}
              onChange={this.handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Specialty Crops
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <>
                    <ListItem
                      button
                      key="bananas"
                      onClick={() => this.changeGraphType("bananas")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Bananas" />
                    </ListItem>
                  </>
                </List>
                <List>
                  <>
                    <ListItem
                      button
                      key="mangoes"
                      onClick={() => this.changeGraphType("mangoes")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Mangoes" />
                    </ListItem>
                  </>
                </List>
                <List>
                  <>
                    <ListItem
                      button
                      key="walnuts"
                      onClick={() => this.changeGraphType("walnuts")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Walnuts" />
                    </ListItem>
                  </>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={this.state.isExpanded === "panel5"}
              onChange={this.handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Yield
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <>
                    <ListItem
                      button
                      key="iran"
                      onClick={() => this.changeGraphType("walnutsiran")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Walnuts" />
                    </ListItem>
                  </>
                </List>
                <List>
                  <>
                    <ListItem
                      button
                      key="philippines"
                      onClick={() => this.changeGraphType("mangoesphilippines")}
                    >
                      <ListItemIcon>
                        <Arrow />
                      </ListItemIcon>
                      <ListItemText primary="Mangoes" />
                    </ListItem>
                  </>
                </List>
              </AccordionDetails>
            </Accordion>


            <Divider />
            <ListItem
              button
              key="ImportExport"
              onClick={() => this.changeGraphType("import")}
            >
              {" "}
              <ListItemText primary="Agriculture - Wheat/Rice" />
            </ListItem>

            <Divider />
            <ListItem
              button
              key="sensor"
              onClick={() => this.changeGraphType("sensor")}
            >
              {" "}
              <ListItemText primary="Sensor Data" />
            </ListItem>
          </Box> 
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          style={{ "padding-left": "250px", "padding-top": "100px" }}
        >
          {this.state.page === "gdp" ? <Gdp /> : null}
          {this.state.page === "manufacturing" ? <Manufacturing /> : null}
          {this.state.page === "manufacturing1" ? <Manufacturing1 /> : null}
          {this.state.page === "annualgrowth" ? <AnnualGrowth /> : null}

          {this.state.page === "gdpCurrentUsd" ? <GdpCurrentUsd /> : null}
          {this.state.page === "currentAccountBalance" ? (
            <GdpCurrentAccoutnBalance />
          ) : null}
          {this.state.page === "fdiNet" ? <FDINet /> : null}
          {this.state.page === "fdiNetInflows" ? <FDINetInflows /> : null}
          {this.state.page === "fDINetOutflows" ? <FDINetOutflows /> : null}
          {this.state.page === "fDINetOutflowsPercentGDP" ? (
            <FDINetOutflowsPercentGDP />
          ) : null}

          {this.state.page === "credit" ? <Credit /> : null}
          {/* yield */}
          {this.state.page === "walnutsiran" ? <WalnutsIran /> : null}
          {this.state.page === "mangoesphilippines" ? <MangoesPhilippines /> : null}

          {this.state.page === "fertilizer_prod" ? <FertilizerProd /> : null}
          {this.state.page === "fertilizer_cons" ? <FertilizerCons /> : null}
          {/* Debt Services */}
          {this.state.page === "importReserves" ? <ImportReserves /> : null}
          {this.state.page === "goldReserves" ? <GoldReserves /> : null}
          {this.state.page === "totalReserves" ? <TotalReserves /> : null}
          {this.state.page === "debtServices" ? <DebtServices /> : null}
          {this.state.page === "totalDebt" ? <TotalDebt /> : null}
          {this.state.page === "currentGni" ? <CurrentGni /> : null}
          {this.state.page === "import" ? <Import /> : null}

          {this.state.page === "bananas" ? <Bananas /> : null}
          {this.state.page === "mangoes" ? <Mangoes /> : null}
          {this.state.page === "walnuts" ? <Walnuts /> : null}
          {this.state.page === "sensor" ? <Sensor /> : null}
        </Box>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(DashBoard);
