import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import SaleForm from "./SaleForm";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";



const fetchHotel = async (id) => {
const response = await fetch(`http://localhost:2005/carros/${id}`);
   if (!response.ok) {
       throw new Error("Network response was not ok");
   }
   return response.json();
};

const CarsDetails = () => {
   const [match, params] = useRoute("/carro/:id"); // match no lo parece pero influye en el resultado 
   const {
       data: carro,
       isLoading,
       error,
   } = useQuery({
       queryKey: ["carro", params.id],
       queryFn: () => fetchHotel(params.id),
   });

   if (isLoading) {
       return <div>Loading...</div>;
   }

   if (error) {
       return <div>Error fetching Hotel Details! {error.message}</div>;
   }

   return (
    <main>
       <Card id="cardAuto">
           <CardMedia sx={{ height: 360 }} image={carro.image2} title={carro.name} />
           <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                   {carro.Marca} {carro.model}
               </Typography>
             
               <Typography variant="body2" color="text.secondary">
                   {carro.name}
               </Typography>
               <Typography variant="body3" color="text.secondary">
                   {carro.model} <br />
                   {carro.año}
               </Typography>


           </CardContent>
           <CardActions>
           </CardActions>
       </Card>

       <Card id="cardAuto"  >
           <CardMedia sx={{ height: 160 }} image={carro.image} title={carro.name} />
           <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                   {carro.Marca} {carro.model}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                   {"Guarantee: for accidents "}
               </Typography>
               <Typography variant="body3" color="text.secondary">
                   {"Secure: Medical"} <br />
                   {"features: Sport"}
               </Typography>
               <br />
               <Typography variant="body4" color="text.secondary">
                   {"Initial Price: $800"} 
               </Typography>


           </CardContent>
           <CardActions>
           <SaleForm />
           </CardActions>
       </Card>


    </main>


       
   );
};

export default CarsDetails;
