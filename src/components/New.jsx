import { Card, CardActions, CardContent, CardMedia, Link, Grid, Typography } from "@mui/material"

export default function New({new1}) {
    const{ urlToImage, url, title, description, source} = new1
  return (
    <Grid item md={6} lg={4}>
        <Card>
            {urlToImage && (
            <CardMedia
                height={'250'}
                component="img"
                alt={`Image of the new ${title}`}
                image={urlToImage}
            />)}
            <CardContent>
                <Typography variant="body1" color="error" >{source.name}</Typography>
                <Typography variant="h5" component="div" >{title}</Typography>
                <Typography variant="body2" >{description}</Typography>
            </CardContent>
            <CardActions>
                <Link
                    href={url}
                    target="_blank"
                    variant="button"
                    color={'error'}
                    width={'100%'}
                    textAlign={'center'}
                    sx={{
                        textDecoration: 'none'
                    }}
                >Read New</Link>
            </CardActions>
        </Card>
    </Grid>
  )
}
