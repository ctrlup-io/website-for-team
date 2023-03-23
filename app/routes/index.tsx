import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RAINBOW_GREEN, RAINBOW_PINK } from "~/styles/colors";

import useRollText from "../components/useRollText";

const profiles = ["Dev", "PO", "QA", "Testeur", "Architecte", "Ops", "DevOps"];

export default function Index() {
  const profile = useRollText({ options: profiles });
  return (
    <>
      <Typography variant="h1" mb={8}>
        Ctrl{" "}
        <Typography
          variant="h1"
          component="span"
          color="secondary"
          fontWeight={700}
          sx={{
            textShadow: `0 0 1rem ${RAINBOW_GREEN}`,
          }}
        >
          U
        </Typography>
        <Typography
          variant="h1"
          component="span"
          color="primary"
          fontWeight={700}
          sx={{
            textShadow: `0 0 1rem ${RAINBOW_PINK}`,
          }}
        >
          p
        </Typography>
      </Typography>
      <Typography mb={2}>
        Bravo, tu as trouvé un{" "}
        <Typography
          component="span"
          color="secondary"
          fontWeight={700}
          sx={{
            textShadow: `0 0 1rem ${RAINBOW_GREEN}`,
          }}
        >
          raccourci
        </Typography>
      </Typography>
      <Typography mb={2}>
        Tu es au bon endroit pour être accompagné par une équipe dans ta
        carrière et montée en compétences.
        <br />
        Notre crédo ? Échanger et partager pour évoluer ensemble.
      </Typography>
      <Typography mb={2}>
        Tu es{" "}
        <Typography
          component="span"
          color="secondary"
          fontWeight={700}
          sx={{
            textShadow: `0 0 1rem ${RAINBOW_GREEN}`,
          }}
        >
          {profile}
        </Typography>
        <br />
        mais tu n’as pas le temps de lire le contenu de notre site ?
      </Typography>
      <Box mb={2}>
        <Button
          variant="contained"
          href="https://calendly.com/d/yzs-xtt-fsk/rencontre-avec-ctrl-up"
          target="_blank"
          sx={{
            [`&::before`]: {
              content: "''",
              background: RAINBOW_PINK,
              position: "absolute",
              height: "100%",
              width: "100%",
              zIndex: -1,
              filter: "blur(1rem)",
            },
          }}
        >
          Nous rencontrer
        </Button>
      </Box>
    </>
  );
}
