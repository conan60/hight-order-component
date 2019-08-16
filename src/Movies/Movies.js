import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Movie from '../Movie/Movie';
import withLoading from '../HOC-movie-spinner/withLoading'


export class Movies extends Component {
    constructor(props){
        super(props);


        this.state = {
            movies : [
                {
                    name : "Robin de bois",
                    image : "http://mondocine.net/wp-content/uploads/2018/11/robin_des_bois_film_2018.jpg",
                    description : "Robin de Loxley, combattant aguerri revenu des croisades, et un chef maure prennent la tête d’une audacieuse révolte contre la corruption des institutions.",
                    isLoading : true
                },
                {
                    name : "Dora",
                    image : "https://static.actu.fr/uploads/2019/08/affiche-dora-854x1139.jpg",
                    description : "Dora débarque sur grand écran, tout comme les fameux Playmobil®. Le Roi lion est de retour, Toy Story aussi, sans oublier les autres fictions d'une semaine très familiale.",
                    isLoading : true
                }
            ]
        }
    }

    componentDidMount(){
            setTimeout(() => {

                this.setState({movies : this.state.movies.map(el=>{
                                el.isLoading = false;
                                return el;
                            })
                }) 

             }, 2000);
   
       
    }


    render() {
        return (
            <Grid container spacing={2}>
                {this.state.movies.map((el,i)=>withLoading(<Movie key={i} ident={i} {...el}/>))}
            </Grid>
        )
    }
}

export default Movies;
