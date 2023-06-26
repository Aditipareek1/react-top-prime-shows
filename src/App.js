import Card from './Card'
import Sdata from './Sdata';

// function ncard(val){
//     return(
//         <Card 
//         imgSrc = {val.imgSrc}
//         genre = {val.genre}
//         link={val.Link}
//         title ={val.title} />
//     )
// }

function App(){
    return(
        <>
        <h1 className='heading_style'>My Top 5 Prime Shows</h1>
        {Sdata.map((val)=>{
            return(
                <Card 
                imgSrc = {val.imgSrc}
                genre = {val.genre}
                link={val.Link}
                title ={val.title} />
            )
        })};
        </>
    )
}

export default App;