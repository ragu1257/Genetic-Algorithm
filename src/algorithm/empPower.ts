/* eslint-disable */
import {employee, demand, wish, absence, lastEmployeeInfo} from "./interface"
import * as _ from "lodash";


export function empPower(finalTableArray: any) {
    console.log("employee in emppower.ts", employee);
    console.log("step 4 emp power.ts received table to update the lastEmployeeInfo ep power", lastEmployeeInfo);
    
    
    let clonedEmployee = _.cloneDeep(lastEmployeeInfo);
    // console.log("cloned before", clonedEmployee);
    
    for(let i=0; i<clonedEmployee.length; i++){
        for(let j=0; j<clonedEmployee[i].positiveWish!.length; j++){
            if(finalTableArray[i][clonedEmployee[i].positiveWish![j]] != 0){
                clonedEmployee[i].empPower! = (clonedEmployee[i].empPower! - 0.2)
            }
        }
        for(let j=0; j<clonedEmployee[i].negativeWish!.length; j++){
            if(finalTableArray[i][clonedEmployee[i].negativeWish![j]] == 0){
                clonedEmployee[i].empPower! -= 0.3
            }
        }
        for(let j=0; j<clonedEmployee[i].absenceRange!.length; j++){
            if(finalTableArray[i][clonedEmployee[i].absenceRange![j]] == 0){
                clonedEmployee[i].empPower! -= 0.5
            }
        }        
    }    
    // console.log("cloned after", clonedEmployee);
    return clonedEmployee
    // console.log("employee", employee);
    
}
