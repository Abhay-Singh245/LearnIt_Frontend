import React from 'react';
import { Heading, Stack, VStack,Text,Button,Box,Image, HStack } from '@chakra-ui/react';
import './Home.css'
import vg from '../../assets/images/lgo.png';
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import { Link } from 'react-router-dom';




const Home = () => {
  return (
     <section className="home" justifyContent='center' alignItems='center'>
          
          <div className='container'>
            <Stack
                 direction={['column','row']}
                 height="100%"
               //  justifyContent={['center','space-between']}
                  alignItems={'center'}
                 spacing={["16","56"]}
                 >
              <VStack width={'full'} alignItems={['center','flex-end']}>
                 <Heading children ="Learn From the Experts" size={'2xl'}></Heading>
                 <Text children ="Find valuable content at reasonable Price"></Text>
             
                 <Link to = "/explore" >
                    <Button size="lg" colorScheme="yellow">
                        Explore Now !
                    </Button> 
                 </Link>   

              </VStack>
              <Image boxSize={'md'} objectFit={"contain"} src={vg}></Image>
            </Stack>
          
            </div>

            <Box>
                <Heading textAlign={"center"} 
                     
                     fontFamily={"body"} 
                     color={"yellow.400"}
                    children="Our Brands"
                    margin={'3vh'}

                    />
            </Box>
            <HStack
                justifyContent='center'
                alignItems='center'
                spacing={'2vh'}
                height={'3vh'}
                paddingBottom={'2vh'}
                 
                >
                  <CgGoogle/>
                  <CgYoutube/>
                  <SiCoursera/>
                  <SiUdemy/>
                  <DiAws/>
            </HStack>
     </section>
  )
}

export default Home