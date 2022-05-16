
var data = [{
  "id": 1,
  "text": "Uzbekistan boxing official defamed in book alleging Olympic swindle",
  "doc": "refugees from attacks in Ukraine"
}, {
  "id": 2,
  "text": "Russian space agency warns power cuts could be \“catastrophic\"",
  "doc": "bye"
}, {
  "id": 3,
  "text": "Russia may opt back into arms control treaty: Putin",
  "doc": "refugees from attacks"
}, {
  "id": 4,
  "text": "Militant groups banned, but extremism survives in Pakistan by Mazhar Abbas",
  "doc": "refugees from"
}, {
  "id": 5,
  "text": "IAEA inspectors to visit North Korea’s nuclear site at the weekend",
  "doc": "refugees from attacks"
}, {
  "id": 6,
  "text": "Arab anti-terror academy reopens in Riyadh",
  "doc": "bye"
}, {
  "id": 7,
  "text": "South Korean fighter project under attack in parliament",
  "doc": "refugees"
}, {
  "id": 8,
  "text": "Japanese politician warns China of Tokyo’s nuclear option",
  "doc": "refugees from attacks in Ukraine"
}, {
  "id": 9,
  "text": "Strict intellectual property rights would boost ASEAN trade: EU",
  "doc": "bye"
}, {
  "id": 10,
  "text": "Russia helping Iran to develop nuclear weapons: Greenpeace",
  "doc": "bye"
}]

function List(props: { input: string; }) {
  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
      //if no input the return the original
      if (props.input === '') {
          return el;
      }
      //return the item which contains the user input
      else {
          return el.text.toLowerCase().includes(props.input);
      }
  })
  return (
      <div>
          {filteredData.map((item) => (
              <p key={item.id}><a href="/doc">{item.text}</a></p>
          ))}
      </div>
  )
}

export default List;