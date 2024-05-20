import { useForm } from "react-hook-form";
import { Typography, Input, Button } from "@mui/material";
import toast from "react-hot-toast"
import useStore from "../store";


function SaleForm({ carro }) {
    const {
            register,
            handleSubmit,
            formState: {errors},  
    } = useForm();

    const addReservatio = useStore((state) => state.addReservatio);

    const onSubmit = (data) => {
        addReservatio(carro, data);
        toast.success("Rent made!");
    }
  
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
             <legend>FROM WHEN?</legend> 

            <Input type="date" {...register("StartDate", {required: true})}/>
            {errors.StartDate && (
                <Typography style={{color:"red"}} > Start Date is required</Typography>
            )}
               <br />
             <legend>UNTIL?</legend> 
            <Input type="date" {...register("EndDate", {required: true})}/>
            {errors.EndDate && (
                <Typography style={{color:"red"}}>Start Date is required</Typography>
            )}  
            <br />  

            <fieldset required>
             <legend>How old are you?</legend> 
                <label htmlFor="option1">
                <Input type="radio" id="option1" value={"yes"} {...register("AGEValidation",{required: true} )} checked />Yes
               
                </label>

                <label htmlFor="option2">
                <Input type="radio" id="option2" value={"Nop"} {...register("AGE validation")} />Nop
                </label>
            </fieldset>    
            {errors.AGEValidation && (
                <Typography style={{color:"red"}}>You have to be more Than 18</Typography>
            )}  
          <br />
            <Button variant="contained" type="submit">Rent</Button>
        </form>
    )
}
export default SaleForm;



