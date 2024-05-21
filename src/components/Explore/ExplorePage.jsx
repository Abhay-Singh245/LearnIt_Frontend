
import React, { useEffect, useState } from 'react'
import { Button, Container, Heading, Text ,Image ,HStack, Radio, Stack ,RadioGroup, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/actions/user';
import { addToPlaylist } from '../../redux/actions/profile';
import { Dispatch } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { getTopCourses } from '../../redux/actions/other';
import toast from 'react-hot-toast';

 
const ExplorePage = () => {

    const [content ,setContent] = useState("Courses");

    const dispatch = useDispatch();
    const { topCourses , error , message , loading} = useSelector(
            state => state.other
    );


    const addToPlaylistHandler = async courseId => {
        await dispatch(addToPlaylist(courseId));
        dispatch(loadUser());
      };
      
      useEffect(() => {

        dispatch(getTopCourses());
   //     console.log(topCourses);
    
        if (error) {
          toast.error(error);
          dispatch({ type: 'clearError' });
        }
    
        if (message) {
          toast.success(message);
          dispatch({ type: 'clearMessage' });
        }
      }, [ content, dispatch, error, message]);

    
  return (
      <Container>         

          <RadioGroup value={content} onChange={setContent} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"Educators"}>Our Top Educators</Radio>
              <Radio value={"Courses"}>Our Top Courses</Radio>
              <Radio value={"Matarials"}>Our Top Materials</Radio>
            </HStack>
          </RadioGroup> 
          
          <Stack
          direction={['column', 'row']}
          flexWrap="wrap"
          justifyContent={['flex-start', 'space-evenly']}
          alignItems={['center', 'flex-start']}
        >
          { content === "courses" && topCourses.length > 0 ? (
            topCourses.map(item => (
             <ShowTopCourses
             key={item._id}
             title={item.title}
             description={item.description}
             views={item.views}
             imageSrc={item.poster.url}
             id={item._id}
             creator={item.createdBy}
            educator={item.educatedBy}
             lectureCount={item.numOfVideos}
             addToPlaylistHandler={addToPlaylistHandler}
             loading={loading}
             />
            ))
          ) : (
           
            <Heading mt="4" children={`${content} not found`}  />
          )}
             </Stack>
          
      </Container>
  )
};

export default ExplorePage

const showTopEducators = () =>{


}

const ShowTopCourses = ({
    views,
    title,
    imageSrc,
    id,
    addToPlaylistHandler,
    creator,
    educator,
    description,
    lectureCount,
    loading,
  }) => {
    return (
      <VStack className="course" alignItems={['center', 'flex-start']}>
        <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
        <Heading
          textAlign={['center', 'left']}
          maxW="200px"
          size={'sm'}
          fontFamily={'sans-serif'}
          noOfLines={3}
          children={title}
        />
        <Text noOfLines={2} children={description} />
  
        <HStack>
          <Text
            fontWeight={'bold'}
            textTransform="uppercase"
            children={'Creator'}
          />
          <Text
            fontWeight={'bold'}
            textTransform="uppercase"
            children={'Educator'}
          />
  
          <Text
            fontFamily={'body'}
            textTransform="uppercase"
            children={creator}
          />
        </HStack>
  
        <Heading
          textAlign={'center'}
          size="xs"
          children={`Lectures - ${lectureCount}`}
          textTransform="uppercase"
        />
  
        <Heading
          size="xs"
          children={`Views - ${views}`}
          textTransform="uppercase"
        />
  
        <Stack direction={['column', 'row']} alignItems="center">
          <Link to={`/course/${id}`}>
            <Button colorScheme={'yellow'}>Watch Now</Button>
          </Link>
          <Button
            isLoading={loading}
            variant={'ghost'}
            colorScheme={'yellow'}
            onClick={() => addToPlaylistHandler(id)} 
          >
           Add to Playlist
          </Button>
        </Stack>
      </VStack>
    );
  };

const showTopMaterials = () =>{


}