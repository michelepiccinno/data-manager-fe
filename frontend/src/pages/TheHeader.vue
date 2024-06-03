<script>
import NewTicket from '@/components/NewTicket.vue';
import TicketsTable from '@/components/TicketsTable.vue';

export default {
    name: "TheHeader",

    data() {
        return {
            menuItems: [
                {
                    routeName: "ticketstable",
                    label: "Elenco Ticket"
                },
                {
                    routeName: "newticket",
                    label: "Nuovo Ticket"
                }
            ]
        }
    }
}
</script>

<template>
    <div class="main-div">
        <div class="container">
            <nav>
                <ul>
                    <li v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="{ name: item.routeName }" class="btn btn-info">{{ item.label }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.main-div {
    background-color: rgb(215, 226, 235);
}

ul {
    display: flex;
    padding: 5px;
}

li {
    list-style: none;
    margin-right: 5px;
}
</style>