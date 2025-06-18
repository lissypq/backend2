class CartDTO{
constructor(Cart) {
    this.id = Cart._id;
    this.items = Cart.items || [];
    this.totalprice = Cart.totalprice || 0;
    this.userid = Cart.userid || null;
    }        
}

module.exports =CartDTO;