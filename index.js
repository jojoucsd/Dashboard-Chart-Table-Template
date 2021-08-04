function priceFormatter(value) {
    return '$'+value;
}

$(document).ready(function(){
    $('#table').bootstrapTable({
        url: 'test.json',
        responseHandler: function(res){
            return res;
        },
        columns: [{
            field: 'cashier_id',
            title: 'Cashier ID',
            sortable: true
        }, {
            field: 'cashier_name',
            title: 'Cashier Name',
            sortable: true
        }, {
            field: 'num_sales',
            title: 'No Sales',
            sortable: true
        }, {
            field: 'void',
            title: 'Void',
            sortable: true,
            formatter: priceFormatter
        }, {
            field: 'cancel',
            title: 'Cancel',
            sortable: true,
            formatter: priceFormatter
        }, {
            field: 'refund',
            title: 'Refund',
            sortable: true,
            formatter: priceFormatter
        }, {
            field: 'avg_customer',
            title: 'Avg Customer',
            sortable: true
        }]
    })

    $('.btn-range').daterangepicker();

    var ctx = document.getElementById('myChart'); // node

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

