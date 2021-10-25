import { Container, Segment, Grid, Icon } from 'semantic-ui-react'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLine from './components/EntryLine'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="2,890.69" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <MainHeader title="Add new transaction" type="h3" />
      <EntryLine description="income" value="10" />
      <EntryLine description="expense" value="30" />
      <EntryLine description="doggo" value="46" isExpense />
      <NewEntryForm />
    </Container>
  )
}

export default App
