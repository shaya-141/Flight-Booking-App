import { toast } from "sonner"

export const addItemToLocalStorage = (key,value)=>{
    // const  dataArray = [] 

    try {
        const existData = localStorage.getItem(key)
        
        const dataArray = existData ? JSON.parse(existData) : []
      
        console.log(dataArray);
        
        let isDuplicate =  dataArray.some((item)=> item.flight_number === value.flight_number)
        console.log(isDuplicate);
        
        if (!isDuplicate) {
            dataArray.push(value)
            localStorage.setItem(key,JSON.stringify(dataArray))
            console.log('add to favourite successfully',dataArray);
            toast.success('Added TO Favourite Successully')

        }
        else{
            toast.error('Already Added')

        }

        
    } catch (error) {
        console.log(error);
        
    }
    

}

