import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import MainHeader from './components/MainHeader'
import ModalEdit from './components/ModalEdit'
import NewEntryForm from './components/NewEntryForm'

function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entry.id)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      setDescription('')
      setValue('')
      setIsExpense(true)

      resetEntry()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncomes = 0
    let totalExpenses = 0
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value))
      }
      {
        return (totalIncomes += Number(entry.value))
      }
    })
    setTotal(totalIncomes - totalExpenses)
    setIncomeTotal(totalIncomes)
    setExpenseTotal(totalExpenses)
    console.log('total', totalIncomes)
  }, [entries])

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id)
    setEntries(result)
  }
  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    })
    setEntries(result)
    resetEntry()
  }
  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id)
      const entry = entries[index]

      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.setIsExpense)
      setIsOpen(true)
    }
  }

  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances incomesTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader title="History" type="h3" />
      <MainHeader title="Add new transaction" type="h3" />
      <EntryLines
        isOpen={isOpen}
        deleteEntry={deleteEntry}
        entries={entries}
        editEntry={editEntry}
      />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
    </Container>
  )
}

export default App

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: 80,
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: 850,
    isExpense: true,
  },
  {
    id: 4,
    description: 'Lottory win',
    value: 800,
    isExpense: false,
  },
]
