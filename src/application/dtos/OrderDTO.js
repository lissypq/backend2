class OrderDTO{
    constructor(order) {
        this.id = order._id;
        this.customerid = order.customerid;
        this.totalprice = order.totalprice;
        this.orderdate = order.orderdate;
        this.orderstatus = order.orderstatus;
        }
}

module.exports = OrderDTO;