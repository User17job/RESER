import { useForm } from "react-hook-form";
import { Typography, Input, Button } from "@mui/material";
import toast from "react-hot-toast"
import useStore from "../store";


function BookingForm({ hotel }) {
    const {
            register,
            handleSubmit,
            formState: {errors},  
    } = useForm();

    const addReservation = useStore((state) => state.addReservation);

    const onSubmit = (data) => {
        addReservation(hotel, data);
        toast.success("reservation made!");
    }
  
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="date" {...register("StartDate", {required: true})}/>
            {errors.StartDate && (
                <Typography style={{color:"red"}} > Start Date is required</Typography>
            )}
               <br />
            <Input type="date" {...register("EndDate", {required: true})}/>
            {errors.EndDate && (
                <Typography style={{color:"red"}}>Start Date is required</Typography>
            )}  
            <br />  
            <br />  
            <Button variant="contained" type="submit">Make Reservation</Button>
        </form>
    )
}
export default BookingForm;



