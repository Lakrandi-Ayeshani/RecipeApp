import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <dev>
            <Link to='/'>Home</Link>
            <Link to='/auth'>Login/ Register</Link>
            <Link to='/create-recipe'>Create Recipe</Link>
            <Link to='saved-recipes'>Saved Recipes</Link>
        </dev>
    )

}