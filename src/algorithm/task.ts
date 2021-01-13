/* eslint-disable */
export function task(){

    console.log("hello");
    const employee = [
        { emp_name: 1, daily_working_time: 8, work_start_time: 6, work_end_time: 10 },
        { emp_name: 2, daily_working_time: 8, work_start_time: 6, work_end_time: 14 },
        { emp_name: 3, daily_working_time: 8, work_start_time: 8, work_end_time: 16 },
        { emp_name: 4, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
        { emp_name: 5, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
        { emp_name: 6, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
    ]
    
    const demand = [
        { start_time: 6, end_time: 8, demand: 2 },
        { start_time: 8, end_time: 13, demand: 3 },
        { start_time: 13, end_time: 15, demand: 4 },
        { start_time: 15, end_time: 18, demand: 3 }
    ]
    
    let timeTable = []
    
    // console.log(employee.length, demand[1]);
    type User = {
        employeeName: number;
        time: any
    }
    
    for (let i = 0; i < demand.length; i++) {
        let demand_requirement = demand[i].demand 
        for (let k = 0; k < employee.length; k++) {
            // let employee_total_work = employee[k].daily_working_time
            let obj = {} as User         
         console.log("this is employee[k].daily_working_time", k,employee[k].daily_working_time);
         
            if(demand_requirement>0 && employee[k].daily_working_time >= demand[i].end_time - demand[i].start_time){
                if (demand[i].start_time >= employee[k].work_start_time && demand[i].end_time <= employee[k].work_end_time) {
                    obj.employeeName = employee[k].emp_name
                    var list = [];
                    for (let l = demand[i].start_time; l <= demand[i].end_time; l++) {
                        list.push(l);
                    }
                    obj.time = list;
                    timeTable.push(obj)
                    employee[k].daily_working_time = employee[k].daily_working_time - list.length +1
                    demand_requirement = demand_requirement-1
                    
                }
            }     
     
        }
    
    }
    
    console.log(timeTable);
    let output: any[] = [];
    
    timeTable.forEach(item => {
      var existing = output.filter(function(v, i) {
        return v.employeeName == item.employeeName;
      });
      if (existing.length) {
        var existingIndex = output.indexOf(existing[0]);
        let outputNew = output[existingIndex].time.concat(item.time);
        output[existingIndex].time = outputNew.filter((item: any, pos: any) => outputNew.indexOf(item) === pos)
      } else {
        if (typeof item.time == 'string')
          item.time = [item.time];
        output.push(item);
      }
    });
    console.log(employee);
    
    console.log(output);
    
        // }
    
    
    
return {employee, output, demand}    
}
