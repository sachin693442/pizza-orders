
import {Component} from '@angular/core';

export interface OrderData {
  customerName: string;
  noOfItems: number;
  totalAmount: number;
  orderStatus: string;
  changeStatus:string;
  details:string;
}

const Order_Data: OrderData[] = [
  { customerName: 'Sachin',noOfItems:5, totalAmount: 950.27, orderStatus: 'Order Received',changeStatus:'', details:'' },
  { customerName: 'Kumar',noOfItems:2, totalAmount: 350.35, orderStatus: 'Preparing' ,changeStatus:'', details:'' },
  { customerName: 'Reddy', noOfItems:1, totalAmount: 200.22, orderStatus: 'Ready to serve' ,changeStatus:'', details:'' },
  { customerName: 'Ande', noOfItems:3, totalAmount: 350.33, orderStatus: 'Order Received' ,changeStatus:'', details:'' },
  { customerName: 'Deepu', noOfItems:4, totalAmount: 400.35, orderStatus: 'Order Received' ,changeStatus:'', details:'' },
  { customerName: 'Chinna', noOfItems:10, totalAmount: 980.54, orderStatus: 'Ready to serve' ,changeStatus:'', details:'' },
  { customerName: 'Reddy',noOfItems:5, totalAmount: 600.78, orderStatus: 'Order Received' ,changeStatus:'', details:'' },
  { customerName: 'Pruthvi', noOfItems:9, totalAmount: 820.55, orderStatus: 'Preparing' ,changeStatus:'', details:'' },
  { customerName: 'Mike', noOfItems:8, totalAmount: 722.22, orderStatus: 'Preparing' ,changeStatus:'', details:'' },
  { customerName: 'Stephen', noOfItems:11, totalAmount: 789.22, orderStatus: 'Ready to serve' ,changeStatus:'', details:'' },

];



/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-pizza-orders',
  templateUrl: './pizza-orders.component.html',
  styleUrls: ['./pizza-orders.component.scss']
})
export class PizzaOrdersComponent  {
  displayedColumns: string[] = ['customerName', 'noOfItems', 'totalAmount', 'orderStatus', 'changeStatus', 'details' ];
  dataSource = Order_Data;
   orderDetails=
    {
    customerName: '',
    noOfItems:'', 
    totalAmount: '', 
    orderStatus: '',
    changeStatus:'', 
    details:''
  };
  isShowData=false;
  

  getOrderData(row:any){
    this.isShowData=true
    this.orderDetails.customerName=row.customerName;
    this.orderDetails.noOfItems=row.noOfItems;
    this.orderDetails.totalAmount=row.totalAmount;
    this.orderDetails.orderStatus=row.orderStatus;
    this.orderDetails.changeStatus=row.changeStatus;
    this.orderDetails.details=row.details;

  }
  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.orderDetails.orderStatus=value

    this.getOrderData(value)
}
onDropdownChange(row:any){

}
}