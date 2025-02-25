import useGenres, {type Genre} from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} objectFit='cover' src={genre.image_background}/>
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList;