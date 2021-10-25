import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({ expenseTotal, incomesTotal }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} devided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              color="green"
              title="Income:"
              value={incomesTotal}
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              color="red"
              title="Expenses:"
              value={expenseTotal}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances
