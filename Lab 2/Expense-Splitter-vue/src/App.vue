<script setup>
    import Header from './components/Header.vue'
</script>

<template>
    <Header />
    <main class="card">
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

        <selection>
            <h3>People</h3>
            <ul id="peopleList" class="list"></ul>
        </selection>

        <selection>
            <h3>Expenses</h3>
            <ul id="expensesList" class="list"></ul>
        </selection>

        <selection>
            <h3>Total</h3>
            <p>
                Total spent: <strong id="totalSpent">$0.00</strong><br/>
                Split per person: <strong id="splitAmount">$0.00</strong>
            </p>
        </selection>

        <selection class="summary">
            <h3>Summary</h3>
            <ul id="summaryList" class="list"></ul>
        </selection>
    </main>
</template>

<style scoped>

</style>
