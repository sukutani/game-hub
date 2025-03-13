import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlateformSelector';
import SortSelector from './components/SortSelector';

// undefined: the absence of a value 表示值不存在（可能是初始狀態或未選擇）
// null: the intentional absence of a value 表示有意識地設置為無值

function App() {
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
