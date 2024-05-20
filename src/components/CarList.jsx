import { Link } from "wouter";

import data from './db.json';

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const CarList = () => {

console.log(data);
let autos = data.carros;
	return (
	<>	
        <Typography variant="h3" component="h2" sx={{textAlign:"center", marginBottom:6, marginTop:5 }}>
			Carros en alquiler
		</Typography>
		<section>
		<Stack spacing={2}>
			{autos.map((carro) => (
				<Link key={carro.id} href={`/carro/${carro.id}`}>
					<Card sx={{ maxWidth: 450, backgroundColor: "#e8e8e8" }}>
						<CardMedia
							sx={{ height: 140 }}
							image={carro.image}
							title={carro.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{carro.Marca}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{carro.model}
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

export default CarList;