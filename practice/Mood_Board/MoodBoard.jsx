export function MoodBoardItem({ color, image, description }) {
    return (
        <div className="mood-board-item" style={{backgroundColor: color}}>
            <img className="mood-board-image" src={image} />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    )
}

export function MoodBoard() {
    const moodItem = [
    { 
      id : 1,
      color : "Red",
      image : "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description : "Wanderer"
    },
    { 
      id : 2,
      color : "Black",
      image : "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description : "Honoured One"
    },
    { 
      id : 3,
      color : "Green",
      image : "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description : "Yaksha"
    }
  ];
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            {moodItem.map((item) => (
                <MoodBoardItem 
                key = {item.id} color={item.color} image={item.image} description={item.description}
                 />
            ))}
        </div>
    )
}