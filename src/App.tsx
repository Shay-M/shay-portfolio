import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import ProjectGrid from './components/ProjectGrid';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // smaller screen sizes
        lg: `"nav nav" "main"`, // larger screen sizes
      }}
      // templateColumns={{
      //   base: '1fr',
      //   lg: '180px 1fr',
      // }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>

      {/* <Show above="lg">
        <GridItem area={'aside'}>
          <AsideBar />
        </GridItem>
      </Show> */}

      <GridItem area={'main'}>
        <ProjectGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
