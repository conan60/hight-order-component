import React from 'react';
import Spinner from '../Spinner/Spinner'
import Movie from '../Movie/Movie'

function withLoadign(Component) {
    return Component.props.isLoading ? <Spinner key={Component.props.ident}/>  : <Movie key={Component.props.ident} {...Component.props}/>;
    
}

export default withLoadign;
