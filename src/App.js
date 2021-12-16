import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      Description:
        "This is a book about instructing computers. Computers are about as common as screwdrivers today, but they are quite a bit more complex, and making them do what you want them to do isn’t always easy."
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      Description:
        "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. The 'You Don’t Know JS' is a series of books which explores JavaScript types in greater depth."
    },
    {
      name: "JavaScript & JQuery",
      rating: "3.6/5",
      Description:
        "This full-color book adopts a visual approach to teaching JavaScript and jQuery, showing you how to make web pages more interactive and interfaces more intuitive through the use of inspiring code examples, infographics, and photography."
    }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      Description:
        "It is a great book for anyone studying India’s culture and history. It is a work of fiction and take its “facts” with a pinch of salt. But, don’t let the occasional cliche and bad editing stop you from reading this amazin"
    },
    {
      name: "Pride and Prejudice",
      rating: "6/5",
      Description:
        "At its core, Pride and Prejudice tells the love story of Elizabeth Bennet and Mr. Darcy, both of whom have to overcome their biases in order to end up together."
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      Description:
        "The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles "
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
      Description:
        "The idea that we should approach social interactions as negotiations will feel distasteful to many. According to Voss, that is because we misunderstand what a negotiation is. ... "
    },
    {
      name: "Fooled by Randomness",
      rating: "4.3/5",
      Description:
        " Fooled By Randomness: The Hidden Role Of Chance In The Markets And In Life explains in detail the theory of luck, our popular conception regarding luck and its applications in everyday life."
    },
    {
      name: "Loonshots",
      rating: "5/5",
      Description:
        "Loonshots reveals a surprising new way of thinking about the mysteries of group behavior that challenges everything we thought we knew about nurturing radical breakthroughs."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Reading is a Conversation All books talk but a good books Listen as well ,you know you have read a good book when you turn the last page and feel a little as if you have a lots of friends.That's the things about books.They let you travel without moving your feet.The more that you read, the more things you will know.It is a thing to start life with  a small number of really good books which are your  very own. Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <div style={{ fontSize: "smaller" }}> {book.Description} </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
