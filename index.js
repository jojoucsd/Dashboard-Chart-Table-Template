function priceFormatter(value) {
    return '$'+value;
}

$(document).ready(function(){
    $('.btn-range').daterangepicker({},(start, end, label) => {
        $('.date-range').html(start.format('MM/DD/YYYY')+' - '+end.format('MM/DD/YYYY'))
    });
    $('.btn-show-report').click(() => {
        //TODO: generate report callback when the button is clicked.
    });
    generateReport();
});

function urlFormatter (data) {
    // console.log('data', data)
    return "<a href=" + data +" target=`_blank`>Clip</a>"

}

function generateReport() {
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
        }, {
            field: 'url',
            title: 'Url',
            align: 'center',
            clickToSelect: false,
            sortable: true,
            formatter: urlFormatter            
        }
    
    ]
    })

    

    var ctx = document.getElementById('myChart'); // node

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['No Sales', 'Void', 'Cancel', 'Refund', 'Customer'],
            datasets: [{
                label: '# Counts',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
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
}