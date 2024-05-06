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
      <Card className="mt-6 w-[27vw]">
        <CardHeader color="blue-gray" className="relative h-56 ">
          <img
            src={image}
            className="w-full h-fit scale-150"
            alt="card"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-text">
            {heading}
          </Typography>
          <Typography>
           {body}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-text">Read More</Button>
        </CardFooter>
      </Card>
    );
  }