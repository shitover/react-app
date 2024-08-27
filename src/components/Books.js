import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase"; // Ensure this path is correct
import { collection, addDoc, getDocs } from "firebase/firestore"; // Import Firestore functions

const BooksContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center align items */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const BookItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;

const BookName = styled.span`
  flex: 2;
`;

const BookNumber = styled.span`
  flex: 1;
  text-align: left;
`;

const BookView = styled.span`
  flex: 1;
  text-align: center;
  color: ${({ view }) =>
    view === "poor" ? "red" : view === "average" ? "white" : "green"};
`;

const AdviceContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Limit width for better appearance */
  margin-top: 20px; /* Space above the advice section */
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  text-align: center; /* Center text in the advice section */
`;

const AdviceForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AdviceInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const AdviceButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Limit width for better appearance */
  margin-bottom: 20px; /* Space below each list */
`;

const booksReadData = [
  {
    name: "Irrational Ecuberance - Robert J. Shiller",
    number: 1,
    view: "excellent",
  },

  { name: "Diplommacy - Henry Kissinger", number: 2, view: "average" },

  {
    name: "The Way to Wealth - Benjamin Franklin",
    number: 3,
    view: "excellent",
  },

  { name: "The Wealth of Nations - Adam Smith", number: 4, view: "excellent" },

  { name: "Dune - Frank Herbert", number: 5, view: "excellent" },

  { name: "12 Rules for Life - Jordan Peterson", number: 6, view: "poor" },

  { name: "Elon Musk - Walter Isaacson", number: 7, view: "poor" },

  { name: "Steve Jobs - Walter Isaacson", number: 8, view: "excellent" },

  { name: "The Infinite Machine - Camila Russo", number: 9, view: "average" },

  { name: "Yaban - Yakup Kadri Karaosmanoglu", number: 10, view: "average" },

  { name: "Animal Farm - George Orwell", number: 11, view: "excellent" },
];

const booksToReadData = [
  { name: "Being and Time - Martin Heidegger", number: 1 },

  { name: "Freakonomics - Steven D. Levitt", number: 2 },

  { name: "Man's Search for Meaning - Viktor E. Frankl", number: 3 },

  { name: "The Power of Habit - Charles Duhigg", number: 4 },

  { name: "Napoleon A Concise Biography - Andrew Roberts", number: 5 },

  { name: "The Grand Chessboard - Zbigniew Brzezinski", number: 6 },

  { name: "The Last Day of Night - Graham Farmelo", number: 7 },

  { name: "The Tragedy of Great Power Politics - John Mearsheimer", number: 8 },

  { name: "Brave New World - Aldous Huxley", number: 9 },
];

const Books = () => {
  const [advice, setAdvice] = useState("");
  const [name, setName] = useState(""); // State for user's name
  const [adviceList, setAdviceList] = useState([]); // State to store submitted advice
  const [thankYouMessage, setThankYouMessage] = useState(""); // State for thank you message

  // Fetch advice from Firestore on component mount
  useEffect(() => {
    const fetchAdvice = async () => {
      const querySnapshot = await getDocs(collection(db, "advice"));
      const adviceArray = querySnapshot.docs.map((doc) => doc.data().text);
      setAdviceList(adviceArray);
    };
    fetchAdvice();
  }, []);

  const handleAdviceSubmit = async (e) => {
    e.preventDefault();
    if (!advice || !name) {
      alert("Please enter both your advice and your name."); // Alert if fields are empty
      return;
    }
    try {
      // Add advice to Firestore
      await addDoc(collection(db, "advice"), { text: advice, name });
      setAdviceList([...adviceList, advice]); // Update local state
      setThankYouMessage(`Thanks, ${name}! Your advice has been submitted.`); // Set thank you message
      setAdvice(""); // Clear the input
      setName(""); // Clear the name input
    } catch (error) {
      console.error("Error adding advice: ", error);
    }
  };

  return (
    <BooksContainer>
      <ListContainer>
        <Title>Books I've Read This Year</Title>
        {booksReadData.map((book, index) => (
          <BookItem key={index}>
            <BookNumber>{book.number}</BookNumber>
            <BookName>{book.name}</BookName>
            <BookView view={book.view}>{book.view}</BookView>
          </BookItem>
        ))}
      </ListContainer>
      <ListContainer>
        <Title>Books on My List</Title>
        {booksToReadData.map((book, index) => (
          <BookItem key={index}>
            <BookNumber>{book.number}</BookNumber>
            <BookName>{book.name}</BookName>
          </BookItem>
        ))}
      </ListContainer>
      <AdviceContainer>
        <Title>Any Book Recomendations? :) </Title>
        <AdviceForm onSubmit={handleAdviceSubmit}>
          <AdviceInput
            type="text"
            placeholder="Enter your book advice"
            value={advice}
            onChange={(e) => setAdvice(e.target.value)}
          />
          <AdviceInput
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <AdviceButton type="submit">Submit Advice</AdviceButton>
        </AdviceForm>
        {thankYouMessage && <p>{thankYouMessage}</p>}{" "}
        {/* Display thank you message */}
      </AdviceContainer>
    </BooksContainer>
  );
};

export default Books;
