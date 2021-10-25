import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({ title, value }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} devided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color="green" title="Income:" value="2000" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance color="red" title="Expenses:" value="1349.49" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances
