// src/components/Chatbot.jsx (example path)



import React, { useState } from "react";

import "./Chatbot.css";

// import "../chatbot.css";



const Chatbot = () => {

 const [open, setOpen] = useState(false);

 const [messages, setMessages] = useState([

 { sender: "bot", text: "Hi 👋 How can I help you today?" }

 ]);

 const [input, setInput] = useState("");



 const toggleChat = () => setOpen(!open);



 const getBotResponse = (msg) => {

 const text = msg.toLowerCase();

 


 if (text.includes("price") || text.includes("cost") || text.includes("fare")) {

 return "Prices are listed on the products card. Select a product to view details.";

 } else if (text.includes("buy") || text.includes("buying")) {

 return "Click 'Buy now' on your preferred product to proceed.";

 } else if (text.includes("hello") || text.includes("hi,hey,hello,hae")) {

 return "Hello! 😊 How can I assist you today?";

 } else if (text.includes("payment")) {

 return "We support secure payment after selecting a product.";

 } else if (text.includes("cancel")) {

 return "To cancel purchase, please contact support or check your booking details.";

 } else if (text.includes("refund")) {

 return "Refunds depend on the cancellation policy of the product provider.";

 } else if (text.includes("time") || text.includes("departure")) {

 return "opening times are listed on the mart's website.";

 } else if (text.includes("location") || text.includes("pickup")) {

 return "Pickup locations are shown on our websites.";

 } else if (text.includes("destination")) {

 return "Each parcelrider shows its destination in the description.";

 } else if (text.includes("available")) {

 return "All available products and patchriders are displayed on this page.";

 } else if (text.includes("seat")) {

 return "Seat availability is shown during booking.";

 } else if (text.includes("driver")) {

 return "Driver details will be shared after parcel confirmation.";

 } else if (text.includes("ticket")) {

 return "Your receipt will be generated after successful purchase.";

 } else if (text.includes("receipt")) {

 return "A receipt will be provided after payment.";

 } else if (text.includes("discount")) {

 return "Discounts may be available during promotions.";

 } else if (text.includes("offer")) {

 return "Check regularly for special offers and discounts.";

 } else if (text.includes("support") || text.includes("help")) {

 return "You can ask me anything about where the mart is located 😊";

 } else if (text.includes("location")) {

 return "locations are described in our website.";

 } else if (text.includes("products")) {

 return "Different bus products are available for selection.";

 } else if (text.includes("parcel")) {

 return "parcels policies depend on the patchrider.";

 } else if (text.includes("wifi")) {

 return "Some buses offer WiFi. Check the description.";

 } else if (text.includes("promotion")) {

 return "Promotion availability depends on the bus service.";

 } else if (text.includes("night")) {

 return "Night patchriders are available for selected routes.";

 } else if (text.includes("day")) {

 return "Daytime deliveryriders are also available.";

 } else if (text.includes("schedule")) {

 return "Schedules are shown on each bus card.";

 } else if (text.includes("delay")) {

 return "In case of delays, you will be notified.";

 } else if (text.includes("confirm")) {

 return "You will receive confirmation after purchasing.";

 } else if (text.includes("account")) {

 return "You may need an account to manage purchase.";

 } else if (text.includes("login")) {

 return "Please log in to continue purchasing.";

 } else if (text.includes("register") || text.includes("signup")) {

 return "Create an account to start product purchase.";

 } else {

 return "Sorry, I didn’t understand that 😕. For quick help, call or WhatsApp us on 0700745263.";

 }

 };



 const sendMessage = () => {

 if (!input.trim()) return;



 const userMessage = { sender: "user", text: input };

 const botMessage = { sender: "bot", text: getBotResponse(input) };



 setMessages([...messages, userMessage, botMessage]);

 setInput("");

 };



 return (

 <div>

 <button className="chat-toggle" onClick={toggleChat}>💬</button>



 {open && (

 <div className="chatbox">

 <div className="chat-header">

 <span>Support</span>

 <button onClick={toggleChat}>✖</button>

 </div>



 <div className="chat-body">

 {messages.map((msg, index) => (

 <div key={index} className={msg.sender}>

 {msg.text}

 </div>

 ))}

 </div>



 <div className="chat-footer">

 <input

 type="text"

 value={input}

 onChange={(e) => setInput(e.target.value)}

 />

 <button onClick={sendMessage}>Send</button>

 </div>

 </div>

 )}

 </div>

 );

};



export default Chatbot;