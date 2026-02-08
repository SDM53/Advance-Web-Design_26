<script setup>
    import Header from './components/Header.vue'
    import Card from './components/Card.vue'
    import Section from './components/Section.vue'
</script>

<template>
    <Header />
    <Card>
        <form id="personForm" class="rowForm">
            <input id="personInput" type="text" placeholder="Add person name"/>
            <button>Add Person</button>
        </form>

        <form id="expenseForm" class="rowForm">
            <input id="descInput" type="text" placeholder="Expense description"/>
            <input id="amountInput" type="number" placeholder="Amount"/>
            <select id="paidBySelect"></select>
            <button>Add Expense</button>
        </form>

        <Section title="People">
          <ul id="peopleList" class="list"></ul>
        </Section>
        <Section title="Expenses">
          <ul id="expensesList" class="list"></ul>
        </Section>
        <Section title="Total">
          <p>
           Total spent: <strong id="totalSpent">$0.00</strong><br/>
           Split per person: <strong id="splitAmount">$0.00</strong>
          </p>
        </Section>
        <Section title="Summary">
          <ul id="summaryList" class="list"></ul>
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
</style>
