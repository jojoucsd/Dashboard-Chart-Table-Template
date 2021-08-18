function priceFormatter(value) {
    return '$'+value;
}


var apiSettings = {
    "async": true,
    "crossDomain": true,
    "url" :"http://missionalpr.com/pos_test/access_test.php",
    "method" : "POST",
    "headers" : {
        "cache-control": "no-cache",
        'Content-Type':'application/json',
    },
    "data" :{"device_sn":"5df65990",
    "account_id":"lighthouse",
    "account_token":"fake_token_not_used",
    "from_time":"2021-08-15 00:00:00",
    "to_time":"2021-08-15 23:59:59",
    "comments":""}
}
$(document).ready(function(){
    $('.btn-range').daterangepicker({},(start, end, label) => {
        $('.date-range').html(start.format('MM/DD/YYYY')+' - '+end.format('MM/DD/YYYY'))
    });
    $('.btn-show-report').click(() => {
        //TODO: generate report callback when the button is clicked.
    });
 
    generateReport();

    $('#showReport').click(function (){
        console.log('clicked')
        $.ajax(apiSettings).done(function (res) {
            // console.log(res)
             console.log(res)
        })

    })
});

function urlFormatter (data) {
    // console.log('data', data)
    return "<a href=" + data +" target=`_blank`>Clip</a>"

}

function generateReport() {
    $('#table').bootstrapTable({
        url: 'test.json',
        sidePagination: 'client',
        pagination: true,
        pageSize: 100,
        paginationHAlign: 'right',
        responseHandler: function(res){
            // console.log(res);
            return res;
        },
        columns: [{
            field: 'ID',
            title: 'ID',
            sortable: true
        }, {
            field: 'REG_NAME',
            title: 'Reg Name',
            sortable: true
        }, {
            field: 'AMOUNT',
            title: 'Amount',
            sortable: true,
            formatter: priceFormatter
        }, {
            field: 'POS_SYSTEM',
            title: 'POS System',
            sortable: true
        }, {
            field: 'TIMEZONE',
            title: 'Timezone',
            sortable: true
        }, {
            field: 'ACQ_TIME',
            title: 'ACQ Time',
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