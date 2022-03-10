const RenderCat = () => {
    const [catFact, setCatFact] = React.useState('Click to display cat fact!');
    const [randomCatPic, setRandomCatPic] = React.useState("./PlaceHolderImage.png");
    
    const RefreshCats = (event) => {
        fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
        .then(response => response.json())
        .then(data => setCatFact(data.text));

        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => setRandomCatPic(data[0].url));

        event.preventDefault();
    };

    return (
        <form class="vertical-center">
            <>
            <label>Press Refresh for More Cat!</label>
            <p><button onClick={RefreshCats}>Refresh Cat</button></p>
            <p><h1>Cat Fact:</h1></p>
            <p>{catFact}</p>
            <p><img class="catImageSize" src={randomCatPic} /></p>
            </>
            </form>
    );
};
// ============================================
ReactDOM.render(<RenderCat />, document.getElementById('root'));