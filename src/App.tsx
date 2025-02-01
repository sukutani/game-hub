import { useState } from 'react';
import { Grid, GridItem, Show, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlateformSelector';
import SortSelector from './components/SortSelector';
import './App.css';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
