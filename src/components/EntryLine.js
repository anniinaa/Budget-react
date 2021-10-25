import React, { Fragment } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine({
  id,
  description,
  value,
  isExpense = false,
  deleteEntry,
  editEntry,
}) {
  return (
    <Fragment>
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
              <Icon onClick={() => editEntry(id)} name="edit" bordered />
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default EntryLine
