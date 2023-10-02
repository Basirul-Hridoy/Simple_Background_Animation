import "./App.css"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const animationDuration = 3;

const BackgroundAnimation = () => {
    const screenWidth = window.innerWidth;
    let numBlocks; // Adjust the number of blocks as needed

    // Define different block counts based on screen width
    if (screenWidth <= 768) {
        // For mobile devices
        numBlocks = 200;
    } else {
        // For tablets and desktop
        numBlocks = 800;
    }
    const blocks = [];

    for (let i = 0; i < numBlocks; i++) {

        const style = {
            top: getRandomInt(0, 100) + '%', // Randomly position blocks vertically
            left: getRandomInt(0, 100) + '%',
            animationDelay: `${getRandomInt(0, animationDuration)}s`,
        };

        blocks.push(
            <div key={i} className="block" style={style}></div>
        );
    }

    return (
        <div className="background-animation">
            {blocks}
        </div>
    );
}

export default BackgroundAnimation;

