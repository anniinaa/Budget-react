import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine({ description, value, isExpense = false }) {
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid textAlign="right" columns={3}>
        <Grid.Row>
          <Grid.Column textAlign="left" width={10}>
            {description}
          </Grid.Column>
          <Grid.Column textAlign="right" width={2}>
            {value}
          </Grid.Column>
          <Grid.Column width={4}>
            <Icon name="edit" bordered></Icon>
            <Icon name="trash"></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default EntryLine
