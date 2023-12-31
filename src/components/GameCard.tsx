
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width='250px' borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='xl'>
          {game.name}
        </Heading>
       <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
      </CardBody>
    </Card>
  );
}

export default GameCard;
