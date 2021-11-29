import React, { Component } from 'react';
import { connect } from 'react-redux';
import GOTimg from "../../img-cp2/main-image-cp2.jpg";
import { getAllHouses } from '../../redux/actions';
import HouseCard from '../HouseCard/HouseCard';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS 
// Y MAP_DISPATCH_TO_PROPS!! <3
export class Houses extends Component {
    
    componentDidMount()
    {
        this.props.getAllHouses()
    }

    render() {
        return (
            <div>
                <h1>Game of Thrones</h1>
                <img src={GOTimg} alt="main-img" />
                <h3>Houses</h3>
                {
                    this.props.houses && this.props.houses.map(house => (
                        <HouseCard
                        id={house.id}
                        region={house.region}
                        name={house.name}
                        words={house.words}
                        characters={house.characters}
                        key={house.id}
                        />
                    ))
                }
            </div>
        );
    };
};

export const mapStateToProps = function(state)
{
    return {
        houses: state.houses
    }
};

export const mapDispatchToProps = function(dispatch)
{
    return {
        getAllHouses: houses => dispatch(getAllHouses(houses))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Houses);