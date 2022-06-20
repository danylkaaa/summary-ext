import React from "react";
import {
  Box,
  Center,
  Image,
  HStack,
  Badge,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Greeting } from "./Greeting";
import { AnalyzeBtn } from "../components/AnalyzeBtn";
import { StarIcon } from "@chakra-ui/icons";

type ProductFoundProps = {
  // pass
};

const Rating = () => {
  return (
    <Box display="flex" mt="2" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon key={i} color={i < 5 ? "teal.500" : "gray.300"} />
        ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        5 831 reviews
      </Box>
    </Box>
  );
};

export const ProductCard = () => {
  return (
    <HStack>
      <Image
        src={"https://m.media-amazon.com/images/I/81Fer8PyyGS._AC_SX679_.jpg"}
        w={"80px"}
        h={"80px"}
      />
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        textOverflow={"ellipsis"}
      >
        LEGO Marvel Infinity Gauntlet 76191 Collectible Building Kit
        <HStack>
          <Badge>toy</Badge>
          <Badge>Amazon</Badge> <Badge>$55</Badge>
        </HStack>
        <Rating />
      </Box>
    </HStack>
  );
};

const Characteristic: React.FC<{
  review: {
    name: string;
    text: string;
    color: string;
  };
}> = ({ review }) => {
  return (
    <Box shadow={"sm"} borderWidth={"1px"} p={2}>
      <Badge colorScheme={review.color}>{review.name}</Badge> {review.text}
    </Box>
  );
};
const Reviews = () => {
  const reviews = [
    {
      name: "quality",
      text: "Lego does a very high quality toy. Everything sticks together well. All parts fit perfectly",
      color: "purple",
    },
    {
      name: "fun",
      text: "My kid loves it. It's a pleasure to collect.  The best gift of all",
      color: "green",
    },
    {
      name: "price",
      text: "Overpriced. There are few parts for that price",
      color: "blue",
    },
  ];
  return (
    <Box>
      <HStack>
        {reviews.map((r) => (
          <Badge colorScheme={r.color} key={r.name}>
            {r.name}
          </Badge>
        ))}
      </HStack>
      <List spacing={1} mt={2}>
        {reviews.map((review) => (
          <ListItem key={review.name}>
            <Characteristic review={review} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const ProductFound: React.FC<ProductFoundProps> = ({}) => {
  return (
    <Box>
      <Greeting analyzed />
      <Box m={2}>
        <ProductCard />
        <Box mt={2}>
          <Reviews />
        </Box>
      </Box>
      <Center>
        <AnalyzeBtn />
      </Center>
    </Box>
  );
};
