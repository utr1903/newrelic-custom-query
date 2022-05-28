import React from "react";
import { Grid, GridItem } from "nr1";

import ButtonTest from './components/ButtonTest';
import NrqlTest from './components/NrqlTest';

const ACCOUNT_ID = 3368465;

export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <Grid className="wrapper">
        <GridItem columnSpan={10}>
          <h1>This is a custom New Relic app!</h1>
        </GridItem>
        <GridItem columnSpan={10}>
          <hr />
        </GridItem>
        <GridItem columnSpan={10}>
          <ButtonTest />
        </GridItem>
        <GridItem columnSpan={10}>
          <NrqlTest accountId={ACCOUNT_ID}/>
        </GridItem>
      </Grid>
    );
  }
}
