/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

// Sample JSON data
const profiles = [
  {
    id: 1,
    name: "Natalie Paisley",
    role: "CEO / Co-Founder",
    img: "https://docs.material-tailwind.com/img/team-3.jpg",
    socials: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
    },
  },
  {
    id: 2,
    name: "John Doe",
    role: "CTO",
    img: "https://docs.material-tailwind.com/img/team-1.jpg",
    socials: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
    },
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Marketing Head",
    img: "https://docs.material-tailwind.com/img/team-2.jpg",
    socials: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
    },
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "Lead Developer",
    img: "https://docs.material-tailwind.com/img/team-4.jpg",
    socials: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
    },
  },
  {
    id: 5,
    name: "Alice Brown",
    role: "Product Manager",
    img: "https://docs.material-tailwind.com/img/team-5.jpg",
    socials: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
    },
  },
  {
    id: 6,
    name: "Chris Evans",
    role: "UI/UX Designer",
    img: "https://docs.material-tailwind.com/img/team-6.jpg",
    socials: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram",
    },
  },
];

export function ProfileCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-background text-buttoncolor">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          className="w-full bg-background "
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardHeader
            floated={false}
            className="h-80"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <img src={profile.img} alt={`${profile.name}-profile`} />
          </CardHeader>
          <CardBody
            className="text-center"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {profile.name}
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {profile.role}
            </Typography>
          </CardBody>
          <CardFooter
            className="flex justify-center gap-7 pt-2"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Tooltip content="Like">
              <Typography
                as="a"
                href={profile.socials.facebook}
                variant="lead"
                color="blue"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={profile.socials.twitter}
                variant="lead"
                color="light-blue"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={profile.socials.instagram}
                variant="lead"
                color="purple"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
