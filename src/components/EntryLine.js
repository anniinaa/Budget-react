import React, { Fragment } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { removeEntryRedux } from '../actions/entries.actions'
import { openEditModal } from '../actions/modals.actions'

function EntryLine({ id, description, value, isExpense = false }) {
  const dispatch = useDispatch()

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
              <Icon
                onClick={() => dispatch(openEditModal(id))}
                name="edit"
                bordered
              />
              <Icon
                name="trash"
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default EntryLine
