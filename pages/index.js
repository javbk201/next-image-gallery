import {getCuratedPhotos} from "../lib/api";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { Box, Container, Text, Wrap, WrapItem } from "@chakra-ui/react";


export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}

export default function Home({data}) {
  const [photos, setPhotos] = useState(data.photos);
  return (
          <div>
            <Head>
              <title> NextJS Image Gallery</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box overflow="hidden" bg="purple.100" minH="100vh">
              <Container>
                <Text
                  color="pink.800"
                  fontWeight="semibold"
                  mb="1rem"
                  textAlign="center"
                  textDecoration="underline"
                  fontSize={["4x1", "4x1", "5x1", "5x1"]}
                  >
                  NextJS Image Gallery
                </Text>
                <Wrap px="1rem" spacing={4} justify="center">
                  {photos.map((pic) => (
                    <WrapItem
                      key={pic.id}
                      boxShadow="base"
                      rounded="20px"
                      overflow="hidden"
                      bg="white"
                      lineHeight="0"
                      _hover={{ boxShadow: "dark-lg" }}
                    >
                      <Image src={pic.src.portrait} height={600} width={400} alt={pic.url} />
                    </WrapItem>
                  ))}
                  </Wrap>
              </Container>
            </Box>
          </div>
  )
}
