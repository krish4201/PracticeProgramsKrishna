namespace product.management;

entity Products {
    key itemId : Integer;
    desc : String(100);
    qty : Integer;
    price: Integer;
}