 import { useQuery } from "@tanstack/react-query";
 import { useRoute } from "wouter";
 import BookingForm from "./BookingForm";
 import Card from "@mui/material/Card";
 import CardActions from "@mui/material/CardActions";
 import CardContent from "@mui/material/CardContent";
 import CardMedia from "@mui/material/CardMedia";
 import Typography from "@mui/material/Typography";

const fetchHotel = async (id) => {
const response = await fetch(`http://localhost:2005/hotels/${id}`);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

const HotelDetails = () => {
	const [match, params] = useRoute("/hotel/:id");
	const {
		data: hotel,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["hotel", params], // por si pasa algo queryKey estaba asi=queryKey:["hotel", params.id]= pero lo quite porque al recargar me devolvia null
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
