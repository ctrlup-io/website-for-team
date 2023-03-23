import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Copyright from "./Copyright";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="sm">
      <Box my={2}>{children}</Box>
      <Box component="footer" py={4} px={2}>
        <Copyright />
      </Box>
    </Container>
  );
}
