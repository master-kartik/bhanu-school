import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function CardNew({image, heading, body}) {
    return (
      <Card className="mt-6 w-[27vw] h-fit ">
        <CardHeader color="blue-gray" className="relative  min-h-56  max-h-56 mt-4">
          <img
            src={image}
            className="w-full h-fit scale-150"
            alt="card"
          />
        </CardHeader>
        <CardBody >
          <Typography variant="h5" className="mb-2 text-text">
            {heading}
          </Typography>
          <Typography className="text-md text-[#9C9998] tracking-tight ">
           {body}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-text">Discover</Button>
        </CardFooter>
      </Card>
    );
  }