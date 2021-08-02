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
});