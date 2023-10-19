import { Grid, Typography, Pagination, Stack } from "@mui/material"
import useNews from "../hooks/useNews"
import New from "./New"


export default function NewsList() {
    const { news, totalNews, handleChangePage, page} = useNews()
    
    const totalPages = Math.ceil(totalNews / 20)
  return (
    <>
        <Typography
                textAlign={"center"}    
                marginY={5}
                variant="h3"
                component={'h2'}
                >
            Last News
        </Typography>
        <Grid
        container
        spacing={2}
        >
            {news.map(new1 => (
                <New
                    key={new1.url}
                    new1={new1}
                />
            ))}
        </Grid>
        
        <Stack 
            sx={{
                marginY: 5
            }}
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
        >
                 <Pagination 
                        count={totalPages} 
                        color="primary" 
                        onChange={handleChangePage}
                        page={page}
                        />
        </Stack>

    </>
  )
}
