import { Inter } from "@next/font/google";
import { Box, Container, Grid, TextField } from "@mui/material";
import { Input } from "@mui/joy";

export default function Home() {
	return (
		<>
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Input sx={{ marginY: "auto", alignSelf: "center" }} />
			</Container>
		</>
	);
}
