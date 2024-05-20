//  import { useQuery } from "@tanstack/react-query";
//  import { useRoute } from "wouter";
 import BookingForm from "./BookingForm";
 import Card from "@mui/material/Card";
 import CardActions from "@mui/material/CardActions";
 import CardContent from "@mui/material/CardContent";
 import CardMedia from "@mui/material/CardMedia";
 import Typography from "@mui/material/Typography";

 import data from "./db.json"

 const HotelDetails = (params) => {
	const hotelId = params.params.id;
	const hotel = data.hotels.find(h => h.id == hotelId);
	console.log('Hotel ID:', params.params.id);


	if (!hotel) {
		return <div>Hotel no encontrado</div>;
	}

	return (
		<main>

		<Card id="cardAuto">
		<CardMedia sx={{ height: 360 }} image={hotel.image2} title={hotel.name} />
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{hotel.name} <br /> {hotel.description}
			</Typography>
		
			<Typography variant="body2" color="text.secondary">
				{hotel.acerca}
			</Typography>
		


		</CardContent>
	</Card>

		<Card id="cardAuto" >
			<CardMedia sx={{ height: 170 }} image={hotel.image} title={hotel.name} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{hotel.name}
				</Typography>
				
				<Typography variant="body2" color="text.secondary">
					{hotel.description}
				</Typography>
			</CardContent>
			<CardActions>
				<BookingForm />
			</CardActions>
		</Card>
		</main>		
	);
};

export default HotelDetails;
