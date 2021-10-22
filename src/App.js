import {
  Container,
  Statistic,
  Header,
  Segment,
  Grid,
  Icon,
  Form,
  Button,
} from 'semantic-ui-react'
import styles from './App.css'

function App() {
  return (
    <Container>
      <Header style={{ paddingTop: '20px' }} as="h1">
        Budget
      </Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance: </Statistic.Label>
        <Statistic.Value>2,550.50</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} devided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Incom:{' '}
                </Statistic.Label>
                <Statistic.Value>5,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              {' '}
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Expences:{' '}
                </Statistic.Label>
                <Statistic.Value>5,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid textAlign="right" columns={3}>
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>
              something
            </Grid.Column>
            <Grid.Column textAlign="right" width={2}>
              10 €
            </Grid.Column>
            <Grid.Column width={4}>
              <Icon name="edit" bordered></Icon>
              <Icon name="trash"></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid textAlign="right" columns={3}>
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>
              something else
            </Grid.Column>
            <Grid.Column textAlign="right" width={2}>
              100 €
            </Grid.Column>
            <Grid.Column width={4}>
              <Icon name="edit" bordered></Icon>
              <Icon name="trash"></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add new Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            label="Description"
            placeholder="New shinny thing"
          />
          <Form.Input width={4} label="Value" placeholder="100" icon="euro" />
        </Form.Group>
        <Button.Group style={{ marginTop: '10' }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>OK</Button>
        </Button.Group>
      </Form>
    </Container>
  )
}

export default App
