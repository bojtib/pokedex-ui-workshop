import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Card, ListGroup, Badge } from 'react-bootstrap';

type Props = {
    pokemon: Pokemon;
}

export default function PokemonComponent(props: Props) {
    const { pokemon } = props;

    const getFamilyTag = (pokemon: Pokemon, evolution: string) => {
        if (evolution === pokemon.devolution) {
          return <Badge bg="danger">Devolution</Badge>
        }
        if (evolution === pokemon.pokemonName) {
          return <Badge bg="primary">Current</Badge>
        }
        if (evolution === pokemon.evolution) {
          return <Badge bg="success">Evolution</Badge>
        }
        return <></>
      }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Image src={pokemon.mainImage} thumbnail /></Col>
                <Col>
                    <Row>
                        Speed: <ProgressBar variant="info" now={pokemon.speed} label={pokemon.speed} />
                    </Row>
                    <Row>
                        Health points: <ProgressBar variant="danger" now={pokemon.healthPoints} label={pokemon.healthPoints} />
                    </Row>
                    <Row>
                        Attack: <ProgressBar variant="warning" now={pokemon.attack} label={pokemon.attack} />
                    </Row>
                    <Row>
                        Defense: <ProgressBar variant="success" now={pokemon.defense} label={pokemon.defense} />
                    </Row>
                    <Row className="p-2">
                        <Card>
                            <Card.Header>Pokemon type</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.pokemonType.map(type => <ListGroup.Item>{type}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </Row>
                    <Row className="p-2">
                        <Card>
                            <Card.Header>Evaluation family</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.evolutionFamily.map(evolution => <ListGroup.Item>{evolution} {getFamilyTag(pokemon, evolution)}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}