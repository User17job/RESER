import { Link } from "wouter";

import data from './db.json'

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const HotelList = () => {
let hoteles = data.hotels;


return (
	<>
	<Typography variant="h3" component="h2" sx={{textAlign:"center", marginBottom: 5}}>
		Hoteles de la zona 
	</Typography>
		
	<section>
	<Stack spacing={2}>
		{hoteles.map(hotel => (
			<Link key={hotel.id} href={`/hotel/${hotel.id}`}>
					<Card sx={{ maxWidth: 450, backgroundColor: "#e8e8e8" }}>
						<CardMedia
							sx={{ height: 140 }}
							image={hotel.image}
							title={hotel.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{hotel.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{hotel.description}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">See Details</Button>
						</CardActions>
					</Card>
			</Link>
		))}
	</Stack>
	</section>
	</>
);
};

export default HotelList;