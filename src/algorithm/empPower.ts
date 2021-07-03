/* eslint-disable */
import {employee, demand, wish, absence} from "./interface"

export function empPower(finalTableArray: any) {
    
    for(let i=0; i<employee.length; i++){
        for(let j=0; j<employee[i].positiveWish!.length; j++){
            if(finalTableArray[i][employee[i].positiveWish![j]] != 0){
                employee[i].empPower! = (employee[i].empPower! - 0.2)
            }
        }
        for(let j=0; j<employee[i].negativeWish!.length; j++){
            if(finalTableArray[i][employee[i].negativeWish![j]] == 0){
                employee[i].empPower! -= 0.3
            }
        }
        for(let j=0; j<employee[i].absenceRange!.length; j++){
            if(finalTableArray[i][employee[i].absenceRange![j]] == 0){
                employee[i].empPower! -= 0.5
            }
        }        
    }    
    console.log("employee", employee);
    
}
