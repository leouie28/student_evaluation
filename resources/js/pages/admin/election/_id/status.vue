<template>
    <div class="pa-2">
        <v-card elevation="2" class="pa-2">
            <v-card-text>
                <bar-chart :height="300" :chartData="customer_chart"></bar-chart>
                <bar-chart :height="300" :chartData="customer_chart"></bar-chart>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import BarChart from '@/components/chart/bar.vue'
export default {
    components: {
        BarChart,
    },
    data: () => ({
        customer_chart: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Sales',
                    axis: 'y',
                    backgroundColor: [
                        // 'rgba(255, 99, 132, 0.2)',
                        // 'rgba(255, 159, 64, 0.2)',
                        // 'rgba(255, 205, 86, 0.2)',
                        // 'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        // 'rgba(153, 102, 255, 0.2)',
                        // 'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        // 'rgb(255, 159, 64)',
                        // 'rgb(255, 205, 86)',
                        // 'rgb(75, 192, 192)',
                        // 'rgb(54, 162, 235)',
                        // 'rgb(153, 102, 255)',
                        // 'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1,
                    data: [2, 5, 1, 0, 8, 3, 0]
                },
            ],
            title: {
                display: true,
                text: 'Sample Test'
            }
        },
    }),
    methods: {
        
    },
};
</script>