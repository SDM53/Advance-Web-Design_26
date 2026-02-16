<script setup>
    import {ref, computed} from 'vue'
    import Header from './components/Header.vue'
    import Card from './components/Card.vue'
    import Section from './components/Section.vue'

    const people = ref([])
    const newPerson = ref('')

    const addPerson = () =>{
      const name = newPerson.value.trim()

      if(!name) return

      people.value.push(name)
      newPerson.value = ''
    }

    const expenses = ref([])
    const newExpense = ref({
      desc: '',
      amount: 0,
      paidBy: ''
    })

    const addExpense = () => {
      const {desc, amount, paidBy} = newExpense.value

      if(!desc.trim() || isNaN(parseFloat(amount)) || !paidBy) return

      expenses.value.push({
        desc: desc.trim(),
        amount: parseFloat(amount),
        paidBy
      })

      newExpense.value = {
        desc: '',
        amount: 0,
        paidBy: ''
      }
    }

    const total = computed(() => {
      return expenses.value.reduce((total, expense) => total + expense.amount, 0).toFixed(2)
    })

    const split = computed(() => {
      if(people.value.length === 0) return '0.00'
      return (total.value / people.value.length).toFixed(2)
    })

    const summaryList = computed(()=> {
      return people.value.map(person => {
        const totalPaid = expenses.value.filter(expense => expense.paidBy === person)
        .reduce((total, expense) => total + expense.amount, 0)

        const balance = totalPaid - split.value

        return `${person} ${balance > 0 ? 'gets' : 'owes'} $${Math.abs(balance).toFixed(2)}`
      })
    })
</script>

<template>
    <Header />
    <Card>
        <form id="personForm" class="rowForm" @submit.prevent="addPerson">
            <input id="personInput" type="text" placeholder="Add person name" v-model="newPerson"/>
            <button>Add Person</button>
        </form>

        <form id="expenseForm" class="rowForm" @submit.prevent="addExpense">
            <input id="descInput" type="text" placeholder="Expense description" v-model="newExpense.desc"/>
            <input id="amountInput" type="number" placeholder="Amount" v-model="newExpense.amount"/>
            <select id="paidBySelect" v-model="newExpense.paidBy">
              <option v-for="Person in people" :key="Person" :value="Person">{{Person}}</option>
            </select>
            <button>Add Expense</button>
        </form>

        <Section title="People">
          <ul id="peopleList" class="list">
              <li v-for="person in people" :key="person">
                {{ person }}
              </li>
          </ul>
        </Section>
        <Section title="Expenses">
          <ul id="expensesList" class="list">
              <li v-for="expense in expenses" :key="expense.paidBy">
                {{ expense.desc }} - ${{ expense.amount.toFixed(2) }} paid by {{ expense.paidBy }}
              </li>
          </ul>
        </Section>
        <Section title="Total">
          <p>
           Total spent: <strong id="totalSpent">${{total}}</strong><br/>
           Split per person: <strong id="splitAmount">${{split}}</strong>
          </p>
        </Section>
        <Section title="Summary">
          <ul id="summaryList" class="list">
            <li v-for="(summary, index) in summaryList" :key="index">{{ summary }}</li>
          </ul>
        </Section>
    </Card>
</template>

<style scoped>
.rowForm {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
}

input, select {
    flex: 1;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #f0fff0;
}

button {
    padding: 10px 14px;
    border-radius: 10px;
    border: none;
    background: #00a86b;
    color: #f0fff0;
    cursor: pointer;
}

.list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 8px;
}

.list li {
    padding: 10px;
    border-radius: 10px;
    background: #f0fff0;
}

#summaryList li {
    background: #f0fff0;
    color: #0b6623;
}
</style>
