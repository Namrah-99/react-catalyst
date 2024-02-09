import { useState } from "react";
import "./eat-n-split.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function EatNSplitMain() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setShowAddForm(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  function handleSelection(friend) {
    setSelectedFriend((currentlySelected) =>
      currentlySelected?.id === friend.id ? null : friend
    );
    setShowAddForm(false);
  }

  return (
    <div className="eat-n-split-main">
      <div className="eat-n-split-sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddForm && <FormAddFriend onAddFriend={handleAddFriend} />}

        <ButtonComp
          onBtnClick={() => setShowAddForm((showAddForm) => !showAddForm)}
        >
          {showAddForm ? "Close" : "Add Friend"}
        </ButtonComp>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    onAddFriend({ id: crypto.randomUUID(), name, image, balance: 0 });

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend eat-n-split-form" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <ButtonComp>Add</ButtonComp>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form
      className="eat-n-split-main-grow form-split-bill eat-n-split-form"
      onSubmit={handleSplitBill}
    >
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value > bill ? paidByUser : e.target.value)
          )
        }
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <br />
      <ButtonComp>Split bill</ButtonComp>
    </form>
  );
}

function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={`${isSelected ? "eat-n-split-selected" : ""}`}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="me-owes">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="friend-owes">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <ButtonComp
        onBtnClick={() => onSelection(friend)}
        classWhenNotSelected="eat-n-split-button-not-selected"
      >
        {isSelected ? "Close" : "Select"}
      </ButtonComp>
    </li>
  );
}

function ButtonComp({ onBtnClick, children, classWhenNotSelected }) {
  return (
    <button className="eat-n-split-button effect01" onClick={onBtnClick}>
      {children}
    </button>
  );
}
